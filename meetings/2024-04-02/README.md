---
title: '2024-04-02'
---

# {{ page.dir | split: "/" | slice: 2 }}

{% for file in site.static_files %}
{% if file.path contains page.dir %}
- [{{ file.basename }}]({{ file.path | replace: ".md", ".html" }})
{%- endif -%}
{%- endfor -%}
