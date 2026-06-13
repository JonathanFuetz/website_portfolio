# Projektplan: Persönliche Portfolio-Website für Bewerbungen

## Zusammenfassung

Die erste Version wird eine kompakte, seriöse, statische Portfolio-Website auf Deutsch: ein Onepager für Profil, Ausbildung, Erfahrung, Kompetenzen, technische Schwerpunkte und Kontakt, ergänzt durch separate Seiten für Impressum und Datenschutzerklärung. Die Website wird für Jonathan Fütz als Maschinenbaustudent mit Vertiefung Luft- und Raumfahrttechnik an der Technischen Universität Dresden geplant. Fachlicher Schwerpunkt der Darstellung: Konstruktion, Mess- und Steuerungstechnik, Formgedächtnistechnik, Python-basierte Bildverarbeitung sowie studienbezogene Simulations- und Analysewerkzeuge. Die Website bleibt schnell, barrierearm, datenschutzbewusst und später leicht auf Englisch, eigene Domain und professionelle E-Mail erweiterbar.

Empfohlene Grundentscheidung: statische Website mit getrennten Inhaltsdateien in Markdown/Datenformaten, GitHub als bevorzugter Arbeits- und Veröffentlichungsweg, aber ohne harte Bindung an einen einzelnen Hosting-Anbieter.

## Inhaltsgrundlage Und Veröffentlichungsregeln

Quelle für die inhaltliche Planung ist `PROFILE_CONTENT_Jonathan_Fuetz.md`. Diese Datei ist eine Arbeitsgrundlage, nicht automatisch veröffentlichter Seitentext.

### Bestätigte öffentliche Basisdaten

- Name: Jonathan Fütz.
- Ort/Standortregion: Dresden, Deutschland.
- Studium: Diplom Maschinenbau an der Technischen Universität Dresden.
- Vertiefung: Luft- und Raumfahrttechnik.
- Aktuelle Tätigkeit: Werkstudent am Fraunhofer-Institut für Werkzeugmaschinen und Umformtechnik IWU, Abteilung Formgedächtnistechnik.
- LinkedIn: `https://www.linkedin.com/in/jonathan-fuetz/`.
- E-Mail-Adresse für die Website: `jonathan.fuetz [at] gmx [dot] net`, bewusst verschleiert und ohne `mailto:`.
- Gewuenschte eigene Domain: `jonathanfuetz.com`, Verfuegbarkeit und Kauf noch offen.

### Nicht öffentlich verwenden

- vollständige Wohnanschrift.
- Geburtsdatum.
- private Telefonnummer, sofern nicht ausdrücklich freigegeben.
- mehrere unterschiedliche E-Mail-Adressen.
- interne oder vertrauliche Projektdaten.
- nicht freigegebene Bilder, Zeichnungen oder Arbeitsergebnisse von Arbeitgebern.

### Prüf- und Freigaberegeln

- Angaben mit `[PRÜFEN]` dürfen nicht als bestätigte Fakten veröffentlicht werden.
- Der Entwurf des Kurzprofils darf als Arbeitsgrundlage verwendet werden, muss aber vor Veröffentlichung fachlich ausgerichtet werden.
- Besonders zu prüfen:
  - Soll das Kurzprofil stärker auf Aerodynamik, CFD und Antriebstechnik ausgerichtet werden?
  - Welche Bilder, technischen Daten und Projektdetails zum Fraunhofer-IWU-Demonstrator dürfen öffentlich gezeigt werden?
  - Soll der PDF-Lebenslauf öffentlich downloadbar sein?
  - Welche weiteren Tätigkeiten oder Nebenjobs sollen später zusätzlich auf der Website erscheinen?

## Struktur, Inhalte Und Gestaltung

### Seiten- und Navigationsstruktur

- `/` Hauptseite:
  - Intro mit Name Jonathan Fütz, professionellem Rollenprofil, Bewerbungsfoto-Platzhalter und Kontakt-CTA.
  - Kurzprofil: Maschinenbau, Luft- und Raumfahrttechnik, Fraunhofer-IWU-Werkstudententätigkeit, technische Anwendungsschwerpunkte.
  - Ausbildung und Auszeichnungen: TU Dresden, Abitur, Stipendien; relevante Module bleiben Platzhalter bis nachgeliefert.
  - Berufserfahrung: Fraunhofer IWU, Hannweber Engineering, Fraunhofer IMWS; KSB optional gekürzt.
  - Technische Kompetenzen: CAD/Engineering-Software, Simulation/Analyse, Programmierung/Hardware, Office, Sprachen.
  - Technische Schwerpunkte: praxisnahe Schwerpunktkarten mit Erfahrungsstation, technischem Kontext, Methoden, Tools und Stand nur wenn belegt und freigegeben.
  - Kontakt: geschützte E-Mail-Darstellung nach Festlegung, LinkedIn-Link, Standortregion Dresden.
- `/impressum/`:
  - Rechtlicher Platzhalter, später mit korrekten Pflichtangaben zu füllen.
- `/datenschutz/`:
  - Datenschutz-Platzhalter für statische Website ohne Tracking und ohne Kontaktformular.
- Später optional:
  - `/en/` englische Version.
  - `/projekte/[projekt]/` Detailseiten nur später und nur bei ausreichend belastbarem, freigegebenem Material.

### Zwingende Inhalte für Version 1

- Name, Rollen-/Profilheadline, kurzer professioneller Einleitungstext.
- Ausbildung mit belegbaren Angaben.
- Berufserfahrung mit Zeiträumen, Organisationen, Tätigkeiten und technischen Schwerpunkten.
- Technische Kompetenzen mit realem Erfahrungsgrad, ohne erfundene Einstufungen.
- 2-4 technische Schwerpunkte aus Erfahrungsstationen, falls noch keine separat veröffentlichbaren Projekt-Detailseiten vorliegen.
- Kontaktbereich mit geschützter, teilverschleierter E-Mail-Strategie.
- Impressum und Datenschutzerklärung als sichtbare Navigationseinträge oder Footer-Links.

### Geplante persönliche Inhalte für Version 1

- Rollen-/Profilheadline, Arbeitsfassung: "Maschinenbaustudent mit Vertiefung Luft- und Raumfahrttechnik und praktischer Erfahrung in Konstruktion, Mess- und Steuerungstechnik sowie Python-basierter Bildverarbeitung."
- Kurzprofil, Arbeitsfassung: Studium Maschinenbau mit Vertiefung Luft- und Raumfahrttechnik an der TU Dresden; Werkstudent am Fraunhofer IWU in der Formgedächtnistechnik; technische Demonstratoren, CAD-Konstruktion, Mess- und Steuerungstechnik; zusätzlich Python/OpenCV, Arduino-Testumgebungen sowie experimentelle Werkstoff- und Klebuntersuchungen.
- Ausbildung:
  - Technische Universität Dresden, Diplom Maschinenbau, Vertiefung Luft- und Raumfahrttechnik, seit 10/2023; relevante Module: Aerodynamik, numerische Strömungsmechanik (CFD), Luftfahrtantriebe.
  - Georg-Cantor-Gymnasium Halle (Saale), Abitur 09/2015-06/2023, MINT-EC-Zertifikat, Junior-Ingenieur-Akademie 2018-2020.
- Berufserfahrung:
  - Fraunhofer IWU, Dresden, seit 01/2025, Werkstudent Abteilung Formgedächtnistechnik.
  - Hannweber Engineering, Dresden, 08/2024-10/2024, freiwilliges Praktikum.
  - Fraunhofer IMWS, Halle (Saale), 10/2022-11/2022, Bewertung von Faserverbundsystemen.
  - KSB SE & Co. KGaA, Halle (Saale), 11/2019, Schülerpraktikum, optional stark gekürzt.
- Kenntnisse:
  - CAD/Engineering: SolidWorks, Mathcad, MATLAB.
  - Simulation/Analyse: ANSYS Workbench, LS-DYNA, Patran/Nastran, OpenFOAM, ParaView.
  - Programmierung/Hardware: Python, OpenCV, NumPy, Matplotlib, C# Grundkenntnisse, Arduino.
  - Office: Microsoft Office.
  - Sprachen: Deutsch Muttersprache, Englisch B2+, Französisch B1.
- Stipendien/Auszeichnungen:
  - Deutschlandstipendium seit 10/2024.
  - MINT-Stipendium der Gesellschaft von Freunden und Förderern der TU Dresden e. V., 10/2023-09/2024.
- Interessen optional und nachgeordnet: 3D-Druck, Klavierspielen, Leichtathletik, Kraftsport, Rennrad.
- Weitere Tätigkeiten:
  - CITY-CAR Autovermietung GmbH auf der Website-Hauptseite.
  - REICHE GROUP aktuell nicht auf der Website-Hauptseite.

### Kandidaten Für Technische Schwerpunkte

- FGL-Demonstrator / Hochlast-Aktoren auf Basis thermischer Formgedächtnislegierungen, nur mit geprüfter Freigabe zu Bildern, technischen Daten und Details.
- Python-/OpenCV-Bildverarbeitung bei Hannweber Engineering, Schwerpunkt Videoverarbeitung und Objekttrennung.
- Arduino-basierte Testumgebung zur Simulation realer Bedingungen.
- Testumgebung zur Untersuchung der Haltbarkeit von Klebverbindungen in flüssigem Stickstoff am Fraunhofer IMWS.
- Ausgewählte Studienprojekte, falls ausreichend konkrete und veröffentlichbare Angaben nachgeliefert werden; diese würden später als echte Projekte oder Detailseiten ergänzt.

### Optionale Inhalte

- Downloadbarer PDF-Lebenslauf erst nach bewusster Freigabe.
- Englische Inhalte nach der deutschen Erstversion.
- Projekt-Detailseiten, Bilder, technische Diagramme, Zertifikate, Publikationen.
- GitHub-Profil nur wenn öffentlich nutzbar und fachlich passend.
- Arbeitgeberlogos nur nach Freigabe.
- Blog, Kontaktformular, Analytics oder CMS nicht in Version 1.

### Mehrsprachigkeit

- Version 1 startet deutsch.
- Alle persönlichen Inhalte werden so strukturiert, dass später englische Inhaltsdateien ergänzt werden können.
- URL-Plan für später: Deutsch unter `/`, Englisch unter `/en/`.
- Keine automatische Übersetzung; englische Inhalte werden fachlich geprüft.

### Designrichtung

- Aktuelle Basis: hell, präzise, modern, technisch, nicht verspielt.
- Geplante Design-Verfeinerung: moderner persönlicher Auftritt mit seriös-technischer Aerospace-&-Engineering-Ästhetik.
- Zielwirkung: professioneller, visueller und eigenständiger als ein digitaler Lebenslauf, aber weiterhin glaubwürdig, übersichtlich und bewerbungstauglich.
- Nicht gewünscht: Kreativagentur-Optik, Gaming-Optik, übertrieben futuristische Effekte, Weltraumklischees, Template-Kopie.
- Referenz nur für Hierarchie, Seitenrhythmus und visuelle Wirkung: `https://anhlexuan.com/`; keine Übernahme von Farbwelt, Quellcode, Inhalten oder Template.
- Ziel-Farbwelt für die Designiteration: tiefes Navy als Grundfläche, schieferblaue Flächen und Karten, gebrochenes Weiß für Haupttexte, kühles Grau für Sekundärtexte, klares Luftfahrtblau oder gedecktes Cyan als primärer Akzent, optional zurückhaltendes Stahlgrün.
- Mögliche Ausgangswerte: Hintergrund `#08111F`, Abschnittsflächen `#0E1A2B`, Karten `#142238`, Haupttext `#F1F5F9`, Sekundärtext `#9CAABD`, Akzentblau `#38A6E8`, Zweitakzent `#56B3A6`; Werte dürfen für Kontrast und Gesamtwirkung angepasst werden.
- Typografie: modern, technisch wirkend, sehr gut lesbar, ohne dekorative Science-Fiction-Schrift; möglichst lokal/systemnah und datenschutzfreundlich.
- Bildsprache: Platz für professionelles Porträt und später technische Projekt-/Schwerpunktbilder; keine generischen Flugzeug-, Weltraum- oder Stock-Motive.
- Komponenten: stärkere Abschnittstrennung, abwechslungsreicher Seitenrhythmus, größere Schwerpunktkarten mit Bild-/Placeholderbereich, Zeitstrahl oder strukturierte Stationen für Erfahrung/Ausbildung, Kompetenzgruppen nach Anwendungskontext.
- Animationen: dezente Scroll-/Hover-Effekte, `prefers-reduced-motion` berücksichtigen, keine schweren Parallax-, Partikel- oder 3D-Effekte.
- Umsetzung nur nach separatem Designvorschlag und Freigabe; Inhalte und Formulierungen bleiben stabil.

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
        focusAreas.json
      en/
        .gitkeep
    pages/
      index.astro
      impressum.astro
      datenschutz.astro
    components/
      Header.astro
      Section.astro
      FocusCard.astro
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
- Ziel-Domain: `jonathanfuetz.com`, noch zu kaufen und per DNS zu verbinden.
- Domain-Platzhalter bis zur technischen Umstellung: `[MEINE-DOMAIN.DE]`.
- Technischer SEO-Platzhalter bis zur Domain-Auswahl: `https://jonathan-fuetz.example` in Canonicals, `robots.txt` und `sitemap.xml`.
- Geplante Hauptdomain: `https://jonathanfuetz.com`.
- Geplante Weiterleitung: `https://www.jonathanfuetz.com` leitet auf die Hauptdomain weiter.
- HTTPS ist Pflicht.
- Beim Domain-Anbieter:
  - Verfuegbarkeit von `jonathanfuetz.com` pruefen.
  - Domain kaufen, falls verfuegbar und preislich akzeptabel.
  - DNS-Einträge setzen, typischerweise `A`/`AAAA` oder `CNAME`, abhängig vom Hosting.
  - Optional später MX-Einträge für `kontakt@jonathanfuetz.com`.
- Beim Hosting-Anbieter:
  - Repository oder Build-Output verbinden.
  - Build-Befehl und Ausgabeordner konfigurieren.
  - Custom Domain hinterlegen.
  - SSL-Zertifikat aktivieren oder automatisch ausstellen lassen.
  - Redirect von `www` auf die Hauptdomain konfigurieren.
- Vor Veröffentlichung:
  - `site.seo.baseUrl`, `robots.txt` und `sitemap.xml` auf `https://jonathanfuetz.com` umstellen.
  - Open-Graph-Bild erst nach Freigabe eines Porträts oder neutralen Vorschaubilds setzen.
  - Impressum mit korrekten Pflichtangaben finalisieren.
  - Datenschutzerklärung nach Hosting-Auswahl um Anbieter, Serverlogs und E-Mail-Kontakt ergänzen.

### Fortsetzungsplan Nach Meilenstein 8

1. Domain-Entscheidung bestaetigen: `jonathanfuetz.com` ist die Ziel-Domain; Verfuegbarkeit und Kauf muessen beim Registrar geprueft werden.
2. Rechtliche Veroeffentlichungsblocker klaeren: Impressum mit korrekten Pflichtangaben sowie Datenschutzerklaerung fuer GitHub Pages, Serverlogs und E-Mail-Kontakt finalisieren oder rechtlich pruefen lassen.
3. Domain kaufen: nur Domain/DNS-Zugriff ist erforderlich; kein Website-Baukasten und kein separates Webhosting-Paket noetig, solange GitHub Pages genutzt wird.
4. DNS vorbereiten: Apex-Domain `jonathanfuetz.com` auf GitHub Pages zeigen lassen; `www.jonathanfuetz.com` als Weiterleitung oder Alias auf die Hauptdomain konfigurieren.
5. Repository fuer Custom Domain vorbereiten: GitHub-Pages-Custom-Domain setzen, CNAME-Datei bzw. Pages-Konfiguration pruefen, Astro-Build ohne Repository-Basepath fuer die echte Domain vorbereiten.
6. SEO-Konfiguration umstellen: `site.seo.baseUrl` auf `https://jonathanfuetz.com` setzen, Canonicals, Sitemap und robots.txt fuer die Hauptdomain pruefen.
7. Finale QA durchfuehren: Build, interne Links, HTTPS, Weiterleitung `www`, Meta-Robots, robots.txt, Sitemap, mobile Darstellung und rechtliche Seiten pruefen.
8. Erst nach rechtlicher Freigabe indexierbar schalten: `PUBLIC_SITE_NOINDEX` fuer die finale Umgebung deaktivieren; die GitHub-Pages-Testumgebung bleibt bis dahin blockiert.

## Lebenslauf, LinkedIn Und Inhalte

- Lebenslauf wird nicht automatisch übernommen, sondern strukturiert ausgewertet.
- Aus CV, LinkedIn und `PROFILE_CONTENT_Jonathan_Fuetz.md` werden nur belegbare, freigegebene Inhalte übernommen.
- Doppelte oder widersprüchliche Angaben werden vor Umsetzung markiert.
- Sensible Angaben wie private Adresse, Telefonnummer, Geburtsdatum oder vollständiger PDF-Lebenslauf werden nicht ohne Freigabe veröffentlicht.
- Projektinhalte werden auf Vertraulichkeit geprüft: keine internen Daten, keine proprietären Ergebnisse, keine Arbeitgebergeheimnisse.
- Noten sind aktuell bewusst nicht auf der Website-Hauptseite genannt.
- Die Website-Texte sollen sachlich und technisch präzise bleiben, nicht übertrieben werblich.

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

### Meilenstein 4b: Visuelle Design-Verfeinerung

- Ziel: Die Website optisch von einem einfachen digitalen Lebenslauf zu einem hochwertigen persönlichen Aerospace-&-Engineering-Auftritt weiterentwickeln.
- Aufgaben: Designvorschlag erstellen, danach bei Freigabe dunkles Designsystem, Hero-Inszenierung, visuelle Abschnittstrennung, moderne Schwerpunktkarten, Zeitstrahl-/Stationenlayout, Kompetenzdarstellung und dezente Bewegungen umsetzen.
- Bereiche: `src/styles/tokens.css`, `src/styles/global.css`, `src/components/`, `src/pages/index.astro`, optional `public/images/`.
- Ergebnis: Visuell eigenständiger Onepager mit stärkerem Seitenrhythmus, klarer Hierarchie und hochwertiger technischer Wirkung.
- Prüfschritte: Desktop/Tablet/Mobile-Sichtprüfung, Kontrast, Fokuszustände, `prefers-reduced-motion`, keine Inhaltsänderungen, keine neuen privaten Daten, keine unnötigen Abhängigkeiten.
- Abnahme: Design wirkt professionell, technisch und bewerbungstauglich; bleibt performant, barrierearm und ohne Template-Kopie.
- Status: umgesetzt mit Platzhaltern fuer Portraet und Schwerpunktbilder; echte Assets bleiben spaeter zu liefern.

### Meilenstein 5: Kompetenzen Und Technische Schwerpunkte

- Ziel: Technische Fähigkeiten und praxisnahe Schwerpunkte prüfbar darstellen.
- Aufgaben: Skill-Gruppen, Schwerpunktkarten, Tool-Tags, Kontext und belegbare Ergebnisse einbauen; dabei bestätigte Angaben aus `PROFILE_CONTENT_Jonathan_Fuetz.md` übernehmen und `[PRÜFEN]`-Inhalte als offene Punkte markieren.
- Bereiche: `skills.json`, `focusAreas.json`, `SkillGroup`, `FocusCard`.
- Ergebnis: Recruiter und Fachabteilungen können technische Eignung schnell erfassen.
- Prüfschritte: Keine unbelegten Kompetenzgrade, keine vertraulichen Projektdetails, keine Projektbilder oder Arbeitgeberlogos ohne Freigabe.
- Abnahme: Jede Fähigkeit und jeder technische Schwerpunkt stammt aus freigegebenem Material oder bleibt als offener Stand markiert.

### Meilenstein 5a: Persönliche Inhalte Einpflegen

- Ziel: Bestätigte öffentliche Profil-, Ausbildungs- und Erfahrungsdaten in die Inhaltsdateien übernehmen.
- Aufgaben: `profile.md`, `education.md`, `experience.md`, `skills.json` und `focusAreas.json` mit bestätigten Fakten aus `PROFILE_CONTENT_Jonathan_Fuetz.md` aktualisieren.
- Bereiche: `src/content/de/`.
- Ergebnis: Die Website enthält echte, belegbare Basisdaten statt generischer Platzhalter, aber keine privaten oder ungeprüften Angaben.
- Prüfschritte: Alle `[PRÜFEN]`-Punkte bleiben ausgeschlossen oder sichtbar als offene interne To-dos; keine private Adresse, kein Geburtsdatum, keine private Telefonnummer.
- Abnahme: Jonathan bestätigt, dass die übernommenen Angaben öffentlich verwendet werden dürfen.

### Meilenstein 6: Datenschutz, SEO Und Metadaten

- Ziel: Website auffindbar, teilbar und datenschutzarm machen.
- Aufgaben: Seitentitel, Meta Description, Canonical URL, Open Graph, Twitter Card, Favicon-Platzhalter, robots/sitemap, rechtliche Seiten.
- Bereiche: Layout/Head-Komponente, `public/`, Seitenmetadaten.
- Ergebnis: Solide SEO-Basis und Social-Media-Vorschau.
- Prüfschritte: HTML-Metadaten prüfen, keine Tracker, keine unnötig auslesbaren Kontaktdaten, `robots.txt` und `sitemap.xml` prüfen.
- Abnahme: Jede Seite hat Titel, Beschreibung, Canonical URL und Social-Metadaten; rechtliche Seiten sind verlinkt; Datenschutzprinzipien eingehalten; Domain-Platzhalter und rechtliche Lücken sind dokumentiert.

### Meilenstein 7: Qualitätssicherung

- Ziel: Technische Qualität vor Veröffentlichung absichern.
- Aufgaben: Build, Linkprüfung, Lighthouse-Check, Accessibility-Check, responsive Sichtprüfung.
- Bereiche: Gesamte Website.
- Ergebnis: Fehlerarme Version für Testveröffentlichung.
- Prüfschritte: Desktop/Mobile, Tastaturnavigation, Kontrast, Ladezeit, interne Links.
- Abnahme: Build erfolgreich, interne Links funktionieren, keine offensichtlichen Barrierefreiheitsfehler, gute Performance ohne unnötige Skripte, keine privaten Daten/Noten auf der Startseite, rechtliche Platzhalter als Veröffentlichungsblocker dokumentiert.

### Meilenstein 8: Testveröffentlichung

- Ziel: Website ohne eigene Domain online testen.
- Aufgaben: GitHub-Repository vorbereiten, GitHub Pages oder vergleichbares Hosting konfigurieren.
- Bereiche: Repository, Hosting-Einstellungen, Build-Konfiguration.
- Ergebnis: Test-URL ist öffentlich erreichbar.
- Prüfschritte: Online-Aufruf, HTTPS, Assets, mobile Darstellung, rechtliche Seiten.
- Abnahme: Website funktioniert unter Test-URL vollständig und ohne lokale Abhängigkeiten.
- Status: umgesetzt und manuell veroeffentlicht unter `https://jonathanfuetz.github.io/website_portfolio/`.
- GitHub Pages ist auf GitHub Actions gestellt; HTTPS ist aktiv.
- Der Deploy-Workflow bleibt manuell und setzt fuer die Testumgebung `noindex`, solange rechtliche Platzhalter offen sind.
- Offener Blocker vor echter/finaler Veroeffentlichung: Impressum/Datenschutz finalisieren oder rechtlich pruefen.

### Meilenstein 9: Eigene Domain

- Ziel: Spätere Domain sauber verbinden.
- Aufgaben: `jonathanfuetz.com` kaufen, DNS setzen, GitHub-Pages-Custom-Domain verbinden, HTTPS prüfen, `www` weiterleiten.
- Bereiche: Domain-Anbieter, Hosting-Anbieter, Redirect-Konfiguration.
- Ergebnis: Website läuft unter `https://jonathanfuetz.com`.
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

- Soll der öffentliche Name exakt "Jonathan Fütz" lauten?
- Soll die Rollenheadline deutsch bleiben oder zusätzlich englisch erscheinen?
- Soll die deutsche Kurzbezeichnung aus `PROFILE_CONTENT_Jonathan_Fuetz.md` verwendet oder stärker auf Aerodynamik, CFD und Antriebstechnik ausgerichtet werden?
- Welche CV-Version darf als Quelle verwendet werden und darf ein PDF-Lebenslauf später angeboten werden?
- Soll ein PDF-Lebenslauf später öffentlich, nur auf Anfrage oder gar nicht angeboten werden?
- Soll später statt der aktuell verschleierten GMX-Adresse eine professionelle Domain-E-Mail verwendet werden?
- Ziel-Domain ist `jonathanfuetz.com`; Verfuegbarkeit, Kauf und DNS-Anbieter sind noch zu klaeren.
- LinkedIn-URL `https://www.linkedin.com/in/jonathan-fuetz/` ist aktuell freigegeben.
- Welche Projekte dürfen öffentlich beschrieben werden und in welchem Detailgrad?
- Welche Bilder, technischen Daten, Zeichnungen, Logos oder Arbeitsergebnisse sind freigegeben?
- Gibt es Arbeitgeber-, Hochschul- oder Projektdaten, die vertraulich bleiben müssen?
- CITY-CAR erscheint aktuell auf der Website-Hauptseite; REICHE GROUP bleibt aktuell ausgeschlossen.
- Gibt es relevante Studienmodule, fachliche Interessen oder Zielrollen, die ausdrücklich genannt werden sollen?
- Soll ein Porträtfoto verwendet werden, und liegt dafür eine webtaugliche Version vor?
- Weitere grafische Feinschliffe werden spaeter behandelt, wenn Inhalt, Rechtliches, Domain/SEO und Veroeffentlichung geklaert sind.
- Welche echten Bild-/Asset-Dateien sollen spaeter Platzhalter fuer Portraet, Schwerpunktbilder und Open-Graph-Bild ersetzen?
- Domainwunsch: `jonathanfuetz.com`; Kauf noch offen. Platzhalter bis zur technischen Umstellung: `[MEINE-DOMAIN.DE]`.
- Soll der aktuelle technische SEO-Platzhalter `https://jonathan-fuetz.example` vor Testveröffentlichung durch eine Testdomain ersetzt werden?
- GitHub-Pages-Testveroeffentlichung ist gestartet; vor finaler Veroeffentlichung Impressum/Datenschutz pruefen.
- Welches Open-Graph-Bild darf für Social-Vorschauen verwendet werden?
- Soll später eine professionelle E-Mail-Adresse wie `kontakt@jonathanfuetz.com` eingerichtet werden?
- Müssen Impressum und Datenschutzerklärung rechtlich geprüft oder von einem Generator/Anwalt erstellt werden?

## Annahmen Und Defaults

- Startversion: Deutsch, kompakt, statisch, Onepager plus Rechtliches.
- Inhalte: getrennt von Layout und Code, bevorzugt Markdown/JSON.
- Kein CMS, kein Kontaktformular, kein Tracking in Version 1.
- GitHub wird bevorzugt, aber der statische Build bleibt zu anderen Hostern portierbar.
- Canonical Domain später: `https://jonathanfuetz.com`, `www` leitet weiter.
- Persönliche Daten werden nur nach expliziter Freigabe veröffentlicht.
