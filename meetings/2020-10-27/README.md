---
title: '2020-10-27'
---

# {{ page.dir | split: "/" | slice: 2 }}

{% for file in site.static_files %}
{% if file.path contains page.dir %}
- [{{ file.basename }}]({{ file.path | replace: ".md", ".html" }})
{%- endif -%}
{%- endfor -%}
