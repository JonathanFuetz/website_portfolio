# Projektplan: Persönliche Portfolio-Website für Bewerbungen

## Zusammenfassung

Die erste Version wird eine kompakte, seriöse, statische Portfolio-Website auf Deutsch: ein Onepager für Profil, Ausbildung, Erfahrung, Kompetenzen, Projekte und Kontakt, ergänzt durch separate Seiten für Impressum und Datenschutzerklärung. Die Website wird für Maschinenbau, Luft- und Raumfahrttechnik sowie F&E-Zielgruppen optimiert, bleibt schnell, barrierearm, datenschutzbewusst und später leicht auf Englisch, eigene Domain und professionelle E-Mail erweiterbar.

Empfohlene Grundentscheidung: statische Website mit getrennten Inhaltsdateien in Markdown/Datenformaten, GitHub als bevorzugter Arbeits- und Veröffentlichungsweg, aber ohne harte Bindung an einen einzelnen Hosting-Anbieter.

## Struktur, Inhalte Und Gestaltung

### Seiten- und Navigationsstruktur

- `/` Hauptseite:
  - Intro mit Name-Platzhalter, professionellem Rollenprofil, Bewerbungsfoto-Platzhalter und Kontakt-CTA.
  - Kurzprofil: technischer Fokus, Studien-/Berufsschwerpunkt, Zielrichtung.
  - Ausbildung: Studium, Vertiefung, relevante Module, Abschlussarbeiten, Platzhalter bis Inhalte vorliegen.
  - Berufserfahrung: Praktika, Werkstudententätigkeiten, relevante Stationen.
  - Technische Kompetenzen: CAD/CAE, Programmierung, Simulation, Fertigung, Tools, Sprachen.
  - Projekte: kompakte Projektkarten mit technischem Kontext, Methoden, Tools, Ergebnis nur wenn belegt.
  - Kontakt: geschützte E-Mail-Darstellung, LinkedIn-Link, optional Standortregion.
- `/impressum/`:
  - Rechtlicher Platzhalter, später mit korrekten Pflichtangaben zu füllen.
- `/datenschutz/`:
  - Datenschutz-Platzhalter für statische Website ohne Tracking und ohne Kontaktformular.
- Später optional:
  - `/en/` englische Version.
  - `/projekte/[projekt]/` Detailseiten nur bei ausreichend belastbarem Material.

### Zwingende Inhalte für Version 1

- Name, Rollen-/Profilheadline, kurzer professioneller Einleitungstext.
- Ausbildung mit belegbaren Angaben.
- Berufserfahrung mit Zeiträumen, Organisationen, Tätigkeiten und technischen Schwerpunkten.
- Technische Kompetenzen mit realem Erfahrungsgrad, ohne erfundene Einstufungen.
- 2-4 Projekte oder Projektplatzhalter, falls noch keine veröffentlichbaren Details vorliegen.
- Kontaktbereich mit geschützter E-Mail-Strategie.
- Impressum und Datenschutzerklärung als sichtbare Navigationseinträge oder Footer-Links.

### Optionale Inhalte

- Downloadbarer PDF-Lebenslauf erst nach bewusster Freigabe.
- Englische Inhalte nach der deutschen Erstversion.
- Projekt-Detailseiten, Bilder, technische Diagramme, Zertifikate, Publikationen.
- Blog, Kontaktformular, Analytics oder CMS nicht in Version 1.

### Mehrsprachigkeit

- Version 1 startet deutsch.
- Alle persönlichen Inhalte werden so strukturiert, dass später englische Inhaltsdateien ergänzt werden können.
- URL-Plan für später: Deutsch unter `/`, Englisch unter `/en/`.
- Keine automatische Übersetzung; englische Inhalte werden fachlich geprüft.

### Designrichtung

- Stil: hell, präzise, modern, technisch, nicht verspielt.
- Typografie: gut lesbare serifenlose Schrift, klare Hierarchie, keine übergroßen Marketing-Headlines.
- Farben: neutrales Grundlayout, dunkle Textfarbe, helle Flächen, ein technischer Akzentton wie Blau, Petrol oder Stahlgrün.
- Abstände: großzügig, aber kompakt genug für schnelle Prüfung durch Recruiter.
- Bildsprache: professionelles Porträt, optional technische Projektbilder; keine generischen Stock-Motive.
- Komponenten: klare Abschnitte, kompakte Kompetenzlisten, Projektkarten mit maximal 8px Radius, keine dekorativen Effekte ohne Informationswert.

## Technische Empfehlung

### Vergleich geeigneter Lösungen

- Reines HTML/CSS/JS:
  - Sehr einfach, schnell, kaum Abhängigkeiten.
  - Nachteil: Inhalte und Layout vermischen sich stärker, Mehrsprachigkeit und wiederverwendbare Komponenten werden mühsamer.
- Astro:
  - Sehr gut für statische, schnelle Websites mit Markdown-/Dateninhalten.
  - Komponenten möglich, aber wenig JavaScript im Browser.
  - Gute Balance aus Einsteigerfreundlichkeit, Struktur, SEO und späterer Erweiterbarkeit.
- Next.js:
  - Leistungsfähig, aber für diese erste Portfolio-Version unnötig komplex.
  - Mehr Framework-Konzepte, mehr Hosting- und Build-Komplexität.
- Hugo/Jekyll:
  - Statische Klassiker, gut hostbar.
  - Weniger angenehm, wenn später moderne UI-Komponenten und strukturierte Inhalte gepflegt werden sollen.

### Begründete Stack-Empfehlung

- Empfohlen: Astro mit statischem Build, TypeScript optional sparsam, Markdown oder JSON/YAML für Inhalte.
- Styling: normales CSS mit CSS-Variablen oder ein kleines, lokales Designsystem; kein schweres UI-Framework nötig.
- Hosting: GitHub bevorzugt, Veröffentlichung zunächst testweise über GitHub Pages möglich.
- Anbieter-offen halten: Der Build erzeugt statische Dateien, die auch zu Netlify, Vercel, Cloudflare Pages oder anderem Hosting umziehen können.

### Vorgeschlagene Ordnerstruktur

```text
Website_Jonathan/
  src/
    content/
      de/
        profile.md
        education.md
        experience.md
        skills.json
        projects.json
      en/
        .gitkeep
    pages/
      index.astro
      impressum.astro
      datenschutz.astro
    components/
      Header.astro
      Section.astro
      ProjectCard.astro
      SkillGroup.astro
      Footer.astro
    styles/
      global.css
      tokens.css
  public/
    images/
      portrait-placeholder.md
    documents/
      cv-placeholder.md
  astro.config.mjs
  package.json
  README.md
```

## Datenschutz, Domain Und Veröffentlichung

- Keine erfundenen personenbezogenen Daten; fehlende Inhalte werden als `[PLATZHALTER: ...]` markiert.
- Kein Kontaktformular in Version 1.
- E-Mail nicht unnötig maschinenlesbar ausgeben; bevorzugt geschützte Darstellung mit bewusstem Klick oder teilverschleierter Schreibweise.
- LinkedIn-Link nur mit explizit bereitgestellter URL.
- Keine Tracking-Skripte in Version 1.
- Impressum und Datenschutzerklärung werden eingeplant, aber rechtliche Inhalte müssen später geprüft werden.
- Domain-Platzhalter: `[MEINE-DOMAIN.DE]`.
- Hauptdomain: `https://[MEINE-DOMAIN.DE]`.
- Weiterleitung: `https://www.[MEINE-DOMAIN.DE]` leitet auf die Hauptdomain weiter.
- HTTPS ist Pflicht.
- Beim Domain-Anbieter:
  - Domain kaufen.
  - DNS-Einträge setzen, typischerweise `A`/`AAAA` oder `CNAME`, abhängig vom Hosting.
  - Optional später MX-Einträge für `kontakt@[MEINE-DOMAIN.DE]`.
- Beim Hosting-Anbieter:
  - Repository oder Build-Output verbinden.
  - Build-Befehl und Ausgabeordner konfigurieren.
  - Custom Domain hinterlegen.
  - SSL-Zertifikat aktivieren oder automatisch ausstellen lassen.
  - Redirect von `www` auf die Hauptdomain konfigurieren.

## Lebenslauf, LinkedIn Und Inhalte

- Lebenslauf wird nicht automatisch übernommen, sondern strukturiert ausgewertet.
- Aus CV und LinkedIn werden nur belegbare, freigegebene Inhalte übernommen.
- Doppelte oder widersprüchliche Angaben werden vor Umsetzung markiert.
- Sensible Angaben wie private Adresse, Telefonnummer, Geburtsdatum oder vollständiger PDF-Lebenslauf werden nicht ohne Freigabe veröffentlicht.
- Projektinhalte werden auf Vertraulichkeit geprüft: keine internen Daten, keine proprietären Ergebnisse, keine Arbeitgebergeheimnisse.

## Meilensteine Mit Abnahme

### Meilenstein 1: Projektgrundlage

- Ziel: Leere Projektmappe in ein statisches Astro-Projekt überführen.
- Aufgaben: Astro initialisieren, Grundkonfiguration, README, Basisordner anlegen.
- Bereiche: Projektwurzel, `src/`, `public/`.
- Ergebnis: Lokale Startseite läuft ohne Inhalte.
- Prüfschritte: Installation, lokaler Start, statischer Build.
- Abnahme: Projekt startet lokal, Build erzeugt statische Dateien, keine echten persönlichen Daten nötig.

### Meilenstein 2: Inhaltsmodell

- Ziel: Persönliche Inhalte und technische Umsetzung trennen.
- Aufgaben: Markdown-/JSON-Struktur für Profil, Ausbildung, Erfahrung, Skills und Projekte anlegen.
- Bereiche: `src/content/de/`, später vorbereitet `src/content/en/`.
- Ergebnis: Alle sichtbaren Inhalte kommen aus Inhaltsdateien.
- Prüfschritte: Platzhalter werden korrekt gerendert, fehlende Inhalte klar markiert.
- Abnahme: Keine erfundenen Daten, alle fehlenden Angaben sichtbar als Platzhalter.

### Meilenstein 3: Seitenstruktur

- Ziel: Onepager plus rechtliche Seiten umsetzen.
- Aufgaben: Hauptseite mit Abschnitten, Navigation, Footer, Impressum, Datenschutz.
- Bereiche: `src/pages/`, `src/components/`.
- Ergebnis: Vollständige Informationsarchitektur ist klickbar.
- Prüfschritte: Navigation, Footer-Links, Abschnittsanker, 404-freie interne Links.
- Abnahme: Alle Pflichtbereiche sind erreichbar und logisch geordnet.

### Meilenstein 4: Designsystem

- Ziel: Seriöse technische Gestaltung herstellen.
- Aufgaben: Farben, Typografie, Abstände, responsive Layoutregeln und Komponentenstile definieren.
- Bereiche: `src/styles/`, Komponenten.
- Ergebnis: Heller, präziser visueller Auftritt auf Desktop, Tablet und Smartphone.
- Prüfschritte: Sichtprüfung bei typischen Viewports, Textüberläufe, Kontrast.
- Abnahme: Keine verspielte Agentur-Optik, alle Texte lesbar, keine Layoutüberlappungen.

### Meilenstein 5: Kompetenzen Und Projekte

- Ziel: Technische Fähigkeiten und Projekte prüfbar darstellen.
- Aufgaben: Skill-Gruppen, Projektkarten, Tool-Tags, Kontext und belegbare Ergebnisse einbauen.
- Bereiche: `skills.json`, `projects.json`, `SkillGroup`, `ProjectCard`.
- Ergebnis: Recruiter und Fachabteilungen können technische Eignung schnell erfassen.
- Prüfschritte: Keine unbelegten Kompetenzgrade, keine vertraulichen Projektdetails.
- Abnahme: Jede Fähigkeit und jedes Projekt stammt aus freigegebenem Material oder ist Platzhalter.

### Meilenstein 6: Datenschutz, SEO Und Metadaten

- Ziel: Website auffindbar, teilbar und datenschutzarm machen.
- Aufgaben: Seitentitel, Meta Description, Open Graph, Favicon-Platzhalter, robots/sitemap, rechtliche Seiten.
- Bereiche: Layout/Head-Komponente, `public/`, Seitenmetadaten.
- Ergebnis: Solide SEO-Basis und Social-Media-Vorschau.
- Prüfschritte: HTML-Metadaten prüfen, keine Tracker, keine unnötig auslesbaren Kontaktdaten.
- Abnahme: Jede Seite hat Titel und Beschreibung, rechtliche Seiten sind verlinkt, Datenschutzprinzipien eingehalten.

### Meilenstein 7: Qualitätssicherung

- Ziel: Technische Qualität vor Veröffentlichung absichern.
- Aufgaben: Build, Linkprüfung, Lighthouse-Check, Accessibility-Check, responsive Sichtprüfung.
- Bereiche: Gesamte Website.
- Ergebnis: Fehlerarme Version für Testveröffentlichung.
- Prüfschritte: Desktop/Mobile, Tastaturnavigation, Kontrast, Ladezeit, interne Links.
- Abnahme: Build erfolgreich, keine offensichtlichen Barrierefreiheitsfehler, gute Performance ohne unnötige Skripte.

### Meilenstein 8: Testveröffentlichung

- Ziel: Website ohne eigene Domain online testen.
- Aufgaben: GitHub-Repository vorbereiten, GitHub Pages oder vergleichbares Hosting konfigurieren.
- Bereiche: Repository, Hosting-Einstellungen, Build-Konfiguration.
- Ergebnis: Test-URL ist öffentlich erreichbar.
- Prüfschritte: Online-Aufruf, HTTPS, Assets, mobile Darstellung, rechtliche Seiten.
- Abnahme: Website funktioniert unter Test-URL vollständig und ohne lokale Abhängigkeiten.

### Meilenstein 9: Eigene Domain

- Ziel: Spätere Domain sauber verbinden.
- Aufgaben: `[MEINE-DOMAIN.DE]` auswählen, DNS setzen, Hosting-Domain verbinden, HTTPS prüfen, `www` weiterleiten.
- Bereiche: Domain-Anbieter, Hosting-Anbieter, Redirect-Konfiguration.
- Ergebnis: Website läuft unter `https://[MEINE-DOMAIN.DE]`.
- Prüfschritte: DNS-Auflösung, SSL-Zertifikat, Weiterleitung von `www`, Canonical URL.
- Abnahme: Hauptdomain eindeutig, HTTPS aktiv, `www` zeigt korrekt auf Hauptdomain.

## Test- Und Qualitätskontrollen

- Lokaler Build muss erfolgreich sein.
- Alle internen Links müssen funktionieren.
- Layout muss bei Smartphone, Tablet und Desktop stabil sein.
- Texte dürfen nicht überlaufen oder sich überlagern.
- Tastaturnavigation muss sinnvoll funktionieren.
- Farbkontraste müssen für seriöse Lesbarkeit ausreichend sein.
- Keine erfundenen Daten, keine vertraulichen Projektdetails.
- Keine unnötigen externen Skripte.
- SEO- und Social-Vorschau-Metadaten müssen gesetzt sein.
- Testveröffentlichung und spätere Domain müssen HTTPS verwenden.

## Offene Fragen Vor Umsetzung

- Wie lautet der vollständige Name, der öffentlich angezeigt werden soll?
- Welche Rollenheadline soll im Hero stehen, z. B. Maschinenbauingenieur, Aerospace Engineering, R&D?
- Welche CV-Version darf als Quelle verwendet werden?
- Soll ein PDF-Lebenslauf später öffentlich, nur auf Anfrage oder gar nicht angeboten werden?
- Welche E-Mail-Adresse darf öffentlich erscheinen oder geschützt dargestellt werden?
- Welche LinkedIn-URL darf verlinkt werden?
- Welche Projekte dürfen öffentlich beschrieben werden?
- Gibt es Arbeitgeber-, Hochschul- oder Projektdaten, die vertraulich bleiben müssen?
- Soll ein Porträtfoto verwendet werden, und liegt dafür eine webtaugliche Version vor?
- Welche Domain wird später gekauft? Platzhalter bis dahin: `[MEINE-DOMAIN.DE]`.
- Soll später eine professionelle E-Mail-Adresse wie `kontakt@[MEINE-DOMAIN.DE]` eingerichtet werden?
- Müssen Impressum und Datenschutzerklärung rechtlich geprüft oder von einem Generator/Anwalt erstellt werden?

## Annahmen Und Defaults

- Startversion: Deutsch, kompakt, statisch, Onepager plus Rechtliches.
- Inhalte: getrennt von Layout und Code, bevorzugt Markdown/JSON.
- Kein CMS, kein Kontaktformular, kein Tracking in Version 1.
- GitHub wird bevorzugt, aber der statische Build bleibt zu anderen Hostern portierbar.
- Canonical Domain später: `https://[MEINE-DOMAIN.DE]`, `www` leitet weiter.
- Persönliche Daten werden nur nach expliziter Freigabe veröffentlicht.
