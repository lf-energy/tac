---
title: '2023-09-26'
---

# {{ page.dir | split: "/" | slice: 2 }}

{% for file in site.static_files %}
{% if file.path contains page.dir %}
- [{{ file.basename }}]({{ file.path }})
{%- endif -%}
{%- endfor -%}
