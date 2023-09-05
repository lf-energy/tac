---
nav_exclude: true
layout: minimal
---

<style type="text/css">
#projects_with_bestpractices dt::after {
  content: "" !important;
}
#projects_with_bestpractices {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#projects_with_bestpractices div {
  flex-basis: 16%;
  padding: 1em;
}
#projects_with_bestpractices dt img[src^="https://landscape.lfenergy.org/"] {
  height: 100px;
}
#projects_with_bestpractices dt {
  text-align: center;
}
#projects_with_bestpractices dd {
  margin-left: 0;
}
#projects_with_bestpractices dd p {
  text-align: center;
}
#projects_with_bestpractices dd p:first-child {
    font-family: Arial;
    font-size: 13px;
    color: #AAAAAA;
}
#projects_with_bestpractices dd p:last-child {
    font-family: Arial;
    font-size: 17px;
    color: #999999;
}
</style>
<dl id="projects_with_bestpractices">
{%- for project in site.data.projects -%}
{%- if project['Level'] != 'workinggroup' -%}
  <div>
  <dt>
    <img src="{{ project['Logo URL'] }}" >
    {%- if project["Best Practices Badge ID"] and project["Best Practices Badge ID"] != 'none' and project["Best Practices Badge ID"] != 'False' -%}
    <a href="https://bestpractices.coreinfrastructure.org/projects/{{ project["Best Practices Badge ID"] }}"><img src="https://bestpractices.coreinfrastructure.org/projects/{{ project["Best Practices Badge ID"] }}/badge"></a>
    {%- endif -%}
  </dt>
  </div>
{%- endif -%}
{%- endfor -%}
</dl>
