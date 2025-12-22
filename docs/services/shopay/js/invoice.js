function escapeXML(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&apos;");
}

function generate_xml_invoice() {
  const cedentePIVA = escapeXML(document.getElementById("cedente-piva").value);
  const cedenteNome = escapeXML(document.getElementById("cedente-nome").value);

  const acquirenteNome = escapeXML(document.getElementById("acquirente-nome").value);
  const acquirenteIdent = escapeXML(document.getElementById("acquirente-valore-identificativo").value);

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<FatturaElettronica versione="FPR12" xmlns="http://ivaservizi.agenziaentrate.gov.it/docs/xsd/fatture/v1.2">\n`;

  xml += `  <FatturaElettronicaHeader>\n`;
  xml += `    <DatiTrasmissione>\n`;
  xml += `      <IdTrasmittente>\n`;
  xml += `        <IdPaese>IT</IdPaese>\n`;
  xml += `        <IdCodice>${cedentePIVA}</IdCodice>\n`;
  xml += `      </IdTrasmittente>\n`;
  xml += `      <ProgressivoInvio>00001</ProgressivoInvio>\n`;
  xml += `      <FormatoTrasmissione>FPR12</FormatoTrasmissione>\n`;
  xml += `      <CodiceDestinatario>0000000</CodiceDestinatario>\n`;
  xml += `    </DatiTrasmissione>\n`;

  xml += `    <CedentePrestatore>\n`;
  xml += `      <DatiAnagrafici>\n`;
  xml += `        <IdFiscaleIVA>\n`;
  xml += `          <IdPaese>IT</IdPaese>\n`;
  xml += `          <IdCodice>${cedentePIVA}</IdCodice>\n`;
  xml += `        </IdFiscaleIVA>\n`;
  xml += `        <Anagrafica>\n`;
  xml += `          <Denominazione>${cedenteNome}</Denominazione>\n`;
  xml += `        </Anagrafica>\n`;
  xml += `      </DatiAnagrafici>\n`;
  xml += `    </CedentePrestatore>\n`;

  xml += `    <CessionarioCommittente>\n`;
  xml += `      <DatiAnagrafici>\n`;
  xml += `        <Anagrafica>\n`;
  xml += `          <Denominazione>${acquirenteNome}</Denominazione>\n`;
  xml += `        </Anagrafica>\n`;
  xml += `        <CodiceFiscale>${acquirenteIdent}</CodiceFiscale>\n`;
  xml += `      </DatiAnagrafici>\n`;
  xml += `    </CessionarioCommittente>\n`;
  xml += `  </FatturaElettronicaHeader>\n`;

  // Body
  xml += `  <FatturaElettronicaBody>\n`;
  xml += `    <DatiGenerali>\n`;
  xml += `      <TipoDocumento>TD01</TipoDocumento>\n`;
  xml += `      <Divisa>EUR</Divisa>\n`;
  xml += `      <Data>${new Date().toISOString().slice(0,10)}</Data>\n`;
  xml += `      <Numero>1</Numero>\n`;
  xml += `    </DatiGenerali>\n`;

  xml += `    <DatiBeniServizi>\n`;

  let totalWithoutIVA = 0;
  let totalIVA = 0;

  document.querySelectorAll(".voce").forEach(voceDiv => {
    const nome = escapeXML(voceDiv.querySelector('input[name*="-nome"]').value);
    const quantita = parseFloat(voceDiv.querySelector('input[name*="-quantita"]').value) || 0;
    const prezzo = parseFloat(voceDiv.querySelector('input[name*="-prezzo"]').value) || 0;
    const iva = parseFloat(voceDiv.querySelector('input[name*="-iva"]').value) || 0;

    const imponibile = quantita * prezzo;
    const ivaAmount = imponibile * (iva/100);

    totalWithoutIVA += imponibile;
    totalIVA += ivaAmount;

    xml += `      <DettaglioLinee>\n`;
    xml += `        <Descrizione>${nome}</Descrizione>\n`;
    xml += `        <Quantita>${quantita.toFixed(2)}</Quantita>\n`;
    xml += `        <PrezzoUnitario>${prezzo.toFixed(2)}</PrezzoUnitario>\n`;
    xml += `        <PrezzoTotale>${imponibile.toFixed(2)}</PrezzoTotale>\n`;
    xml += `        <AliquotaIVA>${iva.toFixed(2)}</AliquotaIVA>\n`;
    xml += `      </DettaglioLinee>\n`;
  });

  xml += `      <DatiRiepilogo>\n`;
  xml += `        <ImponibileImporto>${totalWithoutIVA.toFixed(2)}</ImponibileImporto>\n`;
  xml += `        <Imposta>${totalIVA.toFixed(2)}</Imposta>\n`;
  xml += `        <EsigibilitaIVA>I</EsigibilitaIVA>\n`;
  xml += `      </DatiRiepilogo>\n`;

  xml += `    </DatiBeniServizi>\n`;
  xml += `  </FatturaElettronicaBody>\n`;
  xml += `</FatturaElettronica>`;

  // Scarica XML
  const blob = new Blob([xml], { type: "application/xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "fattura.xml";
  a.click();
  URL.revokeObjectURL(url);

  alert("XML FatturaPA generato (da validare con XSD prima dell'invio).");
}
