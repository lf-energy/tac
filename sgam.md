---
layout: minimal
---

<style>
#domains {
	display: grid;
	grid-template-columns: repeat(5, 200px);
	grid-template-rows: repeat(5, 50px);
	grid-column-gap: 0px;
	grid-row-gap: 2px;
	background: gray;
    width: 1000px;
    height: 1000px;
}
#domains div {
	display: inline-grid;
	background: white;
}
#domains div img { 
	margin: auto;
	max-height: 30px;
}

</style>

<div id="domains">
{% for project in site.data.projects %}
<div id="{{ project['Slug'] }}" style="grid-row-start: {{ forloop.index }}; grid-column-start:2; grid-column-end: 4;"><img src="{{ project['Logo URL'] }}"></div>
{% endfor %}	
</div>
