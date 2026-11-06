import Link from "next/link";
import SiteHeader from "../site-header";

export default function ContactPage() {
  return (
    <main className="subpage">
      <SiteHeader />

      <section className="subhero">
        <span className="eyebrow">JESTEŚMY BLISKO</span>
        <h1>
          Znajdź nas
          <br />
          <em>w Strożewie.</em>
        </h1>
        <p>
          Nasza plantacja znajduje się w spokojnej wielkopolskiej wsi.
          Napisz do nas, a podpowiemy, jak dojechać.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-info">
          <span className="eyebrow">MALINOWY ZAKĄTEK</span>
          <h2>Porozmawiajmy.</h2>
          <p>
            Chcesz zapytać o pracę, nocleg lub dojazd?
            Wyślij zgłoszenie — odezwiemy się do Ciebie.
          </p>

          <div className="contact-actions">
            <Link href="/rezerwacja" className="button button-dark">
              Napisz do nas <span>↗</span>
            </Link>
            <a
              className="button button-dark"
              href="https://www.google.com/maps/dir/?api=1&destination=52.93241,16.90714&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jak do nas dojechać? <span>↗</span>
            </a>
          </div>

          <div className="contact-detail">
            <span>⌖</span>
            <div>
              <b>Odwiedź nas</b>
              <small>
                Strożewo, woj. wielkopolskie
                <br />
                Polska
              </small>
            </div>
          </div>

          <div className="contact-detail">
            <span>✳</span>
            <div>
              <b>Godziny pracy plantacji</b>
              <small>
                Sezonowo · szczegóły ustalamy indywidualnie
              </small>
            </div>
          </div>

          <p className="contact-note">
            Nie podaliśmy numeru telefonu ani dokładnego adresu,
            ponieważ nie zostały określone. Skorzystaj z formularza
            rezerwacji, aby się z nami skontaktować.
          </p>
        </div>

        <div className="map-wrap">
          <iframe
            title="Mapa lokalizacji wsi Strożewo, Polska"
            src="https://www.openstreetmap.org/export/embed.html?bbox=16.84%2C52.90%2C16.97%2C52.97&layer=mapnik&marker=52.93241%2C16.90714"
            loading="lazy"
          />

          <a
            href="https://www.openstreetmap.org/?mlat=52.93241&mlon=16.90714#map=14/52.93241/16.90714"
            target="_blank"
            rel="noopener noreferrer"
          >
            Otwórz mapę ↗
          </a>
        </div>
        
      </section>

      <footer className="footer">
        <Link className="brand" href="/">
          <span className="brand-mark">m</span>
          <span>
            malinowy zakątek
            <small>STROŻEWO · POLSKA</small>
          </span>
        </Link>

        <p>
          Mała wieś. Wielkie serce. <span>© 2026</span>
        </p>

        <div>
          <Link href="/">Strona główna</Link>
          <Link href="/rezerwacja">Rezerwacja</Link>
        </div>
      </footer>
    </main>
  );
}
