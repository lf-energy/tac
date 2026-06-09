---
parent: '2023'
title: '2023-03-21'
redirect_from:
   - meetings/2023-03-21
---

# {{ page.dir | split: "/" | slice: 2 }}

{% for file in site.static_files %}
{% if file.path contains page.dir %}
- [{{ file.basename }}]({{ file.path | replace: ".md", ".html" }})
{%- endif -%}
{%- endfor -%}
