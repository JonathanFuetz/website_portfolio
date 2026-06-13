# Inhaltsreview

Interne Arbeitsliste fuer Freigaben, fehlende Informationen und Formulierungsentscheidungen. Diese Datei ist keine oeffentliche Website-Seite.

## Noch Zu Klaeren

- Domainwunsch `jonathanfuetz.com` ist festgelegt; Verfuegbarkeit, Kauf und DNS-Anbieter sind noch offen.
- Entscheiden, ob ein PDF-Lebenslauf angeboten wird.
- Klaeren, ob ein GitHub-Profil fachlich sinnvoll und oeffentlich verlinkbar ist.
- Noten sind aktuell bewusst nicht auf der Website genannt. Spaeter entscheiden, ob Vordiplom-/Abiturnoten oeffentlich erscheinen sollen.
- REICHE GROUP wird aktuell nicht auf der Website-Hauptseite genannt.

## SEO Und Rechtliches

- `site.seo.baseUrl` verwendet aktuell `https://jonathan-fuetz.example` als reservierten Platzhalter fuer lokale/noch nicht finale Builds. Nach Kauf und DNS-Vorbereitung auf `https://jonathanfuetz.com` umstellen.
- `robots.txt` und `sitemap.xml` werden aus Astro-Endpunkten erzeugt. Fuer GitHub Pages werden `ASTRO_SITE=https://jonathanfuetz.github.io` und `ASTRO_BASE=/website_portfolio` gesetzt.
- Open-Graph-Bild ist noch nicht gesetzt. Nach Freigabe eines Portraets oder neutralen Vorschaubilds `site.seo.defaultImage` ergaenzen.
- Impressum: vollstaendiger Name, ladungsfaehige Anschrift oder rechtlich zulaessige Alternative, Kontaktmoeglichkeit und Verantwortlichkeit rechtlich pruefen.
- Datenschutz: Hosting-Anbieter, Serverlog-Hinweise und Umgang mit E-Mail-Kontakt nach Hosting-Auswahl finalisieren.
- Rechtliche Texte vor Veroeffentlichung pruefen lassen oder mit einem geeigneten Generator/Anwalt final erstellen.

## Fortsetzungsplan Domain Und Finale Veroeffentlichung

- `jonathanfuetz.com` bei einem Registrar auf Verfuegbarkeit und Preis pruefen; noch nicht als gekauft annehmen.
- Domain nur mit DNS-Zugriff kaufen; fuer die aktuelle Architektur ist kein Website-Baukasten oder separates Hosting-Paket erforderlich.
- Vor indexierbarer Veroeffentlichung Impressum und Datenschutzerklaerung finalisieren oder rechtlich pruefen lassen.
- Nach Domainkauf GitHub Pages als Custom Domain konfigurieren und DNS fuer `jonathanfuetz.com` sowie `www.jonathanfuetz.com` setzen.
- Danach technische Konfiguration aktualisieren: echte Canonical Domain, Sitemap, robots.txt, ggf. CNAME-Datei und Build-Konfiguration fuer die Hauptdomain.
- Finale QA erst nach DNS/HTTPS: Hauptdomain, `www`-Weiterleitung, interne Links, Meta-Robots, robots.txt, Sitemap, mobile Darstellung und rechtliche Seiten pruefen.
- `PUBLIC_SITE_NOINDEX` bleibt fuer die Testumgebung aktiv. Indexierung erst deaktivieren, wenn Rechtliches und Domain final freigegeben sind.

## Testveroeffentlichung

- GitHub-Remote vorhanden: `https://github.com/JonathanFuetz/website_portfolio.git`.
- GitHub-Pages-Test-URL aktiv: `https://jonathanfuetz.github.io/website_portfolio/`.
- Workflow `.github/workflows/deploy.yml` ist vorbereitet und wird nur manuell per `workflow_dispatch` gestartet.
- Testbuild setzt `PUBLIC_SITE_NOINDEX=true`; dadurch werden Meta-Robots auf `noindex, nofollow` gesetzt und `robots.txt` blockiert Crawler mit `Disallow: /`.
- GitHub Pages ist als Source `GitHub Actions` konfiguriert.
- Manueller Workflow-Lauf erfolgreich: `https://github.com/JonathanFuetz/website_portfolio/actions/runs/27467416719`.
- Online-Pruefung erfolgreich: HTTP 200, HTTPS aktiv, Basepath-Links korrekt, `noindex, nofollow` gesetzt, `robots.txt` blockiert Crawler.
- Oeffentliche Testfreischaltung ist erfolgt; finale Veroeffentlichung bleibt wegen Impressum-/Datenschutz-Platzhaltern blockiert.

## QA Meilenstein 7

- Build erfolgreich.
- GitHub-Pages-Build mit `ASTRO_SITE`, `ASTRO_BASE` und `PUBLIC_SITE_NOINDEX` erfolgreich.
- Interne Links und Hauptseiten-Anker funktionieren.
- Desktop, Tablet und Mobile ohne horizontalen Overflow geprueft.
- Ein H1 pro Seite, sinnvolle Landmark-Struktur, Skip-Link und Linktexte vorhanden.
- Farbkontraste fuer Text, Sekundaertext und Akzentfarbe liegen ueber WCAG-AA-Mindestwerten.
- Keine Tracker, keine `mailto:`-/`tel:`-Links und keine privaten Daten/Noten auf der Startseite gefunden.
- Veroeffentlichungsblocker bleiben: echte Domain, Open-Graph-Bild, Impressum, Datenschutzdetails.

## Freigaben Fuer Technische Schwerpunkte

- Fraunhofer IWU / Demonstrator fuer Hochlast-Aktoren: Bilder, technische Daten, Zeichnungen, konkrete Leistungswerte und interne Projektdetails erst nach Freigabe verwenden.
- Fraunhofer IWU / Demonstrator fuer Hochlast-Aktoren: weitere Projekte oder Aufgaben koennen spaeter in dieser Erfahrungsstation ergaenzt werden.
- Hannweber Engineering: Python-/OpenCV-Bildverarbeitung und Arduino-Verifikation sind als zusammenhaengender Schwerpunkt freigegeben.
- Fraunhofer IMWS / Klebverbindungen in fluessigem Stickstoff: Taetigkeiten sind freigegeben; konkrete Ergebnisdetails koennen spaeter ergaenzt werden.

## Formulierungen

- Kurzprofil: entscheiden, ob die Ausrichtung allgemein technisch bleibt oder staerker auf Aerodynamik, CFD und Antriebstechnik fokussiert wird.
- Schwerpunktkarten: konkrete Ergebnisse nur eintragen, wenn sie belegbar und freigegeben sind.
- Separate Projektseiten oder ein echter Projektbereich koennen spaeter ergaenzt werden, wenn ausreichend freigegebenes Material vorliegt.
- Skills: keine Prozentbalken, keine erfundenen Niveaus; Darstellung bleibt nach Anwendungskontext.

## Design-Verfeinerung

- Freigegeben und umgesetzt: dunkles Aerospace-&-Engineering-Design mit Navy-/Schieferblau-Farbwelt, Cyan-Akzent und zurueckhaltendem Stahlgruen.
- Referenz `https://anhlexuan.com/` nur fuer Seitenrhythmus, Hierarchie und visuelle Wirkung verwenden; keine Farbwelt, Inhalte, Quellcode oder Template-Kopie uebernehmen.
- Inhalte und Formulierungen wurden bei der Designphase nicht veraendert.
- Aktuell werden Platzhalter fuer Portraet und technische Schwerpunktbilder verwendet.
- Portraet, Schwerpunktbilder oder Open-Graph-Bild fehlen weiterhin als echte Assets.
- Animationen bleiben dezent und beruecksichtigen `prefers-reduced-motion`.
- Browsercheck nach Umsetzung: Desktop, Tablet und Mobile ohne horizontalen Overflow; interne Anker vorhanden; keine Konsolenfehler.
