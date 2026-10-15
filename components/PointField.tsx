"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Monochrome field of points on a plane, displaced by a slow sine wave in the
// vertex shader and tilting toward the cursor. Renders only while on screen;
// with prefers-reduced-motion it draws a single static frame.

const FIELD_W = 16;
const FIELD_H = 12;
const BASE_TILT = -1.05;

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uSize;
  varying float vFade;

  void main() {
    vec3 p = position;
    p.z += sin(p.x * 0.55 + uTime * 0.5) * 0.32
         + sin(p.y * 0.85 - uTime * 0.38) * 0.22
         + sin((p.x + p.y) * 0.32 + uTime * 0.27) * 0.18;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize / -mv.z;
    vFade = 1.0 - smoothstep(7.0, 13.5, -mv.z);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vFade;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    if (dot(c, c) > 0.25) discard;
    gl_FragColor = vec4(uColor, uOpacity * vFade);
    #include <colorspace_fragment>
  }
`;

function subscribeMedia(query: string) {
  return (onChange: () => void) => {
    const mql = window.matchMedia(query);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  };
}

function useMediaQuery(query: string) {
  const subscribe = useMemo(() => subscribeMedia(query), [query]);
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}

function readInk() {
  return getComputedStyle(document.documentElement).getPropertyValue("--ink").trim() || "#0a0a0a";
}

interface FieldProps {
  cols: number;
  rows: number;
  size: number;
  opacity: number;
  animate: boolean;
  dark: boolean;
}

function Field({ cols, rows, size, opacity, animate, dark }: FieldProps) {
  const outer = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Points>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const ink = useRef("#0a0a0a");
  const pointer = useRef({ x: 0, y: 0 });
  const invalidate = useThree((state) => state.invalidate);

  const positions = useMemo(() => {
    const data = new Float32Array(cols * rows * 3);
    let i = 0;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        data[i++] = (x / (cols - 1) - 0.5) * FIELD_W;
        data[i++] = (y / (rows - 1) - 0.5) * FIELD_H;
        data[i++] = 0;
      }
    }
    return data;
  }, [cols, rows]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSize: { value: size },
      uColor: { value: new THREE.Color() },
      uOpacity: { value: 0.6 },
    }),
    [size],
  );

  // Points in `ink`, re-read whenever the colour scheme flips.
  useEffect(() => {
    ink.current = readInk();
    invalidate();
  }, [dark, invalidate]);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state, delta) => {
    const u = material.current?.uniforms;
    if (!u) return;
    const dt = Math.min(delta, 0.05);
    u.uSize.value = size * state.viewport.dpr;
    u.uColor.value.set(ink.current);
    u.uOpacity.value = opacity;
    if (!animate) return;

    u.uTime.value += dt;
    if (outer.current && inner.current) {
      outer.current.rotation.y = THREE.MathUtils.damp(outer.current.rotation.y, pointer.current.x * 0.18, 2.5, dt);
      inner.current.rotation.x = THREE.MathUtils.damp(
        inner.current.rotation.x,
        BASE_TILT + pointer.current.y * 0.1,
        2.5,
        dt,
      );
    }
  });

  return (
    <group ref={outer}>
      <points ref={inner} rotation-x={BASE_TILT}>
        <bufferGeometry key={positions.length}>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <shaderMaterial
          ref={material}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
        />
      </points>
    </group>
  );
}

// Grid density, point size and alpha per placement. Behind text the field is finer and
// lighter, so copy stays readable — especially on phones, where near points get large.
const PRESETS = {
  slot: {
    desktop: { cols: 120, rows: 60, size: 16, opacity: 0.6 },
    mobile: { cols: 60, rows: 30, size: 20, opacity: 0.6 },
  },
  background: {
    desktop: { cols: 120, rows: 60, size: 16, opacity: 0.5 },
    mobile: { cols: 90, rows: 45, size: 12, opacity: 0.35 },
  },
};

interface Props {
  variant?: keyof typeof PRESETS;
  onReady?: () => void;
}

export default function PointField({ variant = "slot", onReady }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const mobile = useMediaQuery("(max-width: 767px)");
  const dark = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const frameloop = reduced ? "demand" : inView ? "always" : "never";
  const preset = PRESETS[variant][mobile ? "mobile" : "desktop"];

  return (
    <div ref={ref} style={{ position: "absolute", inset: 0 }}>
      <Canvas
        frameloop={frameloop}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 38 }}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        style={{ pointerEvents: "none" }}
        onCreated={() => onReady?.()}
      >
        <Field
          cols={preset.cols}
          rows={preset.rows}
          size={preset.size}
          opacity={preset.opacity}
          animate={!reduced}
          dark={dark}
        />
      </Canvas>
    </div>
  );
}
