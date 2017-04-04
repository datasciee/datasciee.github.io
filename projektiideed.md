---
layout: page
title: Projektiideed
description: TODO
permalink: /projektiideed
stylesheet: /assets/projects.css
custom_script: /assets/projects.js
---

TODO sissejuhatus: miks teha

Reasoning:
* if just starting, just get some experience
* if expert, broaden your experience
* you wanna get hands-on experience with a variety of tasks, variety of datasets, variety of tools

TODO link to data sources

TODO give guidelines for publishing these projects
* some sort of Rmd / knitr file => Github
* iPython notebooks (easy to publish somewhere)
* make PR so we can put them on this page
* maybe share on the Facebook group if you're especially proud


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
		<li> {{ tag }} </li>
		{% endfor %}
	</ul>
	</div>

	<div class="project-content">
	  {{ project.content }}
	</div>
</div>

{% endfor %}