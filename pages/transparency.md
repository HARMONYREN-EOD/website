---
layout: default.njk
title: HARMONY連 | Transparency
---

<style>
  table {
    border: 1px solid var(--text-color);
    border-collapse: collapse;
    border-width: 1px;
    border-style: solid;
    text-align: center;
    margin-top: 20px;
  }

  table tr {
    border-bottom: 1px solid var(--text-color);
  }

  table td {
    padding: 0.5em;
  }

  table tr:nth-child(n+2):nth-child(odd) {
    background-color: var(--text-color);
    color: var(--background-color);
  }
  
</style>

# Transparency
We share the costs we have to pay to offer our services. Donations are welcome [**here**](/get-involved/#become-a-donor)!

<table id="costs-table"></table>
<script src="/js/fill-table-csv.js"></script>
<script>
  fill_table_csv('/assets/csv/transparency.csv', 'costs-table');
</script>

## Donations

<table id="donations-table"></table>
<script>
  fill_table_csv('/assets/csv/donations.csv', 'donations-table');
</script>
