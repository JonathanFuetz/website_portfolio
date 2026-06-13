# Website Jonathan

Statische Portfolio-Website auf Basis von Astro.

## Entwicklung

```bash
npm install
npm run dev
```

Die lokale Entwicklungsseite läuft standardmäßig unter `http://localhost:4321`.

## Build

```bash
npm run build
```

Astro erzeugt die statischen Dateien im Ordner `dist/`.

## Projektstand

Meilenstein 1 aus `PLAN.md` ist die technische Astro-Projektgrundlage:

- Astro-Grundkonfiguration
- Basisordner unter `src/` und `public/`
- leere Startseite ohne echte persönliche Daten
- README mit lokalen Befehlen

Meilenstein 2 trennt sichtbare Inhalte von der Astro-Seitenstruktur:

- Profil, Ausbildung und Erfahrung in Markdown-Dateien unter `src/content/de/`
- Skills und technische Schwerpunkte in JSON-Dateien unter `src/content/de/`
- Startseite rendert Platzhalter aus den Inhaltsdateien
- fehlende echte Angaben bleiben als `[PLATZHALTER: ...]` markiert

Meilenstein 3 setzt die klickbare Seitenstruktur um:

- Header mit Navigation zu den Hauptabschnitten
- Footer mit rechtlichen Links
- Abschnittsanker fuer Profil, Ausbildung, Erfahrung, Kompetenzen, technische Schwerpunkte und Kontakt
- eigene Seiten fuer `Impressum` und `Datenschutz`
- rechtliche Inhalte bleiben Platzhalter bis zur Pruefung

Meilenstein 4 definiert das visuelle Grundsystem:

- zentrale Design-Tokens in `src/styles/tokens.css`
- globale Layout-, Typografie- und Komponentenregeln in `src/styles/global.css`
- responsive Header-, Grid- und Card-Regeln fuer Desktop, Tablet und Smartphone
- sichtbare Tastatur-Fokuszustaende und Skip-Link
- keine viewportabhaengigen Schriftgroessen

Meilenstein 5a bereitet die persoenlichen Inhalte vor:

- bestaetigte Profil-, Ausbildungs- und Erfahrungsdaten aus der Profilgrundlage
- technische Kompetenzen ohne erfundene Kompetenzwerte
- technische Schwerpunkte ohne vertrauliche Details oder ungepruefte Ergebnisse
- `[PRUEFEN]`-Angaben bleiben ausgeschlossen

Meilenstein 5 verfeinert Kompetenzen und technische Schwerpunkte:

- `SkillGroup` fuer Kompetenzgruppen mit Anwendungskontext
- `FocusCard` fuer Schwerpunktkarten mit Erfahrungsstation, Rolle, Methoden, Stand und Freigabestatus
- interne Freigabe- und Formulierungsnotizen in `CONTENT_REVIEW.md`
- keine Prozentwerte oder frei erfundenen Kompetenzniveaus
- freigegebene Entscheidungen zu E-Mail, Studienmodulen, Stipendien, CITY-CAR und Interessen sind eingepflegt
- Noten, private Kontaktdaten und REICHE GROUP bleiben von der Website-Hauptseite ausgeschlossen

Meilenstein 6 setzt SEO- und Metadaten-Grundlagen:

- Seitentitel, Meta Description, Canonical URL und Open Graph im `BaseLayout`
- Favicon-Platzhalter unter `public/favicon.svg`
- `robots.txt` und `sitemap.xml` mit Domain-Platzhalter
- offene rechtliche Angaben und Domain-Themen in `CONTENT_REVIEW.md`

Meilenstein 7 prueft die Qualitaet:

- Build, interne Links, Metadaten und Datenschutzscan erfolgreich
- responsive Browserchecks fuer Desktop, Tablet und Smartphone ohne horizontalen Overflow
- Accessibility-Basics: Landmark-Struktur, ein H1 pro Seite, Skip-Link, Linktexte und Kontrast geprueft
- Veroeffentlichungsblocker bleiben in `CONTENT_REVIEW.md` dokumentiert

Meilenstein 8 bereitet die Testveroeffentlichung vor:

- GitHub-Pages-Workflow unter `.github/workflows/deploy.yml`
- Workflow startet nur manuell ueber `workflow_dispatch`
- Test-URL: `https://jonathanfuetz.github.io/website_portfolio/`
- GitHub-Pages-Build setzt `ASTRO_BASE=/website_portfolio`
- Testumgebung setzt `PUBLIC_SITE_NOINDEX=true`, solange rechtliche Platzhalter offen sind
- Vor dem manuellen Start muss GitHub Pages im Repository auf Source `GitHub Actions` gestellt werden

## GitHub-Pages-Testbuild

```bash
ASTRO_SITE=https://jonathanfuetz.github.io \
ASTRO_BASE=/website_portfolio \
PUBLIC_SITE_NOINDEX=true \
npm run build
```
