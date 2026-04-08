---
title: "Ukazi"
---

Računalniki delujejo na osnovi ukazov, ki jih izvajajo procesorji. Ukazi so niz bitov, ki predstavljajo določena navodila za procesor. Vsak ukaz ima svojo funkcijo, kot so aritmetične operacije, logične operacije, premikanje podatkov, nadzorni tok itd.

Ukaze zapisane v dvojiškem sistemu imenujemo **strojni jezik**, ki je neposredno razumljiv procesorju. Vendar pa je strojni jezik zelo težko razumljiv za ljudi, zato smo razvili višje programske jezike, ki so bolj berljivi in lažji za pisanje.

## Zbirni jezik

Prvi korak nad strojnim jezikom je **zbirni jezik** (*angl. assembly language*), ki uporablja mnemonike (besedne oznake) namesto dvojiških števil za predstavitev ukazov. Poleg tega zbirni jezik omogoča uporabo simboličnih imen za registre, spremenljivke in naslove, kar olajša programiranje in razumevanje kode.

:::warning
Spodnji primeri ukazov so zapisani v zbirnem jeziku ARM arhitekture in so vključeni samo za ilustracijo konceptov. Na maturitetnem izpitu se ne pričakuje poznavanje specifičnih ukazov ali sintakse zbirnega jezika, temveč razumevanje konceptov in načel delovanja.
:::

Vsako operacijo v zbirnem jeziku sestavlja ukaz in operandi, ki določajo, kateri podatki se uporabljajo in kako se obdelujejo. Na primer, ukaz `ADD R1, R2, R3` v zbirnem jeziku ARM pomeni "seštej vsebino registra R2 in R3 ter shrani rezultat v register R1".

Primer ukaza v zbirnem jeziku (*ARM arhitektura*):

![Primer ukaza v zbirniku](/assets/rac/assembly-op.png)

## Operandi

Operandi so podatki, na katerih ukaz deluje. Lahko so:

- **Registri**: Hitri pomnilniški prostori znotraj procesorja, ki se uporabljajo za shranjevanje podatkov med izvajanjem ukazov.  
  Primer: `R1`, `R2`, `R3` itd.
- **Neposredne vrednosti**: Konstantne vrednosti, ki so neposredno vključene v ukaz.  
  Primer: `#5` pomeni *konstantno vrednost 5*.
- **Naslovi**: Lokacije v pomnilniku, kjer se nahajajo podatki.  
  Primer: `[#1000]` pomeni *vrednost, ki se nahaja na naslovu 1000*.

## Naslavljanje

Pri izvajanju ukazov je pomembno, kako se operandi naslavljajo. Obstaja več načinov naslavljanja, ki določajo, kako procesor dostopa do podatkov:

- **Neposredno naslavljanje**: Operand je neposredno vključen v ukaz.  
  Primer: `ADD R1, R2, #5` pomeni "*seštej vsebino registra R2 in število 5 ter shrani rezultat v register R1*".
- **Posredno naslavljanje**: Register vsebuje naslov, na katerem se nahaja operand.  
  Primer: `ADD R1, R2, [R3]` pomeni "*seštej vsebino registra R2 in vrednost, ki se nahaja na naslovu, ki ga kaže register R3, ter shrani rezultat v register R1*".
- **Indeksno naslavljanje**: Operand se nahaja na naslovu, ki je vsota vsebine registra in podanega odmika.  
  Primer: `ADD R1, R2, [R3, #4]` pomeni "*seštej vsebino registra R2 in vrednost, ki se nahaja na naslovu, ki ga kaže register R3 plus 4, ter shrani rezultat v register R1*".
- **Registrsko naslavljanje**: Operand je v drugem registru.  
  Primer: `ADD R1, R2, R3` pomeni "*seštej vsebino registra R2 in R3 ter shrani rezultat v register R1*".
- **Neposredno indeksno naslavljanje**: Operand se nahaja na naslovu, ki je vsota podanega naslova in podanega odmika.  
  Primer: `ADD R1, R2, [#1000, #4]` pomeni "*seštej vsebino registra R2 in vrednost, ki se nahaja na naslovu 1000 plus 4, ter shrani rezultat v register R1*".
- **Relativno naslavljanje**: Operand se nahaja na naslovu, ki je vsota trenutnega naslova ukaza in podanega odmika.  
  Primer: `B #200` pomeni "*skoči na naslov, ki je trenutni naslov ukaza plus 200*".

### Naslovi pomnilnika

Računalniki uporabljajo različne načine naslavljanja pomnilnika, odvisno od arhitekture in operacijskega sistema. Glavna delitev je med fizičnim in logičnim/navideznim naslavljanjem:

- **Fizično naslavljanje**: Naslovi se nanašajo neposredno na fizične lokacije v pomnilniku. Procesor dostopa do podatkov na teh lokacijah brez posredovanja. Ta način je enostaven, vendar omejen, saj ne omogoča učinkovite uporabe pomnilnika in zaščite.
- **Navidezno naslavljanje**: Naslovi se nanašajo na navidezne lokacije, ki jih procesor preslika na fizične lokacije. Ta način omogoča večjo fleksibilnost, zaščito in učinkovitejšo uporabo pomnilnika, saj lahko različni procesi uporabljajo isti navidezni naslov, ki se preslika na različne fizične naslove.

## Osnovne vrste ukazov

- **Aritmetični ukazi**: Izvajajo matematične operacije, kot so seštevanje, odštevanje, množenje, deljenje itd.  
  Primer: `ADD`, `SUB`, `MUL`, `DIV` ...
- **Logični ukazi**: Izvajajo logične operacije, kot so AND, OR, NOT, XOR itd.  
  Primer: `AND`, `OR`, `NOT`, `XOR` ...
- **Premikanje podatkov**: Ukazi, ki premikajo podatke med registri ali med registrom in pomnilnikom.  
  Primer: `MOV`, `LDR`, `STR` ...
- **Nadzorni tok**: Ukazi, ki spreminjajo tok izvajanja programa, kot so skoki, klici funkcij, vrnitve itd.  
  Primer: `B`, `BL`, `RET` ...
