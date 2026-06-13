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
- Skills und Projekte in JSON-Dateien unter `src/content/de/`
- Startseite rendert Platzhalter aus den Inhaltsdateien
- fehlende echte Angaben bleiben als `[PLATZHALTER: ...]` markiert

Meilenstein 3 setzt die klickbare Seitenstruktur um:

- Header mit Navigation zu den Hauptabschnitten
- Footer mit rechtlichen Links
- Abschnittsanker fuer Profil, Ausbildung, Erfahrung, Kompetenzen, Projekte und Kontakt
- eigene Seiten fuer `Impressum` und `Datenschutz`
- rechtliche Inhalte bleiben Platzhalter bis zur Pruefung

Meilenstein 4 definiert das visuelle Grundsystem:

- zentrale Design-Tokens in `src/styles/tokens.css`
- globale Layout-, Typografie- und Komponentenregeln in `src/styles/global.css`
- responsive Header-, Grid- und Card-Regeln fuer Desktop, Tablet und Smartphone
- sichtbare Tastatur-Fokuszustaende und Skip-Link
- keine viewportabhaengigen Schriftgroessen
