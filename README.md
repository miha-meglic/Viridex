# Viridex

Viridex je zbirka priročnikov in učbenikov, ki pokrivajo predmete v gimnazijah, s poudarkom na strokovnih gimnazijah.

Primarni cilj je zagotoviti dostop do kakovostnih učnih gradiv, ki so prilagojena potrebam dijakov in učiteljev.

## Vsebina

- [ ] Priročnik za računalništvo na maturi (v delu)
- [ ] Učbenik za računalništvo (planirano za 2026/27)
- [ ] Priročnik za matematiko na maturi (planirano za 2026/27)

## Struktura projekta

To je monorepo z dvema spletiščema:

- **`website/`** - Astro spletišče (glavna stran na viridex.si)
- **`books/`** - Docusaurus dokumentacija (dostopna na viridex.si/learn)

## Razvoj

```bash
npm install              # Namestitev odvisnosti
npm run dev             # Razvoj glavnega spletišča
npm run dev:books       # Razvoj dokumentacije
npm run build           # Izgradnja obeh spletišč
npm run format         # Oblikovanje kode
```

## Implementacija

Projekt je konfiguriran za avtomatično implementacijo na GitHub Pages.

- Push v `master` branch proži avtomatski workflow
- Obe spletišči se združita v enotno GitHub Pages spletišče
- Več informacij v [DEPLOYMENT.md](DEPLOYMENT.md)
