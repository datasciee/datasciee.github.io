---
layout: page
title: Projektiideed
description: Ideed väikesteks projektideks andmeteaduses
permalink: /projektiideed
stylesheet: /assets/projects.css
custom_script: /assets/projects.js
---

Praktilise ja selge eesmärgiga projekti tegemine on lihtne viis õppida.
Algajatele annab väikeste projektide tegemine võimaluse harjutada otsast lõpuni ohjade enda kätte võtmist -- andmete kogumisest ja puhastamisest visualiseerimise ja analüüsini.
Ekspertidele on miniprojektid hea võimalus riskivabalt uusi tehnoloogiaid katsetada.

Põnevaid andmeallikaid Eesti kohta leiab [siitsamast lehelt](/index.html#andmestikud), ülejäänud maailma kohta [awesome-public-datasets](https://github.com/caesar0301/awesome-public-datasets) Githubi repost.

Tulemusi on põnev näha ka teistel -- andmeteadusehuvilistel, tulevastel tööandjatel või hoopis ajakirjanduse kaudu laiemal publikul. Näiteks võib avaldamiseks kasutada:

* blogipostitusi ükskõik millises keskkonnas
* Jupyter *notebook*e (näiteks [Jupyter nbviewer](https://nbviewer.jupyter.org/)i kaudu)
* Markdown-faile Githubis
* *R markdown*i [abil](https://github.com/rstudio/blogdown) Githubis

Võimalusi on loomulikult veel.

Kui avaldad midagi allpool pakutud projektide kohta -- kasvõi lood esialgse andmestiku mingile küsimusele vastamiseks --, siis loo [*issue*](https://github.com/datasciee/datasciee.github.io/issues), et lisada link sinu tulemusele. Kui oled eriti rahul, jaga seda ka meie [Facebooki grupis](https://facebook.com/groups/datasci.ee)! 

<div id="project-label-filters">
    <p>Filtreeri:</p>
    <ul class="project-tags"></ul>
</div>

{% assign items = site.projects | sort: 'difficulty' %}
{% for project in items %}
<div class="project">
	<div class="project-meta">
	<h1 class="project-title">{{ project.title }}</h1>
	<!-- Project difficulty -->
	<h1 class="project-difficulty">
		{% for i in (1..3) %}
			{% if i <= project.difficulty %}
				<span>★</span>
			{% else %}
				<span>☆</span>
			{% endif %}
		{% endfor %}
	</h1>
	<!-- Project tags -->
	<ul class="project-tags">
		{% for tag in project.tags %}
		<li class="project-tag tag"> {{ tag }} </li>
		{% endfor %}
	</ul>
	</div>

	<div class="project-content">
	  {{ project.content }}
	</div>
</div>

{% endfor %}