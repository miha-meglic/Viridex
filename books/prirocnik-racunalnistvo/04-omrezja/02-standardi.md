---
title: "Standardi za povezovanje"
---

Standardi za povezovanje so ključni za zagotavljanje združljivosti in interoperabilnosti med različnimi napravami in omrežji. Ti standardi določajo, kako se naprave povezujejo, komunicirajo in delijo podatke. Obstaja več različnih standardov, ki se uporabljajo v različnih vrstah omrežij, kot so Ethernet, Wi-Fi, Bluetooth in USB.

:::info
**Standard** je dogovor o tem, kako naj bi se nekaj izvajalo ali delovalo. V kontekstu računalniških omrežij standardi določajo pravila in specifikacije za povezovanje in komunikacijo med napravami.

**Protokol** je niz pravil, ki določajo, kako naj bi se podatki prenašali in obdelovali v omrežju. Protokoli so del standardov in zagotavljajo, da naprave lahko komunicirajo med seboj na enoten način.
:::

## Model ISO/OSI

Eden najbolj znanih modelov za razumevanje standardov in protokolov v računalniških omrežjih je model **ISO/OSI** (*angl. Open Systems Interconnection*), ki deli komunikacijo v omrežju na sedem plasti:

1. **Fizična plast** (bit): Določa fizične lastnosti povezave, kot so vrsta kabla, priključki in električni signali.
2. **Povezovalna plast** (okvir): Določa, kako se podatki prenašajo med napravami na isti fizični povezavi -- preverjanje napak in dostop do medija.
3. **Omrežna plast** (paket): Določa, kako se podatki usmerjajo in prenašajo med različnimi omrežji -- naslavljanje in usmerjanje.
4. **Transportna plast** (segment): Določa, kako se podatki prenašajo med končnimi napravami -- nadzor pretoka in zanesljivost prenosa.
5. **Sejna plast**: Določa, kako se vzpostavljajo, vzdržujejo in zaključujejo seje med aplikacijami.
6. **Predstavitvena plast**: Določa, kako se podatki predstavljajo in kodirajo, vključno s pretvorbo formatov in šifriranjem.
7. **Aplikacijska plast**: Določa, kako aplikacije komunicirajo z omrežjem.

Vendar pa je ISO/OSI model bolj teoretičen in se v praksi pogosto uporablja bolj poenostavljen model, imenovan **TCP/IP**, ki združuje nekatere plasti modela ISO/OSI in se osredotoča na protokole, ki se dejansko uporabljajo.

## Model TCP/IP

Model TCP/IP deli komunikacijo v omrežju na štiri plasti:

1. **Plast podatkovne povezave** (bit / okvir): Združuje funkcionalnosti fizične in povezovalne plasti modela ISO/OSI.
2. **Internetna plast** (paket): Opravlja funkcionalnosti omrežne plasti modela ISO/OSI.
3. **Transportna plast** (segment): Opravlja funkcionalnosti transportne plasti modela ISO/OSI.
4. **Aplikacijska plast**: Združuje funkcionalnosti sejne, predstavitvene in aplikacijske plasti modela ISO/OSI.

![Modela ISO/OSI in TCP/IP](/assets/rac/osi_tcpip.svg)

:::tip
V spošni rabi, posebej pri označevanju mrežne opreme, se za označevanje pogosto uporablja model ISO/OSI, saj je bolj podroben in omogoča natančnejše določanje funkcionalnosti naprav. Na primer, stikalo se pogosto označuje kot naprava 2. plasti oz. **L2**, medtem ko usmerjevalnik se označuje kot naprava 3. plasti oz. **L3**.
:::
