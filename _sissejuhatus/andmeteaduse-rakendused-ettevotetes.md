---
layout: post
title:  "Andmeteaduse rakendused ettevõtetes"
description: "Näited sellest, kuidas ettevõtted kasutavad andmeteadust paremate toodete tegemiseks."
categories: sissejuhatus
rank: 5
---

Ettevõtted on paari viimase aasta jooksul hakanud üha laiemalt andmeteadust kasutama, kuna see aitab muuhulgas pakkuda klientidele uusi tooteid ning optimeerida opereerimiskulusid. Oskus tohutust andmetulvast kasulikku informatsiooni leida on ülimalt väärtuslik ning andmeteadusse investeerimine aitab ettevõtetel saavutada märgatava konkurentsieelise.

Andmeteadlase töö äris eristub andmeteadlase tööst teistes valdkondades peamiselt kolmel moel:

**Esiteks**, iga äri peamine eesmärk on toota kasumit - see tähendab, et ka andmeteadlase töö keerleb selle ümber, kas tehtav toob firmale kasu või mitte. Seega peab andmeteadlasel olema suurepärane arusaam firma strateegiast, eesmärkidest ja sellest, kuidas andmete kasutamine firmale kasu tooks või kulusid kärpida aitaks.

Tihtipeale tähendab see ka, et andmeteadlasel on vähem aega ja vajadust kõike nullist arendada ning kasutatakse ära juba olemasolevaid vahendeid, näiteks visualisatsioonitarkvara (Tableau, Looker) ja masinõppe valmisteenuseid (Google Cloud Machine Learning, Amazon Machine Learning ja IBM Watson). Need tööriistad aitavad andmeteadlastel kiiremini lahendusteni jõuda.  

**Teiseks** tulevad andmeteadlasele äris kasuks teadmised ärianalüüsist (*business intelligence*) ja andmete visualiseerimisest. Hästi läbimõeldud ning efektselt disainitud joonised ja diagrammid on suurepärased väljundid, et selgitada andmeid ja analüütilisi tulemusi nii andmeteadlasele endale, tiimikaaslastele, aga ka mitte-tehnilistele kolleegidele ja juhtkonnale. Numbrid tabelis ja pikad tekstid masinõppe mudelite kohta ei ole laiemale publikule tihtipeale just köitvad.

Andmete visualiseerimiseks on turul olemas suurepäraseid eraldiseisvaid rakendusi rakendusi (Tableau, Qlikview, Spotfire, Looker, Power BI) aga ka teeke nagu D3.js (Javascript), matplotlib ja seaborn (Python) ja ggplot (R). Lisaks tehnilistele oskustele on kasulik tunda ka andmete visualiseerimise teoreetilisi põhimõtteid - kasulikuks lugemiseks on [see raamat](https://hbr.org/product/good-charts-the-hbr-guide-to-making-smarter-more-persuasive-data-visualizations/15005-PBK-ENG).

**Kolmandaks**, selleks, et masinõpet äris edukalt rakendada, peavad loodavad ennustusmudelid olema läbipaistvad. See tähendab, et andmeteadlane peab suutma mittetehnilisele inimesele (näiteks kliendile) selgitada, miks täpselt mudel selliseid ennustusi teeb. Sageli nähakse masinõppemudeleid, eriti neurovõrke, kui musti kaste ning keegi ei oska täpsemalt lahti seletada, kuidas neurovõrgud täpsemalt oma lahendusteni jõuavad.  Et masinõpet edukalt ettevõtetes rakendada, tuleb tihtipeale valida selgeima interpretatsiooniga mudel ning andmeid sobivalt visualiseerida.
 
All on mõned näited edukatest andmeteaduse rakendustest äris.

<div style="text-align: center;">
<img src="/images/sketches/cashmoney.svg" style="max-width: 400px;">
</div>


## Veebipoed ja reklaam

Sihitud reklaamide ja tootepakkumiste loomisel aitab andmeteadus leida mustreid tarbijagruppide käitumises – klikkides, ostudes ja muudes tarbijakäitumise indikaatorites.  Kõige tuntum näide on Amazoni veebipoe soovitusmootor, mis teeb varem vaadatud ja ostetud toodete põhjal soovitusi uute asjade ostmiseks. Soovitusmootorid kasutavad erinevaid mitmeklassilisi klassifitseerimise mudeleid nagu logistiline regressioon, tugivektorklassifitseerija ja otsustuspuu või otsustusmets; populaarne variant on ka maatriksi faktoriseerimine (*matrix factorisation*).

Veebis saab andmeteadust ka muudmoodi kasutada. Iga reklaamikampaania puhul on oluline aru saada, kui hästi see töötas (ja milline kampaania töötas kõige paremini); andmeteadus aitab just seda otsustada. Väga kasulik on ka aru saada, millised kliendid on kõige kasumlikumad, või millised kliendid on kohe-kohe lahkumas, et siis nendele eritähelepanu pühendada.
 
## Pangandus ja finantsteenused

### Finantsinstrumentide hindade prognoosimine

Statistikud ja kvantitatiivsed analüütikud on aastakümneid tegelenud väärtpaberite ja muude finantsinstumentide hindade prognoosimise mudelite loomisega. See on osutunud väga keeruliseks, kuna traditsioonilised statistilised mudelid ei suuda arvesse võtta kõiki või vähemalt piisavalt paljusid finantsturgusid mõjutavaid faktoreid. Masinõpe on aga loonud sel alal uusi võimalusi ning paljud investeerimispangad tegelevad praegu masinõppe rakendamisega hindade prognoosimisel. Kuna hinnaandmed on aegridade formaadis, on kõige hindade prognoosimisel tavapäraseks mudeliks regression. Näiteks tegelevad sellega suurpangad HSBC, Barclays ja JP Morgan, aga ka väiksemad tegijad nagu Jane Street.
 
### Riskianalüüs ja pettuste tuvastamine

Kuna internetis liigub palju raha, leidub ka palju inimesi, kes üritavad seal ebaseaduslikult kasu teenida. Näiteks üritatakse kasutada internetis maksmiseks varastatud krediitkaarte, mis on e-poele halb, sest kui krediitkaardi omanik soovimatu makse avastab, peab poe omanik trahvi maksma. Kui suudame automaatselt eristada petturid ausatest klientidest, saame teha kogu protsessi kliendile kiiremaks ja kaupmehele odavamaks.

Lisaks sellele on panganduses oluline rahapesu ja terrorismi tõkestamine (näiteks TransferWise’is rahvusvaheliste rahaülekannete puhul); seda protsessi saab samuti masinõppe abil automatiseerida. 

## Klienditeenindus ja juturobotid
Klienditeenindus on kulukas, eriti veebiäris, sest sageli töötab selleks armee inimesi, kes vastavad klientide korduvatele küsimustele telefoni või meili teel. Masinõppe ja loomulike keele töötluse meetodite kiire areng on aga viimastel aastatel võimaldanud üha edukamalt juturoboteid ehk chatbot'e luua. Juturoboteid saab rakendada näiteks piletite või kindlustuse müügiks, aga laiemalt ka ükskõik millisele tootele kasutajatoe pakkumiseks. Üks tuntud edulugu on [juturobot-advokaat](https://www.theguardian.com/technology/2016/jun/28/chatbot-ai-lawyer-donotpay-parking-tickets-london-new-york), mis aitas miljonite väärtuses parkimistrahve vaidlustada; rohkem näiteid leiad [sellest TechWorldi artiklist](http://www.techworld.com/picture-gallery/apps-wearables/9-best-uses-of-chatbots-in-business-in-uk-3641500/).  


## Transporditeenused

### Isejuhtivad sõidukid

Isejuhtivate autode arendus liigub kiiresti ja ilmselt jõuavad järgmise kümnendi jooksul teedele esimesed autod, mis ei vaja inimjuhti – sellega tegelevad pea kõik autotootjad, aga märkimisväärselt ka tehnoloogiaettevõtted Google ja Apple. Veidi väiksemate robotite juhtimise automatiseerimisega tegeleb näiteks Eestis paiknev [Starship](https://www.starship.xyz/) – nad loovad pakiveoroboteid, mis toovad kulleri asemel automaatselt pakid kodudesse.

### Transpordivõrgustiku optimeerimine

Uberi transpordivõrgustikus, mis koosneb miljonitest klientidest ja miljonitest autojuhtidest, on palju ruumi erinevate asjade optimeerimiseks. Just sellest räägib tihti [Uberi *engineering* blogi](https://eng.uber.com/) – hiljutine näide on nende blogipostitus [ekstreemsete sündmuste ennustamisest](https://eng.uber.com/neural-networks/). Sarnased probleemid on ka Uberi konkurentidel, sealhulgas Eestis asuval Taxifyl.

## Andmeteadus Eesti ettevõtetes

Eesti masinõppe meetupidel ([videod ja slaidid](https://www.meetup.com/Machine-Learning-Estonia/events/past/?scroll=true)) on jagatud põnevat infot Eestis tehtava andmeteaduse kohta. Uuri lähemalt:
* [Lingvist – statistiline keeleõpe](https://www.slideshare.net/AndrKarpitenko/lingvist-statistical-methods-in-language-learning)
* [alphablues – teksti- ja pilditöötlus juturobotites](https://www.slideshare.net/AndrKarpitenko/alphablues-ml-applied-to-text-and-image-in-chat-bots)
* [Starship – robotite automaatjuhtimine](https://www.slideshare.net/AndrKarpitenko/starship-building-intelligent-delivery-robots)
* [Pipedrive – müügitarkvara kasutajaanalüüs](https://www.slideshare.net/AndrKarpitenko/machine-learning-in-action-at-pipedrive)
* [TransferWise – pettusetuvastus rahvusvahelistes rahaülekannetes](https://docs.google.com/presentation/d/1BuqwFXQG0H6OIkK99PtXkEEYth3AWFIvzSZsaUg-cqE/edit#slide=id.p)



