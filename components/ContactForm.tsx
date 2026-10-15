"use client";

import { useState } from "react";
import { brand, contact } from "@/data/portfolio-content";

const { form } = contact;

// No backend yet: the enquiry opens in the visitor's mail client, addressed and filled in.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `${form.subject} — ${name}`;
    const body = `${message}\n\n${name}\n${email}`;
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} data-reveal="fade">
      <div className="field">
        <label htmlFor="f-name">{form.name}</label>
        <input id="f-name" name="name" type="text" autoComplete="name organization" required />
      </div>
      <div className="field">
        <label htmlFor="f-mail">{form.email}</label>
        <input id="f-mail" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="f-msg">{form.message}</label>
        <textarea id="f-msg" name="message" rows={3} required />
      </div>
      <button type="submit" className="btn">{form.submit}</button>
      <p className="form-status" role="status">{sent ? form.sent : ""}</p>
    </form>
  );
}
