---
layout: default.njk
title: 所Pay | Crea Fattura
---

<link rel="stylesheet" href="../css/shopay.css">
<script src="../js/items.js"></script>
<script src="../js/invoice.js"></script>

> NOTA: QUESTA PAGINA È INTESA SOLO PER GLI UTENTI ITALIANI  
> NOTE: THIS PAGE IS INTENDED FOR ITALIAN USERS ONLY  

> NOTA: ANCORA IN SVILUPPO

<h1>Crea  fattura</h1>

<form class="invoice-form" id="invoice-form">

  <!-- DATI DEL CEDENTE -->
  <div class="dati-cedente">
    <h2>Dati del Cedente (chi emette la fattura)</h2>

    <label for="cedente-nome">Nome / Ragione Sociale:</label>
    <input type="text" name="cedente-nome" id="cedente-nome" required>

    <label for="cedente-indirizzo">Indirizzo:</label>
    <input type="text" name="cedente-indirizzo" id="cedente-indirizzo" placeholder="Via INDIRIZZO, NUMERO CIVICO, CAP, città, provincia" required>

    <label for="cedente-piva">Partita IVA:</label>
    <input type="text" name="cedente-piva" id="cedente-piva" pattern="\d{11}" title="11 cifre numeriche">

    <label for="cedente-cf">Codice Fiscale:</label>
    <input type="text" name="cedente-cf" id="cedente-cf" maxlength="16" pattern="[A-Z0-9]{16}" title="16 caratteri alfanumerici">
  </div>

  <hr/>

  <!-- DATI DELL'ACQUIRENTE -->
  <div class="dati-acquirente">
    <h2>Dati dell'Acquirente (chi riceve la fattura)</h2>

    <label for="acquirente-nome">Nome / Ragione Sociale:</label>
    <input type="text" name="nome" id="acquirente-nome" required>

    <label for="acquirente-indirizzo">Indirizzo:</label>
    <input type="text" name="indirizzo" id="acquirente-indirizzo" placeholder="Via INDIRIZZO, NUMERO CIVICO civico, CAP, città, provincia" required>

    <label for="acquirente-identificativo">Tipo di identificativo:</label>
    <select name="acquirente-identificativo" id="acquirente-identificativo" required>
      <option value="">Seleziona</option>
      <option value="cf">Codice Fiscale</option>
      <option value="piva">Partita IVA</option>
    </select>

      <label for="acquirente-identificativo">Codice Fiscale o Partita IVA:</label>
    <input type="text" name="acquirente-valore-identificativo" id="acquirente-valore-identificativo" placeholder="Inserisci Codice Fiscale o Partita IVA" required>
  </div>

  <hr/>

  <!-- PRODOTTI / SERVIZI -->
  <h2>Servizi o Prodotti</h2>
  <div id="servizi-prodotti"></div>
  <button type="button" onclick="add_item()">Aggiungi prodotto / servizio</button>

  <hr/>

  <button type="button" onclick="generate_pdf_invoice()" style="display: inline;">Scarica fattura PDF</button>
  <button type="button" onclick="generate_xml_invoice()" style="display: inline;">Scarica fattura XML</button>

</form>

<script>
  // Aggiorna placeholder e pattern in base alla scelta tra CF o P.IVA
  const selectIdentificativo = document.getElementById('acquirente-identificativo');
  const inputIdentificativo = document.getElementById('acquirente-valore-identificativo');

  selectIdentificativo.addEventListener('change', function() {
    if(this.value === 'cf') {
      inputIdentificativo.placeholder = 'Inserisci Codice Fiscale (16 caratteri)';
      inputIdentificativo.pattern = '[A-Z0-9]{16}';
      inputIdentificativo.title = '16 caratteri alfanumerici';
    } else if(this.value === 'piva') {
      inputIdentificativo.placeholder = 'Inserisci Partita IVA (11 cifre)';
      inputIdentificativo.pattern = '\\d{11}';
      inputIdentificativo.title = '11 cifre numeriche';
    } else {
      inputIdentificativo.placeholder = 'Inserisci Codice Fiscale o Partita IVA';
      inputIdentificativo.pattern = '';
      inputIdentificativo.title = '';
    }
  });
</script>
