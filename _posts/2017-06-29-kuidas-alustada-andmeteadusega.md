---
layout: post
title:  "Käed külge: kuidas alustada andmeteadusega"
description: "Ülikoolikursused ja MOOCid ning olulisemad tehnoloogiad -- näiteks Pythoni ja R-i vahel valimine."
categories: sissejuhatus
rank: 1
---

Kindlasti oled nüüdseks põnevil andmete ägedast maailmast ja tahad rohkem teada. Nagu igal pool mujal, on ka andmeteaduses kaks olulisemat õppimisviisi a) kursused ja b) ise harjutamine. Mida täpselt õppida?

Matemaatilistest jt alusteadmistest räägime hiljem, aga käte külge panemiseks on vaja valida programmeerimiskeel.

## Python *vs* R

A Python ja R on kaks andmeteaduses enimkasutatud keelt ja suurt osa ülesandeid saab lahendada mõlemas keeles, seega ei ole näiteks ainult R-i tundmine tohutult piirav.

Hea mõte on keskenduda esialgu ainult ühele keelele ja saada selles heaks. Kuna esialgu pead ära õppima hunniku andmeteaduse kontseptsioone, on oluline kulutada aega enim sellele -- mitte kahe programmeerimiskeele iseärasuste tundmaõppimisele. Lisaks: kui oled heal tasemel ühes, on oluliselt lihtsam teine ära õppida.

Kumb siis valida? Järgnev on mõistlik rusikareegel:

* Vali **Python**, kui sul **on** varasem programmeerimise taust (s.t. kui oled läbinud rohkem kui ühe programmeerimiskursuse, või iseseisvalt palju koodinud). Taivo ja mitme teise arvutiteadlase kogemus R-iga oli frustreeriv, sest Python on R-ist oluliselt sarnasem teistele programmeerimiskeeltele -- näiteks Javale.
* Vali **R**, kui sa **ei ole** varem programmeerinud. R-i on lihtsam ilma varasema kooditaustata ära õppida -- mõned tehnilised raskused jäävad seda kasutades olemata.

Siin on üks erand: kui oled veendunud, et tahad tegeleda *hardcore* masinõppega (eriti sügavate neurovõrkudega), vali Python. Suur osa uusimatest ja põnevaimatest masinõppe meetoditest avaldatakse praegu ainult Pythonis ja kuna ala liigub nii kiiresti, ei ole samad teegid alati teistes keeltes saada.

TODO rohkem linke konkreetsetele tutorialidele.

### Ressursid: Python

Kõige olulisemad teegid:
* [numpy](http://www.numpy.org/) ning [pandas](http://pandas.pydata.org/) andmete ettevalmistamiseks
* [matplotlib](https://matplotlib.org/) visualiseerimiseks
* [scikit-learn](http://scikit-learn.org/) masinõppeks.

Muide, [Anaconda](https://www.continuum.io/downloads) on mugav Pythoni *distribution*, mis sisaldab kõiki standardseid andmeteaduse tööriistu, sh ülalnimetatud teeke. Väga kasulik tööriist on ka [Jupyter *notebook*id](http://jupyter.org/), mis võimaldavad Pythoni koodi interaktiivselt jupphaaval jooksutada.

### Ressursid: R

Kui sa ei ole kunagi programmeerinud, tahad ilmselt teha lühikese kursuse R-i tutvustava kursuse -- näiteks [selle](https://www.datacamp.com/courses/free-introduction-to-r) 4-tunnise interaktiivse e-kursuse DataCampilt.

Kõige olulisem teek visualiseerimiseks on [ggplot2](http://ggplot2.org/) ja kuigi andmete ettevalmistamiseks saab kasutada palju tööriistu, on [dplyr](http://dplyr.tidyverse.org/) mõistlik esimene valik.

Uuri ka muid [Hadley Wickhami](http://hadley.nz/) loodud [pakette](https://barryrowlingson.github.io/hadleyverse/#1) -- need aitavad teha R-i oluliselt mugavamaks ja võimsamaks. Hadley on kirjutanud ka koodinäidetega e-raamatu [R for Data Science](http://r4ds.had.co.nz/).
