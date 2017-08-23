---
layout: post_intro
title:  "Käed külge: kuidas alustada andmeteadusega"
description: "Ülikoolikursused ja MOOCid ning olulisemad tehnoloogiad -- näiteks Pythoni ja R-i vahel valimine."
categories: sissejuhatus
rank: 1
---

Kindlasti oled nüüdseks põnevil andmete ägedast maailmast ja tahad rohkem teada. Nagu muudel aladel, on ka andmeteaduses kaks olulisemat õppimisviisi a) kursused ja b) ise harjutamine.

Nullist alustades on kursused mõistlik valik, aga mida täpselt õppida? Matemaatilised jt alusteadmised on olulised, aga kuna andmeteaduse eesmärk on praktilist kasu tuua, on praktiliste oskuste arendamine väga oluline. Alustame seega ühest suurest otsusest, nimelt programmeerimiskeele valikust: kas Python või R?

## Python *vs* R

Python ja R on kaks andmeteaduses enimkasutatud keelt ja suurt osa ülesandeid saab lahendada mõlemas keeles, seega ei ole näiteks ainult R-i tundmine tohutult piirav.

Hea mõte on keskenduda esialgu ainult ühele keelele ja saada selles heaks. Kuna esialgu pead ära õppima hunniku andmeteaduse kontseptsioone, on oluline kulutada aega enim sellele -- mitte kahe programmeerimiskeele iseärasuste tundmaõppimisele. Lisaks: kui oled heal tasemel ühes, on oluliselt lihtsam teine ära õppida.

Kumb siis valida? Järgnev on mõistlik rusikareegel:

* Vali **Python**, kui sul **on** varasem programmeerimise taust (s.t. kui oled läbinud rohkem kui ühe programmeerimiskursuse, või iseseisvalt palju koodinud). Taivo ja mitme teise arvutiteadlase kogemus R-iga oli frustreeriv, sest Python on oluliselt sarnasem teistele programmeerimiskeeltele, näiteks Javale.
* Vali **R**, kui sa **ei ole** varem programmeerinud. R-i on lihtsam ilma varasema kooditaustata ära õppida -- mõned tehnilised raskused jäävad seda kasutades olemata. See tähendab, et jõuad vähema õppimisega põnevate tulemusteni, mis aitavad hoida motivatsiooni.

Siin on üks erand: kui oled veendunud, et tahad tegeleda peamiselt masinõppega (eriti sügavate neurovõrkudega), alusta Pythonist. Suur osa uusimatest ja põnevaimatest masinõppe meetoditest avaldatakse praegu ainult Pythonis ja kuna ala liigub nii kiiresti, ei ole samad teegid alati teistes keeltes saada.

Võid otsustada ka oma eelistuse järgi: kui tahaksid tegeleda pigem [A-tüüpi](/sissejuhatus/mis-on-andmeteadus#a-tüüpi-ja-b-tüüpi-andmeteadlased) andmeteadusega, alusta pigem R-ist; kui [B-tüüpi](/sissejuhatus/mis-on-andmeteadus#a-tüüpi-ja-b-tüüpi-andmeteadlased) andmeteadusega, siis Pythonist.

<div style="text-align: center;">
<img src="/images/sketches/pythonr.svg" style="max-width: 400px;">
</div>

## Ressursid

Projekt [Open Data Science Master's](http://datasciencemasters.org/) teeb väga põhjaliku kokkuvõtte kursustest, mis katavad andmeteadlase alusoskused (nii Pythonis kui R-is). Nimekiri on väga pikk ja võib uustulnukana olla hirmutav, mistõttu annan allpool oma soovitused alustamiseks.

Kui oled tudeng Tartu ülikoolis (või saad sealt eksternina aineid võtta), võib sind aidata ka hüpoteetiline [andmeteaduse "kõrvaleriala" Tartu ülikoolis](https://docs.google.com/document/d/1FRAV8exhZYKp6R0dgeiLKb5dXlapI-uehJ2yCUfstlk/edit) -- see on Taivo kokkupandud nimekiri  andmeteadusega seotud TÜ kursustest.

### Python

Eesti keeles ei ole Pythoni+andmeteaduse õppimiseks eriti materjale, aga inglise keeles alguse tegemiseks sobib näiteks [see Harvardi kursus](http://cs109.github.io/2015/). Masinõppega alustamiseks sobib klassikaline [Coursera Machine Learning kursus](https://www.coursera.org/learn/machine-learning) ja sügavõppe (*deep learning*) jaoks tuliuus [Coursera Deep Learning spetsialiseerumine](https://www.coursera.org/specializations/deep-learning).

Kõige olulisemad teegid on:
* [**numpy**](http://www.numpy.org/) ning [**pandas**](http://pandas.pydata.org/) andmete ettevalmistamiseks
* [**matplotlib**](https://matplotlib.org/) visualiseerimiseks
* [**scikit-learn**](http://scikit-learn.org/) klassikaliseks masinõppeks ja [**tensorflow**](https://www.tensorflow.org/) sügavõppeks.

Muide, [Anaconda](https://www.continuum.io/downloads) on mugav viis endale Python installida, sest sisaldab kõiki standardseid andmeteaduse tööriistu, sh ülalnimetatud teeke. Väga kasulik tööriist on ka [Jupyter *notebook*id](http://jupyter.org/), mis võimaldavad Pythoni koodi interaktiivselt jupphaaval jooksutada.

### R

Andmeteadust R-is saab õppida Eesti keeles -- TÜ [statistilise andmeteaduse ja visualiseerimise](https://andmeteadus.github.io/2017/) aine (3EAP) materjalid on vabalt kättesaadavad ja väga hea sissejuhatus R-i kasutamisse andmeteaduseks. Kui sa ei ole kunagi R-i kasutanud, tahad ilmselt teha lühikese kursuse R-i tutvustava kursuse -- näiteks [selle](https://www.datacamp.com/courses/free-introduction-to-r) 4-tunnise interaktiivse e-kursuse DataCampilt.

Põhjalikum ja pikem (ingliskeelne) viis andmeteadust ja R-i õppida on Coursera [Data Science spetsialiseerumine](https://www.coursera.org/specializations/jhu-data-science) Johns Hopkinsi ülikoolilt.

Kui tahad ilma kursusteta teemasse sisse hüpata, siis kõige olulisem teek visualiseerimiseks on [**ggplot2**](http://ggplot2.org/) ja kuigi andmete ettevalmistamiseks saab kasutada palju tööriistu, on [**dplyr**](http://dplyr.tidyverse.org/) mõistlik esimene valik. Ülalnimetatud eestikeelne kursus tutvustab mõlemat teeki. ggploti ja dplyr'i autor [Hadley Wickhami](http://hadley.nz/) on loonud ka [hulga muid pakette](https://barryrowlingson.github.io/hadleyverse/#1) -- need aitavad teha R-i oluliselt mugavamaks ja võimsamaks. Hadley on kirjutanud ka koodinäidetega e-raamatu [R for Data Science](http://r4ds.had.co.nz/).
