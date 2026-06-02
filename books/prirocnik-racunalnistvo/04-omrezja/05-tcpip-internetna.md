---
title: "TCP/IP: internetna plast"
---

Internetna plast modela TCP/IP je odgovorna za usmerjanje in prenos podatkov med različnimi omrežji. Glavni protokol, ki deluje na tej plasti, je **IP** (*angl. Internet Protocol*), ki določa, kako se podatki razdelijo na pakete, naslovijo in usmerjajo do cilja.

## Internetni protokol (IP)

Internetni protokol je temeljni protokol, ki omogoča komunikacijo med omrežji. Torej ko zapustimo naše lokalno omrežje in se povežemo z internetom, se naši podatki prenašajo preko protokola IP.

Informacije se enkapsulirajo v pakete, ki so sestavljeni iz glave in podatkov. Glava paketa vsebuje informacije o IP naslovu izvora in cilja, dolžini paketa, protokolu, ki se uporablja v zgornji plasti (npr. TCP ali UDP), in druge kontrolne informacije, kot so čas življenja (TTL -- *angl. Time To Live*) in kontrolna vsota (*angl. checksum*).  
Tu se ne bomo poglabljali v podrobnosti o strukturi IP paketov, saj so odvisne od različice IP in dodatne funkcionalnosti, kot so možnosti in razširitve. Vendar pa je pomembno razumeti, da glava paketa vsebuje ključne informacije, ki omogočajo pravilno usmerjanje in dostavo podatkov prek interneta.

### Naslov IP

Internetni protokol uporablja naslove IP za identifikacijo naprav in usmerjanje podatkov. Obstajata dve glavni različici IP: IPv4 in IPv6.

<details>
<summary>**Zgodovina IP naslovov**</summary>

IPv4 je bil prvi standard za naslove IP, ki je bil uveden v 80-ih letih. Uporablja 32-bitne naslove, kar omogoča približno 4,3 milijarde edinstvenih naslovov. Zaradi hitre rasti interneta in povečanega števila naprav, ki se povezujejo, se je začelo pojavljati pomanjkanje IPv4 naslovov.

Sprva smo težavo rešili z uporabo NAT (Network Address Translation), ki omogoča da si več naprav v omrežju deli en javni naslov. Vendar pa je to le začasna rešitev, saj se število naprav še naprej povečuje.

Zaradi tega je bila razvita nova različica IP, imenovana IPv6, ki uporablja 128-bitne naslove. To omogoča ogromno število edinstvenih naslovov (približno 3,4 x 10^38), kar zadostuje za potrebe interneta še vrsto let v prihodnosti.
</details>

#### IPv4

IPv4 naslovi so sestavljeni iz štirih oktetov (32 bitov), ki so običajno zapisani v decimalni obliki, ločeni s pikami (npr. 192.168.1.1). Vsak oktet lahko vsebuje vrednosti od 0 do 255, kar omogoča skupno 4,3 milijarde edinstvenih naslovov.

Zgodovinsko smo IPv4 naslove delili na različne razrede (A, B, C, *D in E*) glede na velikost omrežja:

| Razred | Razpon naslovov | Št. omrežij | Št. naslovov na omrežje | Maska omrežja |
|:------:|-----------------|-------------|-------------------------|---------------|
| A     | 0.0.0.0 - 127.255.255.255 | 128 | 16,777,214 | 255.0.0.0 (/8) |
| B     | 128.0.0.0 - 191.255.255.255 | 16,384 | 65,534 | 255.255.0.0 (/16) |
| C     | 192.0.0.0 - 223.255.255.255 | 2,097,152 | 254 | 255.255.255.0 (/24) |

Razreda D in E sta rezervirana za posebne namene (multicast in eksperimentalni naslovi) in se ne uporabljata za običajno dodeljevanje naslovov.

Znotraj teh naslovnih razredov so nekateri naslovi rezervirani za posebne namene, kot so zasebni naslovi in naslovi za lokalno zanko (*angl. loopback*).
Zasebni naslovi so namenjeni uporabi znotraj lokalnih omrežij in niso usmerjeni na internetu, medtem ko so naslovi za lokalno zanko uporabljeni za testiranje in komunikacijo znotraj iste naprave.

| Vrsta naslova | Razpon naslovov |
|---------------|-----------------|
| Zasebni naslovi (A) | 10.0.0.0 - 10.255.255.255 |
| Zasebni naslovi (B) | 172.16.0.0 - 172.31.255.255 |
| Zasebni naslovi (C) | 192.168.0.0 - 192.168.255.255 |
| Naslovi za lokalno zanko | 127.0.0.0 - 127.255.255.255 |

#### IPv6

IPv6 naslovi so sestavljeni iz osmih skupin po dva okteta (128 bitov), ki so običajno zapisani v šestnajstiški obliki, ločeni s dvopičji (npr. 2001:0db8:85a3:0000:0000:8a2e:0370:7334). Zaradi velikega števila možnih naslovov v IPv6, se pogosto uporabljajo krajšave, kot je izpuščanje vodilnih ničel in zaporedij ničel.

Tu je pomembno, da poznamo pravila krajšanja IPv6 naslovov:

- Vodilne ničle v vsaki skupini lahko izpustimo (npr. 2001:0db8:85a3:0000:0000:8a2e:0370:7334 se lahko skrajša na 2001:db8:85a3::8a2e:370:7334).
- Zaporedja ničel lahko nadomestimo z dvema dvopičjema (::), vendar to lahko storimo **le enkrat v naslovu**, da se izognemo nejasnostim (npr. 2001:0db8:85a3:0000:0000:8a2e:0370:7334 se lahko skrajša na 2001:db8:85a3::8a2e:370:7334, vendar ne 2001::85a3::8a2e:370:7334).

Podobno kot pri IPv4, so tudi v IPv6 naslovi razdeljeni na različne vrste, kot so globalni unikatni naslovi, lokalni unikatni naslovi in naslovi za lokalno zanko.

| Vrsta naslova | Razpon naslovov |
|---------------|-----------------|
| Naslovi za lokalno zanko | ::1/128 |
| Globalni unikatni naslovi | 2000::/3 |
| Lokalni unikatni naslovi | fc00::/7 |
| Lokalni povezovalni naslovi | fe80::/10 |
| ... | ... |

## Omrežja

Moderni internet je sestavljen iz številnih omrežij, ki so povezana med seboj. Ki pa si, kot omenjeno, delijo skupen protokol IP in skupen naslovni prostor, kar omogoča nemoteno komunikacijo.

Ker pa niso vsa omrežja v lasti enega samega subjekta, nam IP in sorodni protokoli omogočajo fragmentacijo naslovnega prostora in usmerjanje podatkov med različnimi omrežji. Tej fragmentaciji pravimo **podnaslavljanje**.

### Podnaslavljanje

Podaslavljanje je način deljenja večjega omrežja na manjše, kar omogoča boljšo organizacijo, varnost in upravljanje z viri. Podnaslavljanje se doseže z uporabo maske omrežja, ki določa, kateri del naslova IP predstavlja omrežje in kateri del predstavlja naprave znotraj tega omrežja.

**Masko omrežja** lahko predstavimo na dva načina:

- **Bitna maska**: Niz bitov, kjer so enice na mestih, ki predstavljajo omrežni del naslova, in ničle na mestih, ki predstavljajo del naprave in jo običajno zapisujemo v decimalni obliki, ločeni s pikami (npr. 255.255.255.0).
- **CIDR notacija**: Kratka oblika, ki sledi naslovu IP in uporablja poševnico, za katero sledi število bitov, ki predstavljajo omrežni del naslova (npr. 192.168.1.1/24).

Poglejmo si preprost primer:

$$
\begin{array}{l c c c c c c c}
\text{Naslov IP} & 192 & . & 168 & . & 1 & . & 38 \\
\text{Naslov IP (binarno)} & 11000000 & . & 10101000 & . & 00000001 & . & 00100110 \\
\text{Maska omrežja} & 255 & . & 255 & . & 255 & . & 0 \\
\text{Maska (binarno)} & 11111111 & . & 11111111 & . & 11111111 & . & 00000000
\end{array}
$$

V tem primeru imamo naslov IP `192.168.1.38` in masko omrežja `255.255.255.0`, kar lahko poenostavimo na naslov s CIDR notacijo `192.168.1.38/24` (ker maska omrežja vsebuje 24 enic). To pomeni, da prvih 24 bitov naslova IP predstavlja naslov omrežja, medtem ko zadnjih 8 bitov predstavlja naprave znotraj tega omrežja.

Torej je v našem primeru naslov omrežja `192.168.1.0`. Naprave znotraj tega omrežja imajo naslove od `192.168.1.1` do `192.168.1.254`. Zadnji naslov `192.168.1.255` pa je spet rezerviran za oddajanje (broadcast) znotraj tega omrežja.

Če vse skupaj izpostavimo numerično, ima vsak IP naslov:

- $n$ bitov namenjenih naslovu omrežja
- $m = 32 - n$ bitov namenjenih napravam znotraj omrežja
- od katerih je $2^m - 2$ uporabnih naslovov za naprave (odštejemo naslov omrežja in naslov za oddajanje)

### Triki za podnaslavljanje

Podnaslavljanje je lahko zapleteno, poglejmo si bolj kompleksen primer:

> Želimo razdeliti omrežje podjetja.Na voljo imamo omrežje `10.5.5.0/24`, ki ga želimo razdeliti na 4 (čim)manjša omrežja:
>
>- Omrežje za IT s 20 napravami
>- Omrežje za marketing s 50 napravami
>- Omrežje za prodajo s 30 napravami

Da si olajšamo nalogo, se delitve lotimo od največjega omrežja proti najmanjšemu in sledimo preprostemu postopku:

1. Za vsako omrežje določimo, koliko naslovov potrebujemo (upoštevamo, da potrebujemo vsaj 2 naslova več od števila naprav, zaradi naslova omrežja in naslova za oddajanje).
2. Izračunamo, koliko bitov potrebujemo za naprave znotraj omrežja (npr. za 50 naprav potrebujemo vsaj 6 bitov, ker $2^6 - 2 = 62$) -- tu nam delo močno olajša znanje potenc števila 2.
3. Določimo masko omrežja za vsako omrežje glede na število bitov, ki jih potrebujemo za naprave (npr. če potrebujemo 6 bitov za naprave, potem imamo 32 - 6 = 26 bitov za omrežje, kar pomeni masko omrežja /26).
4. Dodelimo naslove IP za vsako omrežje, pri čemer pazimo, da se naslovi ne prekrivajo.

Za naš primer bi to izgledalo takole:

- *Marketing*: 50 naprav -> $2^6 - 2 = 62$ uporabnih naslovov -> potrebujemo 6 bitov za naprave -> maska omrežja /26 -> dodelimo `10.5.5.0/26`.  
  To omrežje pokriva naslove od `10.5.5.0` do `10.5.5.63`.
- *Prodaja*: 30 naprav -> $2^5 - 2 = 30$ uporabnih naslovov -> potrebujemo 5 bitov za naprave -> maska omrežja /27 -> dodelimo `10.5.5.64/27` (naslednji razpoložljiv naslov).  
  To omrežje pokriva naslove od `10.5.5.64` do `10.5.5.95`.
- *IT*: 20 naprav -> $2^5 - 2 = 30$ uporabnih naslovov -> potrebujemo 5 bitov za naprave -> maska omrežja /27 -> dodelimo `10.5.5.96/27`.  
  To omrežje pokriva naslove od `10.5.5.96` do `10.5.5.127`.

## Načini pošiljanja

Do tu smo že večkat omenjali naslove za oddajanje (broadcast). Poleg tega pa poznamo še druge načine pošiljanja podatkov:

- **Unicast**: Pošiljanje podatkov iz enega izvora do enega ponora. To je najpogostejši način pošiljanja podatkov, kjer vsak paket vsebuje naslov IP ponara, ki je edinstven za eno napravo.
- **Multicast**: Pošiljanje podatkov iz enega izvora do več ponarov, ki so del iste multicast skupine.
- **Broadcast**: Pošiljanje podatkov iz enega izvora do vseh ponarov v istem omrežju. To se doseže z uporabo posebnega naslova za oddajanje.

## Usmerjevalnik

Usmerjevalnik (*angl. router*) je omrežna naprava, ki povezuje različna omrežja in usmerja podatke med njimi. Usmerjevalniki delujejo na internetni plasti modela TCP/IP (L3) in uporabljajo informacije v glavi IP paketa, da določijo najboljšo pot za prenos podatkov do cilja.

Usmerjevalniki vzdržujejo usmerjevalne tabele, ki vsebujejo informacije o omrežjih, do katerih so povezani, in poti do drugih omrežij. Ko usmerjevalnik prejme paket, pregleda IP naslov cilja in uporabi usmerjevalno tabelo, da določi, kam poslati paket naprej.

Naše naprave preprosto lahko identificirajo, ali je ponor v istem omrežju ali ne, preprosto pogledajo IP naslov ponora in masko omrežja. Če je ponor v istem omrežju, pošljejo paket neposredno, sicer pa ga pošljejo na privzeti prehod, ki je običajno naslov usmerjevalnika, ki povezuje naše omrežje z drugimi. *Privzeti prehod* na napravi lahko nastavimo ročno ali pa ga pridobimo samodejno preko protokola DHCP, o katerem bomo govorili v naslednjem razdelku.

:::note
Usmerjevalniki s katerimi se srečujemo doma, običajno združujejo funkcionalnosti usmerjevalnika, stikala in dostopne točke ter omogočajo funkcionalnosti, kot sta NAT in DHCP.
:::

## Protokol DHCP

Protokol DHCP (*angl. Dynamic Host Configuration Protocol*) je protokol, ki omogoča napravam, da samodejno pridobijo IP naslov in druge omrežne nastavitve, kot so maska omrežja, privzeti prehod in naslove DNS strežnikov. To poenostavi upravljanje omrežja, saj odstrani potrebo po ročnem nastavljanju omrežnih nastavitev na vsaki napravi.

Postopek povezave v omrežje z uporabo DHCP poteka v več korakih:

1. **DHCP Discover**: Naprava, ki se želi povezati, pošlje sporočilo DHCP Discover na broadcast naslov (MAC naslov: `FF:FF:FF:FF:FF:FF`), da poišče DHCP strežnik.
2. **DHCP Offer**: DHCP strežnik odgovori s sporočilom DHCP Offer, ki vsebuje predlagani IP naslov in druge omrežne nastavitve.
3. **DHCP Request**: Naprava izbere eno od ponudb, ki jih je prejela, in pošlje sporočilo DHCP Request nazaj na strežnik, da potrdi izbiro.
4. **DHCP Acknowledge**: DHCP strežnik potrdi zahtevo s sporočilom DHCP Acknowledge, ki vsebuje končne nastavitve, in naprava lahko začne uporabljati dodeljeni IP naslov.

DHCP strežnik je tako odgovoren za upravljanje in dodeljevanje IP naslovov v omrežju, kar omogoča učinkovito uporabo naslovnega prostora in poenostavlja povezovanje naprav v omrežje.
