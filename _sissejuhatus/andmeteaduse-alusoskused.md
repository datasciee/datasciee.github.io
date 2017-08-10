---
layout: post
title:  "Andmeteaduse alusoskused"
description: "Miks kõik ütlevad, et andmeteadus on segu programmeerimisest ja statistikast."
categories: sissejuhatus
rank: 4
---

Andmeteaduse kohta öeldakse, et see on interdistsiplinaarne ala, mis kõige suuremas osas sisaldab elemente arvutiteadusest (programmeerimisest) ja matemaatikast/statistikast. Tegelikult on veel miljon oskust, mida andmeteadlasel vaja -- võid selles ise veenduda guugeldades "[*data science skills*](https://www.google.ch/search?q=data%20science%20skills)" -- aga allpool motiveerin, miks just programmeerimine ja matemaatika olulised on.

### Programmeerimine

Igaüks saab panna arvuti käituma nii, nagu tahame -- pead lihtsalt kasutama klaviatuuri ja hiirt. Koodikirjutamine annab aga olulised eelised: esiteks saab selle kõik teha automaatselt (üht koodijuppi võib jooksutada miljoneid kordi ilma, et inimene kordagi sekkuks) ja teiseks on võimalik arendada sõna otseses mõttes enneolematuid asju (Facebook on nii eriline asi, et talle ei leidu mittevirtuaalset analoogi nii nagu osta.ee on virtuaalne oksjonikeskkond). Sellest, mis tunne on programmeerida ja mida see annab, saad lugeda lähemalt [siit](https://pungas.ee/programmeerimine-tunded-ja-erialavalik/).

Andmeteadlasele loeb eriti automatiseerimine: Excelit kasutada on lihtne, aga tihti peab seal käsitsi mõttetut tööd tegema -- näiteks juhul, kui sisendandmed muutuvad. Teine oluline eelis on reprodutseeritavus: kui jagan sulle R-i koodi, mida kasutasin mõne analüüsi läbiviimiseks, saad ise proovida, kas saad samad tulemused. See tähendab, et sul on lihtsam vigu üles leida ja minu koodi kasutades midagi veel põnevamat ehitada.

### Matemaatika

Keskkoolitasemel matemaatika ja statistika tundmine on andmeteadlasele miinimumnõue. Sealt edasi on aga matemaatika ainult boonus: paljud masinõppe meetodid (eriti sellised, mis aitavad tulevikku ennustada) kasutavad keerulisemat matemaatikat. Kuigi paljusid masinõppe mudeleid saab kasutada ka ilma nende taga peituvatest valemitest aru saamata, on mudelite taga peituvate matemaatiliste põhimõtete tundmine suureks abiks, kui midagi valesti läheb ja tahad aru saada, *mis* valesti läks.

Tüüpiline arvutiteaduse või füüsika või keemia (ja kindlasti matemaatika või statistika) bakalaureus katab ära kogu matemaatika, mida on vaja masinõppe mõistmiseks. Need alad on, ligikaudu:

* tõenäosusteooria (eriti Bayes'i seadus, *bias/variance trade-off*)
* statistika (eriti levinumad jaotused ja jaotuste parameetrite hindamine)
* algebra (eriti baasid, vektorruumid ja transformatsioonid)
* mat. analüüs ehk *calculus* (eriti mitme muutuja analüüs)

Tõenäosusteooria aitab formaliseerida tõenäosusliku mõtlemise (Taivo on sellest kirjutanud ka [blogipostituse](https://pungas.ee/toenaosustes-motlemine/)) -- vastandina ettekujutusele, et sündmused kas juhtuvad või ei juhtu ja vahepealsed variandid ei ole võimalikud.

Statistika on masinõppe eelkäija: see aitab veidi väiksemal skaalal ja formaalsemalt uurida, mida saame öelda andmeid genereerivate protsesside kohta.

Algebra aitab mõista, mis üldse on andmed, kus nad elavad (vastus: vektorruumides) ja kuidas neid töödelda saab.

Matemaatiline analüüs annab tööriistad, et automaatselt õppida, s.t. leida oma masinõppe süsteemile sellised parameetrid, mis annavad kõige parema tulemuse.
