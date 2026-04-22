---
title: "TCP/IP: plast omrežnega vmesnika"
---

Prva plast modela TCP/IP se imenuje **plast omrežnega vmesnika** (*angl. Network Interface Layer*) in združuje funkcionalnosti fizične in povezovalne plasti modela ISO/OSI. Ta plast je odgovorna za prenos podatkov med napravami na isti fizični povezavi, kot so Ethernet, Wi-Fi, Bluetooth in druge vrste omrežij.

## Mediji

Podatki se lahko prenašajo preko različnih vrst medijev, kot so:

- **Žični mediji**: vključujejo bakrene kable (npr. Ethernet), optična vlakna in koaksialne kable.
- **Brezžični mediji**: vključujejo Wi-Fi, Bluetooth, mobilne omrežja (3G, 4G, 5G) in satelitske povezave.

### Sukana parica

Sukana parica (*pog. UTP*, *angl. Unshielded Twisted Pair*) je vrsta bakrenega kabla, sestavljena iz štirih parov bakrenih žic, ki so zvite skupaj, da zmanjšamo elektromagnetne motnje. Odvisno od standarda, kategorije in tipa kabla so vodniki lahko zaščiteni s kovinsko pletenico ali folijo, ki še bolj zaduši elektromagnetne motnje.

Najbolj pogosta uporaba sukane parice je v lokalnih omrežjih (LAN), kjer se uporablja za povezovanje računalnikov, usmerjevalnikov, stikal in drugih omrežnih naprav. Sukana parica je cenovno ugodna in enostavna za namestitev, vendar ima omejeno pasovno širino in ni primerna za prenos podatkov na velike razdalje.

![Primer sukane parice](https://upload.wikimedia.org/wikipedia/commons/c/cb/UTP_cable.jpg)

### Koaksialni kabel

Koaksialni kabel je vrsta bakrenega kabla, ki se uporablja za prenos podatkov v televizijskih in internetnih omrežjih. Sestavljen je iz notranjega vodnika, izolacije, kovinskega plašča in zunanjega zaščitnega sloja. Koaksialni kabel omogoča prenos podatkov na srednje razdalje z visoko hitrostjo.

![Primer koaksialnega kabla](https://upload.wikimedia.org/wikipedia/commons/f/f4/Coaxial_cable_cutaway.svg)

Dandanes je koaksialni kabel vedno manj pogost, saj ga večinoma nadomeščamo z optičnimi vlakni.

### Optična vlakna

Optična vlakna so vrsta medija, ki uporablja svetlobo za prenos podatkov. Sestavljena so iz steklenih ali plastičnih vlaken, ki so zelo tanka in omogočajo prenos podatkov na velike razdalje z zelo visoko hitrostjo. Ker gre za optični prenos, so popolnoma odporna na elektromagnetne motnje, kar omogoča stabilno in zanesljivo povezavo.

Sestavljena so iz jedra, ki prenaša svetlobo, plašča (*angl. cladding*), ki odbija svetlobo nazaj v jedro, in enega ali več zaščitnih slojev, ki varujejo vlakno pred poškodbami.

![Primer optičnega vlakna](https://dgtlinfra.com/wp-content/uploads/2023/02/Optical-Fiber-Diagram-Schematic-View-and-Cross-Section-1536x670.jpg.webp)

## Protokoli družine IEEE 802

IEEE 802 je družina standardov, ki določa različne vrste omrežnih tehnologij, vključno z Ethernetom (IEEE 802.3), Wi-Fi (IEEE 802.11) in Bluetooth (IEEE 802.15). Ti standardi določajo, kako se podatki prenašajo preko različnih vrst medijev, kot so bakreni kabli, optična vlakna in brezžični signali. Ti protokoli vključujejo mehanizme za preverjanje napak, nadzor dostopa do medija in usmerjanje podatkov med napravami na isti fizični povezavi.

Za namene poenostavitve bomo v nadaljevanju govorili predvsem o Ethernetu, saj je najbolj razširjena tehnologija za povezovanje naprav v lokalnih omrežjih (LAN).

Enota podatkov, ki se prenaša preko Etherneta, se imenuje **okvir** (*angl. frame*). Vsebuje naslov pošiljatelja in prejemnika, podatke in kontrolne informacije za preverjanje napak.

![Struktura Ethernet okvirja](https://upload.wikimedia.org/wikipedia/commons/1/13/Ethernet_Type_II_Frame_format.svg)

### MAC naslov

MAC naslov (*angl. Media Access Control address*) je edinstven identifikator, dodeljen vsaki omrežni napravi, ki se uporablja za komunikacijo na fizični povezavi. Sestavljen je iz šestih skupin dvomestnih heksadecimalnih števil, ločenih s dvopičjem ali pomišljajem (npr. `00:1A:2B:3C:4D:5E`). Ta se naprej deli na dva dela: prvi del (prvi 3 bajti) predstavlja identifikator proizvajalca (OUI, *angl. Organizationally Unique Identifier*), medtem ko drugi del (zadnji 3 bajti) predstavlja serijsko številko naprave, ki jo določi proizvajalec.

## Dostopni protokoli

Pri prenosu podatkov preko fizične povezave je pomembno, da naprave uporabljajo ustrezne protokole za nadzor dostopa do medija, da se izognejo trkom in zagotovijo zanesljiv prenos podatkov. Dva najbolj razširjena protokola za nadzor dostopa do medija sta CSMA/CD (za Ethernet) in CSMA/CA (za Wi-Fi).

### CSMA/CD

CSMA/CD (*angl. Carrier Sense Multiple Access with Collision Detection*) je protokol, ki se uporablja v Ethernet omrežjih za nadzor dostopa do medija. Naprave spremljajo promet na mediju, da ugotovijo, ali je prost, in če je, začnejo prenašati podatke. Če dve napravi hkrati začneta s prenosom, pride do trka (kolizije), ki ga napravi zaznata in ustavita prenos ter poskusita znova po naključnem časovnem intervalu. Ta časovni interval se z vsakim ponovnim poskusom povečuje, da se zmanjša verjetnost ponovne kolizije (*angl. exponential backoff*).

### CSMA/CA

CSMA/CA (*angl. Carrier Sense Multiple Access with Collision Avoidance*) je protokol, ki se uporablja v Wi-Fi omrežjih za nadzor dostopa do medija. Naprave spremljajo promet na mediju, da ugotovijo, ali je prost, in če je, pošljejo signal (RTS, *angl. Request to Send*), da nameravajo prenašati podatke. Koordinator omrežja (AP, *angl. Access Point*) nato pošlje signal (CTS, *angl. Clear to Send*), da potrdi, da je medij prost in da lahko naprava začne s prenosom. Ta protokol pomaga preprečiti kolizije, saj naprave ne začnejo s prenosom, dokler ne prejmejo potrditve od koordinatorske naprave.

:::note
Ta protokol se uporablja v brezžičnih omrežjih, kjer je težje zaznati kolizije zaradi narave prenosa po zraku, zato se osredotoča na preprečevanje kolizij namesto njihove detekcije.
:::

## Protokol ARP

ARP (*angl. Address Resolution Protocol*) je protokol, ki se uporablja za pretvorbo IP naslovov v MAC naslove. Ko naprava želi poslati podatke na drugo napravo v istem omrežju, mora poznati njen MAC naslov. Naprava pošlje zahtevo, ki vsebuje IP naslov ciljne naprave na MAC naslov `FF:FF:FF:FF:FF:FF` (broadcast). Naprava z ustreznim IP naslovom nato odgovori s sporočilom, ki vsebuje njen MAC naslov, kar omogoča pošiljanje podatkov na pravilno napravo.

:::note
Naprave L2 (npr. stikala) uporabljajo MAC naslove za usmerjanje podatkov, za kar uporabljajo naslovne tabele MAC, ki jih gradijo na podlagi prometa, ki ga zaznajo na svojih vmesnikih.
:::
