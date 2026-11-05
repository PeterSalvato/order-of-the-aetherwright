---
layout: default
title: "Order of the Ætherwright"
description: "A practice for people who make things: eight glyphs name the domains of creative work, and the Codex records how each work was made."
---

{% assign romans = "I,II,III,IV,V,VI,VII,VIII,IX,X,XI,XII" | split: "," %}
{% assign ordered_doctrine = site.doctrine | sort: "order" %}
<div class="cover">
  <h1 class="visually-hidden">The Order of the Ætherwright</h1>
  <img class="cover-sigil" src="{{ '/assets/sigils/sigil.full.cropped.png' | relative_url }}" alt="The Order of the Ætherwright, MMXXV">
  <div class="cover-text">
    <p class="lede">The Order of the Ætherwright is a practice for people who make things.</p>
    <p>It keeps a record of how work is made. Eight glyphs name the domains of creative work. A line of glyphs, the Codex, records which domains a work drew on and in what order. The sigil seals what belongs to the Order.</p>
    <p>This tract sets out the doctrine in five parts. It may be copied and passed on.</p>
  </div>
  <a class="turn" href="#contents">Contents &darr;</a>
</div>

<section class="contents" id="contents">
  <h2 class="bar">Contents</h2>
  <ol class="home-parts">
    {% for doc in ordered_doctrine %}
    <li><a href="{{ doc.url | relative_url }}"><span>{{ romans[forloop.index0] }}.</span>{{ doc.nav_title | default: doc.title }}</a></li>
    {% endfor %}
  </ol>
  <a class="next" href="{{ '/doctrine/manifesto/' | relative_url }}"><span>Begin &middot; Part I</span><b>Manifesto &rarr;</b></a>
</section>
