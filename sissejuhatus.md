---
layout: page
title: Sissejuhatus
description: Sissejuhatav postituste seeria andmeteadusse
permalink: /sissejuhatus/
---
 
Allolev postituste sari on seni ainuke eestikeelne sissejuhatus andmeteaduse maailma. Iga tükk on piisavalt lühike, et 5 minutiga läbi lugeda, aga samas annab palju viiteid, et soovi korral rohkem detailidesse minna.

------

<ul class="post-list">
{% assign posts = site.posts | sort:"rank" %}
{% for post in posts %}
  <li>
    {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}

    <h2>
      <a class="post-link" href="{{ post.url | relative_url }}">{{ forloop.index0 | plus: 1 }}. {{ post.title | escape }}</a>

      <p class="post-description">{{ post.description | escape }}</p>
    </h2>
  </li>
{% endfor %}
</ul>

------

Autorid:
* [Taivo Pungas](https://pungas.ee)