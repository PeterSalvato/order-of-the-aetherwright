---
layout: default
title: "Order of the Ætherwright"
description: "A structure for creative practice: eight glyphs for sorting work by domain, a codex for recording decisions, and a short morning ritual."
---

{% assign romans = "I,II,III,IV,V,VI,VII,VIII,IX,X,XI,XII" | split: "," %}
{% assign ordered_doctrine = site.doctrine | sort: "order" %}
<div class="home-header">
  <div class="kicker"><span>Doctrine in {{ ordered_doctrine.size }} parts</span><span>For circulation among members</span></div>
  <h1>The Order of the Ætherwright</h1>
</div>

<div class="home-content">

<p class="lede">The Order of the Ætherwright is a structure for creative practice.</p>

<p>It has three parts. Eight glyphs sort work by domain: design, writing, code, craft and the rest. A codex records what you've decided and why, so the reasoning outlasts the moment. A short morning ritual checks the day's work against both.</p>

<p>I built it after thirty years of working by instinct. The method was consistent, but it lived only in my head, and it drifted one reasonable decision at a time.</p>

<h2 class="bar">The doctrine</h2>
<ol class="home-parts">
  {% for doc in ordered_doctrine %}
  <li><a href="{{ doc.url | relative_url }}"><span>{{ romans[forloop.index0] }}.</span>{{ doc.nav_title | default: doc.title }}</a></li>
  {% endfor %}
</ol>

<a class="next" href="{{ '/doctrine/manifesto/' | relative_url }}"><span>Begin &middot; Part I</span><b>Manifesto &rarr;</b></a>

</div>
