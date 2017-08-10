---
layout: post
title:  "Mis on andmeteadus?"
description: "Definitsioon, eesmärk ja hulk näiteid."
categories: sissejuhatus
rank: 0
---

*Andmeteadus hõlmab kõiki tegevusi, mis aitavad andmete põhjal kasulikke otsuseid teha.*

See definitsioon on üsna umbmäärane, sest praegu pole definitsioon päris selgelt välja kujunenud, aga näited aitavad arusaamisele kaasa. Andmeteadust kasutavad näiteks:

* AirBnB mõistlike üürihindade [soovitamiseks](https://medium.com/airbnb-engineering/aerosolve-machine-learning-for-humans-55efcf602665),
* arstid koepiltidest vähirakkude [tuvastamiseks](https://www.google.ch/search?q=cancer%20cell%20segmentation), TODO
* TransferWise pettuse [tuvastamiseks](https://docs.google.com/presentation/d/1BuqwFXQG0H6OIkK99PtXkEEYth3AWFIvzSZsaUg-cqE/edit#slide=id.p),
* kokandushuvilised toiduainete sarnasuse [analüüsiks](https://jaan.io/food2vec-augmented-cooking-machine-intelligence/),
* Eesti e-residentsuse tiim oma progressi [jälgimiseks](https://app.cyfe.com/dashboards/195223/5587fe4e52036102283711615553).

… ja veel paljud inimesed akadeemias, ettevõtetes ja igapäevaelus.

Andmeteaduse tegemine ei ole eraldi eesmärk – see on kollektsioon meetodeid, mis aitab juba seatud eesmärki paremini saavutada, kasutades selleks andmeid. Analoogne tegevus on programmeerimine: see on hulk meetodeid, mis aitab arvutite abil lahendada ära reaalse probleemi (näiteks luua internetipanga, et kliendid ei peaks enam kontorites kohal käima). Sellest, mis on andmed ja mis neist kasu on, võid lähemalt kuulata Taivo TEDx kõnest “[Miks andmeteadus?](https://www.youtube.com/watch?v=TEiaIfMuydQ&t=4s)”.

Andmeteaduse meetodite hulk on lai. See sisaldab väga mittetehnilisi asju nagu kirjalikke analüüse ja lihtsat kirjeldavat statistikat, veidi tehnilisemat tööd nagu andmete ettevalmistamist ja visualiseerimist, või matemaatiliselt keerulisemaid asju nagu aegridade ennustamist ja inimtegevuste (näiteks kinopiletite hinnastamise) ära automatiseerimist – ja veel palju muud.

Aga kui andmeteadus sisaldab nii paljusid erinevaid asju, siis kuidas erineb see teistest terminitest, mis hiljuti moodi läinud – tehisintellektist, masinõppest ja suurandmetest? [Siin](https://pungas.ee/neli-sonakolksu-masinope-tehisintellekt-suurandmed-andmeteadus/) on lühike seletus, mis aitab neid eristada.

## A-tüüpi ja B-tüüpi andmeteadlased

Ala heterogeensuse tõttu on ka võimatu anda üldist andmeteadlase töökirjeldust, mis kehtiks kõigile, aga kasulik on eristada [A-tüüpi ja B-tüüpi andmeteadlasi](https://www.dezyre.com/article/type-a-data-scientist-vs-type-b-data-scientist/194).

**A-tüüpi** (nagu ***a**nalysis*) andmeteadlane töötab andmetega staatiliselt: teeb ühekordseid analüüse ja statistikat, kasutab domeeniteadmisi, tegeleb raporteerimisega -- aitab organisatsioonis toimuvast andmete abil aru saada ja seda parandada. Nii maailmas kui Eestis on A-tüüpi andmeteadlased enamuses.

**B-tüüpi** (nagu ***b**uilding*) andmeteadlane ehitab automaatseid süsteeme, enamasti millegi ennustamiseks. Kui A-tüübi tööd tarbivad enamasti inimesed, siis B-tüübi loodud mudelid leiavad kasutust äppides, veebilehtedel, serverites jne -- kohtades, kus vastus peab olema kiire ja automatiseeritud. B-tüüpi andmeteadlane peab olema vilunum tarkvaraarenduses.

Näited ülesannetest:
* A: "leia, millised kliendid on ettevõttele kõige väärtuslikumad, ning kuidas nad meie toodet kasutavad"
* B: "ehita süsteem, mis ennustab tunniajase täpsusega, kui palju kliente meil järgmise 7 päeva jooksul käib"

B-tüüpi andmeteadlase tehniline taust peab olema üsna tugev, seega andmeteadusse sisenemiseks on lihtsam alustada A-tüübist -- A jaoks vajalikke tööriistu on lihtsam tehnilise hariduseta ära õppida.
