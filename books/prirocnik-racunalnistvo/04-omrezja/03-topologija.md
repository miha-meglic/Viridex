---
title: "Topologija omrežja"
---

Topologija omrežja se nanaša na način, kako so računalniki in druge naprave povezane med seboj v omrežju. V računalniških omrežjih obstaja več različnih topologij, ki se uporabljajo glede na potrebe in zahteve omrežja. Vsaka ima svoje prednosti in slabosti, ki vplivajo na zmogljivost, zanesljivost in stroške omrežja.

## Vrste topologij

![Vrste topologij](/assets/rac/topology.png)

### Vodilo (*angl. Bus*)

Prednosti in slabosti:

```diff
+ Enostavna za namestitev in razširitev
+ Cenovno ugodna
- Okvara na vodilu onemogoči večino komunikacije
- Težko diagnosticirati težave
- Pri večjem številu naprav se prenos upočasni
```

### Obroč (*angl. Ring*)

Prednosti in slabosti:

```diff
+ Zagotavlja enakovreden dostop do medija
+ Cenovno ugodna
+ Visoka zanesljivost prenosa
- Okvara na obroču onemogoči komunikacijo
- Težko diagnosticirati težave
- Razširitev zahteva prekinitev obroča
```

### Zvezda (*angl. Star*)

Prednosti in slabosti:

```diff
+ Enostavna za namestitev in razširitev
+ Preprosta diagnostika težav
+ Napaka na enem računalniku/povezavi ne vpliva na ostale
+ Dokaj cenovno ugodna
- Okvara osrednjega vozlišča onemogoči komunikacijo
```

:::note
Najbolj razširjena topologija v sodobnih računalniških omrežjih.
:::

### Mreža / Polna mreža (*angl. Mesh*)

Prednosti in slabosti:

```diff
+ Visoka zanesljivost in odpornost na napake
- Najdražja in najbolj kompleksna za namestitev in vzdrževanje
```

### Hibridna topologija (*angl. Hybrid*)

Kadar želimo združiti prednosti različnih topologij, lahko uporabimo hibridno topologijo, ki združuje elemente več različnih topologij.
