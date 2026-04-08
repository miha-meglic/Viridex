---
title: "Zgradba računalnika"
---

Računalnik je sestavljen iz več ključnih komponent, ki skupaj omogočajo njegovo delovanje. Skoraj vse vrste modernih (splošno-namenskih) računalnikov pa izhajajo iz arhitekture, ki jo je zasnoval John von Neumann, zato se ta arhitektura pogosto imenuje von Neumannova arhitektura.

## Von Neumannova arhitektura

![Von Neumannova arhitektura](https://upload.wikimedia.org/wikipedia/commons/e/e5/Von_Neumann_Architecture.svg)

Von Neumannova arhitektura temelji na konceptu shranjevanja programov, kjer se programi in podatki shranjujejo v isti pomnilnik. Glavne komponente te arhitekture so:

- **Centralna procesna enota (CPE / *angl. CPU*)**: Izvaja ukaze in upravlja delovanje računalnika. Sestavljena je iz aritmetično-logične enote (ALE / *angl. ALU*), ki izvaja matematične in logične operacije, ter krmilne enote, ki usmerja tok podatkov med komponentami.
- **Pomnilnik**: Shranjuje podatke in programe. V modernih računalnikih je ta deljen na [več ravni](#pomnilniska-hierarhija).
- **Vhodno-izhodne naprave (I/O)**: Omogočajo komunikacijo računalnika z zunanjim svetom. Primeri so tipkovnica, miška, zaslon, tiskalnik itd.

:::note
Von Neumannova arhitektura ima tudi svoje omejitve, saj se zaradi deljenja pomnilnika za programe in podatke lahko pojavi ozko grlo. To pomeni, da lahko procesor čaka na dostop do pomnilnika, kar upočasni delovanje računalnika.

Zaradi tega so se razvile alternative, kot je [Harvardska arhitektura](https://en.wikipedia.org/wiki/Harvard_architecture), ki ločuje pomnilnik za programe in podatke.
:::

### Centralna procesna enota

CPE je srce računalnika, ki izvaja ukaze in upravlja delovanje sistema. Sestavljena je iz:

- **Krmilne enote**: Usmerja tok podatkov med komponentami in nadzoruje izvajanje ukazov. Krmilna enota razpoznava, analizira in skrbi za izvajanje ukazov, organizira prenose podatkov in usklajuje delovanje vseh enot/naprav.
- **Aritmetično-logične enote**: Izvaja matematične in logične operacije, kot so seštevanje, odštevanje, množenje, deljenje, logične operacije (AND, OR, NOT) itd.
- **Registri**: Majhni, hitri pomnilniški prostori znotraj CPE, ki se uporabljajo za shranjevanje podatkov in naslovov med izvajanjem ukazov.

V teoriji CPE pri izvajanju ukaza izvaja naslednje korake:

- **Fetch (pridobi ukaz iz pomnilnika)**: Procesor prebere ukaz, ki se nahaja na naslovu, ki ga kaže programski števec.
- **Decode (analizira / dekodira ukaz)**: Procesor analizira prebrani ukaz, da ugotovi, katera operacija se zahteva in kateri podatki so potrebni.
- **Execute (izvede ukaz)**: Procesor izvede zahtevano operacijo, ki lahko vključuje aritmetične ali logične operacije, premikanje podatkov ali nadzorni tok.
- **Store / Writeback (shrani rezultate)**: Procesor shrani rezultate operacije nazaj v pomnilnik ali v registre, odvisno od vrste ukaza.

### Pomnilnilnik {#pomnilnik}

Pomnilnik hrani programe in podatke, ki jih CPE uporablja med izvajanjem ukazov. Pomnilnik je organiziran v naslove, kjer vsak naslov vsebuje določeno količino podatkov (npr. 8, 16, 32 ali 64 bitov).

Poznamo več vrst pomnilnikov, ki se na najbolj osnovni ravni delijo na brali in bralno-pisalni pomnilnik, trajni in začasni pomnilnik ter sekvenčni in naključno dostopni pomnilnik.
Bolj pomembne kratice, ki se pojavljajo v kontekstu pomnilnika, si lahko ogledate v [slovarčku](#pomnilniski-slovarcek).

#### Pomnilniška hierarhija

Poleg osnovne delitve pa pomnilnik delimo tudi glede na hitrost, kapaciteto in ceno. Na vrhu hierarhije so hitri, a dragi pomnilniki z majhno kapaciteto, medtem ko so na dnu hierarhije počasni, a poceni pomnilniki z veliko kapaciteto. Ta hierarhija omogoča učinkovito upravljanje s podatki in optimizacijo delovanja računalnika.

![Pomnilniška hierarhija](/assets/rac/memory-hierarchy.png)

#### Slovarček {#pomnilniski-slovarcek}

- **ROM (Read-Only Memory)**: Trajni, bralni pomnilnik
- **RAM (Random Access Memory)**: Začasni, bralno-pisalni pomnilnik
- **NVRAM (Non-Volatile RAM)**: Trajni, bralno-pisalni pomnilnik
- **PROM (Programmable ROM)**: Trajni, bralni pomnilnik, ki ga je mogoče programirati enkrat
- **EPROM (Erasable Programmable ROM)**: Trajni, bralni pomnilnik, ki ga je mogoče programirati in izbrisati z izpostavitvijo UV svetlobi
- **EEPROM (Electrically Erasable Programmable ROM)**: Trajni, bralni pomnilnik, ki ga je mogoče programirati in izbrisati elektonsko

<details>
<summary>**Vrste pomnilnikov**</summary>

- **SRAM (Static RAM)**: Hitrejši, a dražji pomnilnik -- *uporablja se za predpomnilnik (cache)*
- **DRAM (Dynamic RAM)**: Cenejši, a počasnejši pomnilnik -- *uporablja se za glavni pomnilnik*
- **Flash pomnilnik**: Trajni, bralno-pisalni pomnilnik, imenovan tudi NAND ali NOR flash (odvisno od tehnologije) -- *uporablja se v USB ključkih, SSD-jih ...*
- **Magnetni disk**: Trajni, bralno-pisalni pomnilnik -- *uporablja se v trdih diskih*
- **Magnetni trak**: Trajni, bralno-pisalni, sekvenčni pomnilnik -- *uporablja se za arhiviranje podatkov*
- **Optični disk**: Trajni, bralni ali bralno-pisalni pomnilnik -- *uporablja se v CD-jih, DVD-jih ...*

</details>

## Metrike računalnika

Ker je računalnik kompleksen sistem, ga vrednotimo z različnimi metričnimi kazalniki, ki nam pomagajo razumeti zmogljivost in učinkovitost posameznih komponent.

**CPE:**

- bitna širina oz. število bitov, ki jih obdela hkrati (običajno 8/16/32/64 bitov)
- takt oz. frekvenca izvrševanja ukazov
- takt podatkovnih vodil

**Pomnilnik:**

- kapaciteta
- hitrost dostopa
- latenca dostopa
- cena na enoto kapacitete
