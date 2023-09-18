---
layout: minimal
---

<div id="sgam">
<details>
<summary>Smart Grid Plane (SGAM) domains for LF Energy projects</summary>
<div id="domains">
{% for domain in site.data.sgam.domains %}
<div style="grid-row-start: 1; grid-column-start: {{ forloop.index }}; grid-column-end: {{ forloop.index | plus: 1}}; ">
{% if domain.image %}
<img style="height: 70px" src="sgam-images/{{ domain.image }}" />
{% endif %}
<details>
	<summary>{{ domain.name }}</summary>
	{{ domain.description }}
</details>
</div>
{% endfor %}
{% for project in site.data.projects %}
{% assign grid-column-start = 5 %}
{% assign grid-column-end = 1 %}
{% for domain in site.data.sgam.domains %}
{% if project['Categories'] contains domain.name %}
{% if forloop.index < grid-column-start %}
{% assign grid-column-start = forloop.index %}
{% endif %}
{% if forloop.index > grid-column-end %}
{% assign grid-column-end = forloop.index %}
{% endif %}
{% endif %}
{% endfor %}
<div id="{{ project['Slug'] }}" style="grid-row-start: {{ forloop.index | plus: 1}}; grid-column-start:{{ grid-column-start }}; grid-column-end: {{ grid-column-end | plus: 1 }};"><img src="{{ project['Logo URL'] }}"></div>
{% endfor %}	
</div>
</details>
<details>
<summary>Smart Grid Plane (SGAM) zones for LF Energy projects</summary>
<div id="zones">
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
<div id="{{ project['Slug'] }}" style="grid-row-start: {{ forloop.index | plus: 1}}; grid-column-start:{{ grid-column-start }}; grid-column-end: {{ grid-column-end | plus: 1 }};"><img src="{{ project['Logo URL'] }}"></div>
{% endfor %}	
</div>
</details>
{% for project in site.data.projects %}
<details>
<summary>Smart Grid Plane (SGAM) mapping for {{ project['Name']}}</summary>
<div class="project-sgam" id="{{ project['Slug']}}-sgam">
<div style="grid-row-start: 1; grid-column-start: 1; grid-column-end: 2;">&nbsp;</div>
{% for domain in site.data.sgam.domains %}
<div style="grid-row-start: 1; grid-column-start: {{ forloop.index | plus: 1 }}; grid-column-end: {{ forloop.index | plus: 2}};">
{% if domain.image %}
<img style="height: 70px" src="sgam-images/{{ domain.image }}" />
{% endif %}
<details>
	<summary>{{ domain.name }}</summary>
	{{ domain.description }}
</details>
</div>
{% endfor %}
{% for zone in site.data.sgam.zones %}
<div style="grid-column-start: 1; grid-row-start: {{ forloop.index | plus: 1 }}; grid-row-end: {{ forloop.index | plus: 2}};">
{% if zone.image %}
<img style="height: 70px" src="sgam-images/{{ zone.image }}" />
{% endif %}
<details>
	<summary>{{ zone.name }}</summary>
	{{ zone.description }}
</details>
</div>
{% endfor %}
{% assign grid-column-start = 5 %}
{% assign grid-column-end = 1 %}
{% for domain in site.data.sgam.domains %}
{% if project['Categories'] contains domain.name %}
{% if forloop.index < grid-column-start %}
{% assign grid-column-start = forloop.index %}
{% endif %}
{% if forloop.index > grid-column-end %}
{% assign grid-column-end = forloop.index %}
{% endif %}
{% endif %}
{% endfor %}
{% assign grid-row-start = 5 %}
{% assign grid-row-end = 1 %}
{% for zone in site.data.sgam.zones %}
{% if project['Categories'] contains zone.name %}
{% if forloop.index < grid-row-start %}
{% assign grid-row-start = forloop.index %}
{% endif %}
{% if forloop.index > grid-row-end %}
{% assign grid-row-end = forloop.index %}
{% endif %}
{% endif %}
{% endfor %}
<div style="grid-row-start: {{ grid-row-start | plus: 1 }}; grid-row-end: {{ grid-row-end | plus: 2 }}; grid-column-start:{{ grid-column-start | plus: 1 }}; grid-column-end: {{ grid-column-end | plus: 2 }};"><img src="{{ project['Logo URL'] }}"></div>
</div>
</details>
{% endfor %}
</div>
