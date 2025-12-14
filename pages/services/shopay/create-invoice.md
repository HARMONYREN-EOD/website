---
layout: default.njk
title: 所Pay | Create Invoice
---

<link rel="stylesheet" href="../css/shopay.css">
<script src="../js/aggiungi_voce.js"></script>

> NOTA: QUESTA PAGINA E' INTENDATA PER GLI UTENTI ITALIANI  
> NOTE: THIS PAGE IS INTENDED FOR ITALIAN USERS  

> NOTE: ANCORA IN SVILUPPO

<h1>Crea una fattura</h1>

<form action="/submit" method="POST" class="invoice-form">
  <div class="dati-cedente">
    <h2>Dati del Cedente (chi emette la fattura)</h2>
    <div>
      <p>Nome:</p>
      <input type="text" name="cedente-nome" id="cedente-nome">
    </div>
    
    <div>
      <p>Cognome:</p>
      <input type="text" name="cedente-cognome" id="cedente-cognome">
    </div>
    

    <div>
      <p>Indirizzo:</p>
      <input type="text" name="cedente-indirizzo" id="cedente-indirizzo">
    </div>

    <div>
      <p>Codice Fiscale:</p>
      <input type="text" name="cedente-cf" id="cedente-cf">
    </div>

  </div>
  
  <hr/>

  <div class="dati-acquirente">
    <h2>Dati dell'Acquirente (chi riceve la fattura)</h2>

    <div>
      <p>Nome:</p>
      <input type="text" name="nome" id="nome">
    </div>
    
    <div>
      <p>Cognome:</p>
      <input type="text" name="cognome" id="cognome">
    </div>
    
    <div>
      <p>Indirizzo:</p>
      <input type="text" name="indirizzo" id="indirizzo">
    </div>

    <div>
      <p>Codice Fiscale:</p>
      <input type="text" name="codice-fiscale" id="codice-fiscale">
    </div>

  </div>

  <hr/>

  <h2>Servizi o Prodotti</h2>

  <div id="servizi-prodotti"></div>

  <button type="button" onclick="aggiungi_voce()">Aggiungi prodotto / servizio</button>

</form>
