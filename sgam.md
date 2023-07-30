---
layout: minimal
---
<link rel="stylesheet" id="redux-google-fonts-salient_redux-css" href="https://fonts.googleapis.com/css?family=Open+Sans%3A700%7CRoboto+Slab%3A500&amp;display=swap&amp;ver=1683165598" type="text/css" media="all">
<style>
#domains, #zones, .project-sgam {
	display: grid;
	grid-template-columns: repeat(5, 200px);
	grid-template-rows: repeat(5, 50px);
	grid-column-gap: 2px;
	grid-row-gap: 2px;
	width: 1000px;
	& div {
		display: inline-grid;
		background: white;
		font-family: "Roboto Slab"
	}
	& div img { 
		margin: auto;
		height: 40px;
		padding: 5px;
	}
	& div[id]:nth-child(3n) {
		background: #008F6522;
	}
	& div[id]:nth-child(3n+1) {
		background: #3a56e922;
	}
	& div[id]:nth-child(3n+2) {
		background: #ff5d4722;
	}
}
.project-sgam {
	grid-template-columns: repeat(6, 166px);
	grid-template-rows: repeat(6, 50px);
	& div:last-child {
		background: #EEEEEE !important;
	}
}
</style>

{% assign domains = "Generation,Transmission,Distribution,DER,Customer Premises" | split: "," %}

<div id="domains">
{% for domain in domains %}
<div style="grid-row-start: 1; grid-column-start: {{ forloop.index }}; grid-column-end: {{ forloop.index | plus: 1}}; text-align: center;">{{ domain}}</div>
{% endfor %}
{% for project in site.data.projects %}
{% assign grid-column-start = 5 %}
{% assign grid-column-end = 1 %}
{% for domain in domains %}
{% if project['Categories'] contains domain %}
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
<hr>
<div id="zones">
{% assign zones = "Field,Station,Operation,Enterprise,Market" | split: "," %}
{% for zone in zones %}
<div style="grid-row-start: 1; grid-column-start: {{ forloop.index }}; grid-column-end: {{ forloop.index | plus: 1}}; text-align: center;">{{ zone }}</div>
{% endfor %}
{% for project in site.data.projects %}
{% assign grid-column-start = 5 %}
{% assign grid-column-end = 1 %}
{% for zone in zones %}
{% if project['Categories'] contains zone %}
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
{% for project in site.data.projects %}
<hr>
<div class="project-sgam" id="{{ project['Slug']}}-sgam">
{% for domain in domains %}
<div style="grid-row-start: 1; grid-column-start: {{ forloop.index | plus: 1 }}; grid-column-end: {{ forloop.index | plus: 2}}; text-align: center;">{{ domain}}</div>
{% endfor %}
{% for zone in zones %}
<div style="grid-column-start: 1; grid-row-start: {{ forloop.index | plus: 1 }}; grid-row-end: {{ forloop.index | plus: 2}}; vertical-align: middle; text-align: center;">{{ zone }}</div>
{% endfor %}
{% assign grid-column-start = 5 %}
{% assign grid-column-end = 1 %}
{% for domain in domains %}
{% if project['Categories'] contains domain %}
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
{% for zone in zones %}
{% if project['Categories'] contains zone %}
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
{% endfor %}

