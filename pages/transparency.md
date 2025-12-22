---
layout: default.njk
title: HARMONY連 | Transparency
---

<style>

  table tr:nth-child(n+2):nth-child(odd) {
    background-color: var(--text-color);
    color: var(--background-color);
  }
  
</style>

# Transparency
We share the costs we have to pay to offer our services.

<table id="costs-table"></table>
<script src="/js/fill-table-csv.js"></script>
<script>
  fill_table_csv('/assets/csv/transparency.csv', 'costs-table');
</script>
