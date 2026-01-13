function fill_table_csv(url, tableId) {
  fetch(url)
    .then(response => response.text())
    .then(csvText => {
      const rows = csvText.split('\n');
      const tableElement = document.getElementById(tableId);
      rows.forEach(row => {
        const newRow = tableElement.insertRow();
        const cells = row.split(',');
        cells.forEach(cell => {
          const newCell = newRow.insertCell();
          newCell.innerHTML = cell;
        });
      });
    })
    .catch(err => console.error(err));
}

