---
layout: page
title: Sissejuhatus
description: Sissejuhatav postituste seeria andmeteadusse
permalink: /sissejuhatus/
---
 


<ul class="post-list">
{% assign posts = site.posts | sort:"rank" %}
{% for post in posts %}
  <li>
    {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}

    <h2>
      <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>

      <p class="post-description">{{ post.description | escape }}</p>
    </h2>
  </li>
{% endfor %}
</ul>