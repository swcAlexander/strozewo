"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageToggle from "./language-toggle";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Malinowy Zakątek — strona główna">
        <span className="brand-mark">m</span>
        <span>malinowy zakątek<small>STROŻEWO · POLSKA</small></span>
      </Link>

      <nav id="site-navigation" className={menuOpen ? "site-nav is-open" : "site-nav"}>
        <Link href="/#o-nas" onClick={() => setMenuOpen(false)}>O nas</Link>
        <Link href="/#praca" onClick={() => setMenuOpen(false)}>Praca na plantacji</Link>
        <Link href="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link>
      </nav>

      <div className="header-actions">
        <LanguageToggle />
        <Link className="button button-small header-booking" href="/rezerwacja">
          Zarezerwuj miejsce <span>↗</span>
        </Link>
        <button
          className={menuOpen ? "menu-toggle is-open" : "menu-toggle"}
          type="button"
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
