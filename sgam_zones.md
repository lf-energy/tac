---
layout: minimal
---

<div id="sgam_zones">
<h1>Smart Grid Plane (SGAM) zones for LF Energy projects</h1>
{% for zone in site.data.sgam.zones %}
<div style="grid-row-start: 1; grid-column-start: {{ forloop.index }}; grid-column-end: {{ forloop.index | plus: 1}};">
{% if zone.image %}
<img style="height: 70px" src="sgam-images/{{ zone.image }}" />
{% endif %}
<details>
	<summary>{{ zone.name }}</summary>
	{{ zone.description }}
</details>
</div>
{% endfor %}
{% for project in site.data.projects %}
{% assign grid-column-start = 6 %}
{% assign grid-column-end = 1 %}
{% for zone in site.data.sgam.zones %}
{% if project['Categories'] contains zone.name %}
{% if forloop.index < grid-column-start %}
{% assign grid-column-start = forloop.index %}
{% endif %}
{% if forloop.index > grid-column-end %}
{% assign grid-column-end = forloop.index %}
{% endif %}
{% endif %}
{% endfor %}
<div id="{{ project['Slug'] }}" style="grid-row-start: {{ forloop.index | plus: 1}}; grid-column-start:{{ grid-column-start }}; grid-column-end: {{ grid-column-end | plus: 1 }};"><a href="{{ project['Website'] }}"><img src="{{ project['Logo URL'] }}"></a></div>
{% endfor %}	
</div>

