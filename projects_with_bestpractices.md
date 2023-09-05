---
nav_exclude: true
layout: minimal
---

<style type="text/css">
#projects_with_bestpractices {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & dt::after {
    content: "" !important;
  }
  & div {
    flex-basis: 16%;
    padding: 1em;
  }
  & dt img[src^="https://landscape.lfenergy.org/"] {
    height: 100px;
  }
  & dt {
    text-align: center;
  }
  & dd {
    margin-left: 0;
  }
  & dd p {
    text-align: center;
  }
  & dd p:first-child {
      font-family: Arial;
      font-size: 13px;
      color: #AAAAAA;
  }
  & dd p:last-child {
      font-family: Arial;
      font-size: 17px;
      color: #999999;
  }
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
