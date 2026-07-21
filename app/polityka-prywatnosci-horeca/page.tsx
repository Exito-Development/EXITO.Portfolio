import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Polityka prywatności — Platforma sprzedażowa Horeca",
  description:
    "Polityka prywatności aplikacji mobilnej Platforma sprzedażowa Horeca (CEDC International sp. z o.o.).",
};

export default function PrivacyPolicyHorecaPage() {
  return (
    <main>
      <Header />

      <section className="legal-section section-white">
        <div className="container legal-container">
          <div className="eyebrow">Aplikacja mobilna Horeca</div>
          <h1 className="section-h2 legal-h1">Polityka prywatności</h1>
          <p className="legal-updated">Ostatnia aktualizacja: 21.07.2026</p>

          <div className="legal-content">
            <h2>1. Administrator danych</h2>
            <p>
              Administratorem danych osobowych przetwarzanych w związku z korzystaniem
              z aplikacji mobilnej „Platforma sprzedażowa Horeca” jest:
            </p>
            <p>
              <strong>CEDC International sp. z o.o.</strong> należąca do Grupy Maspex
              <br />
              ul. Kowanowska 48, 64-600 Oborniki
              <br />
              tel. +48 61 2974300, fax +48 61 2974301
              <br />
              NIP: 526-020-93-95, REGON: 002160096, KRS: 0000051098, BDO: 000010463
              <br />
              Kapitał zakładowy: 1 221 367 000,00 PLN
              <br />
              Dokumentacja: Sąd Rejonowy Poznań – Nowe Miasto i Wilda w Poznaniu,
              IX Wydział Gospodarczy Krajowego Rejestru Sądowego
            </p>
            <p>
              Biuro Zarządu: ul. Bobrowiecka 8, 00-728 Warszawa, tel. +48 22 4566000,
              fax +48 22 4566001
            </p>
            <p>
              Aplikacja została wytworzona na zlecenie CEDC International sp. z o.o.
              przez Exito Development (Brunon Lemański), który pełni rolę dostawcy
              technicznego (podmiotu przetwarzającego), nie administratora danych.
            </p>

            <h2>2. Kto może korzystać z aplikacji</h2>
            <p>
              Aplikacja jest przeznaczona wyłącznie dla zweryfikowanych klientów
              biznesowych sektora HoReCa oraz pracowników i przedstawicieli
              handlowych CEDC. Dostęp wymaga konta nadanego przez CEDC — aplikacja
              nie oferuje samodzielnej rejestracji.
            </p>

            <h2>3. Jakie dane przetwarzamy</h2>
            <table className="legal-table">
              <thead>
                <tr>
                  <th>Kategoria danych</th>
                  <th>Cel</th>
                  <th>Podstawa prawna</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Adres e-mail i dane logowania</td>
                  <td>Uwierzytelnienie i dostęp do konta</td>
                  <td>Wykonanie umowy (art. 6 ust. 1 lit. b RODO)</td>
                </tr>
                <tr>
                  <td>
                    Dane konta biznesowego (nazwa firmy, dane kontrahenta, historia
                    zamówień)
                  </td>
                  <td>Realizacja zamówień hurtowych, obsługa relacji handlowej</td>
                  <td>Wykonanie umowy</td>
                </tr>
                <tr>
                  <td>Token sesji</td>
                  <td>
                    Utrzymanie zalogowania między uruchomieniami aplikacji
                  </td>
                  <td>Uzasadniony interes — bezpieczeństwo i wygoda korzystania</td>
                </tr>
                <tr>
                  <td>
                    Zdjęcia wybrane z galerii urządzenia (opcjonalnie, np. przy
                    tworzeniu pakietów)
                  </td>
                  <td>Funkcje związane z obsługą oferty produktowej</td>
                  <td>Zgoda (dostęp do galerii wymaga potwierdzenia użytkownika)</td>
                </tr>
              </tbody>
            </table>
            <p>
              Aplikacja <strong>nie zbiera</strong> danych lokalizacyjnych, nie
              korzysta z narzędzi analitycznych ani śledzących firm trzecich, nie ma
              dostępu do kontaktów ani mikrofonu/aparatu poza jednorazowym wyborem
              zdjęcia z galerii.
            </p>

            <h2>4. Jak przechowujemy dane</h2>
            <ul>
              <li>
                Token sesji przechowywany jest lokalnie na urządzeniu w bezpiecznym
                magazynie systemowym (Keychain na iOS).
              </li>
              <li>
                Dane konta i zamówień przetwarzane są na serwerach CEDC i nie są
                przekazywane innym podmiotom poza tymi niezbędnymi do realizacji
                zamówienia (np. logistyka, systemy ERP).
              </li>
              <li>
                Zdjęcia wybrane z galerii są wykorzystywane wyłącznie w kontekście
                funkcji, do której zostały wybrane, i nie są udostępniane osobom
                trzecim poza tym celem.
              </li>
            </ul>

            <h2>5. Okres przechowywania</h2>
            <p>
              Dane konta przechowywane są przez czas trwania współpracy handlowej z
              CEDC oraz przez okres wymagany przepisami prawa (np. przepisy
              podatkowe, rachunkowe). Po zakończeniu współpracy dane mogą zostać
              zanonimizowane lub usunięte, z zastrzeżeniem obowiązków
              archiwizacyjnych.
            </p>

            <h2>6. Prawa użytkownika</h2>
            <p>Zgodnie z RODO użytkownikowi przysługuje prawo do:</p>
            <ul>
              <li>dostępu do swoich danych i uzyskania ich kopii,</li>
              <li>sprostowania danych,</li>
              <li>
                usunięcia danych („prawo do bycia zapomnianym”), w zakresie, w jakim
                nie koliduje to z obowiązkami prawnymi administratora,
              </li>
              <li>ograniczenia przetwarzania,</li>
              <li>przenoszenia danych,</li>
              <li>wniesienia sprzeciwu wobec przetwarzania,</li>
              <li>
                wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
              </li>
            </ul>
            <p>
              W celu realizacji powyższych praw prosimy o kontakt:{" "}
              <a href="mailto:b.l@exito-development.pl">
                b.l@exito-development.pl
              </a>
              .
            </p>

            <h2>7. Bezpieczeństwo</h2>
            <p>
              Dane logowania przesyłane są w sposób szyfrowany. Token sesji
              przechowywany jest w bezpiecznym, systemowym magazynie danych
              urządzenia, niedostępnym dla innych aplikacji.
            </p>

            <h2>8. Dzieci</h2>
            <p>
              Aplikacja dotyczy sprzedaży hurtowej alkoholu i jest przeznaczona
              wyłącznie dla podmiotów gospodarczych oraz osób pełnoletnich
              działających w ich imieniu. Nie jest kierowana do dzieci i nie są
              świadomie zbierane dane osób poniżej 18. roku życia.
            </p>

            <h2>9. Zmiany polityki prywatności</h2>
            <p>
              Niniejsza polityka może być okresowo aktualizowana. Data ostatniej
              aktualizacji znajduje się na początku dokumentu.
            </p>

            <h2>10. Kontakt</h2>
            <p>
              W sprawach związanych z ochroną danych osobowych prosimy o kontakt:{" "}
              <a href="mailto:b.l@exito-development.pl">
                b.l@exito-development.pl
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
