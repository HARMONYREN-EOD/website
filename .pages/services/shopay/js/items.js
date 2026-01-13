let n = 0;

function add_item() {
  const container = document.getElementById("servizi-prodotti");

  const div = document.createElement("div");
  div.id = "voce-" + n;
  div.className = "voce";
  div.style.border = "1px solid var(--text-color)";
  div.style.padding = "10px";
  div.style.marginBottom = "10px";

  const h3 = document.createElement("h3");
  h3.textContent = "Voce #" + (n + 1);

  // Helper function to create a field with label + input/select
  function create_field(labelText, element) {
    const wrapper = document.createElement("div");
    wrapper.style.marginBottom = "8px";

    const label = document.createElement("label");
    label.textContent = labelText;
    label.style.display = "block";
    label.style.marginBottom = "2px";

    element.required = true;
    element.style.width = "100%";
    element.style.boxSizing = "border-box";

    wrapper.appendChild(label);
    wrapper.appendChild(element);
    return wrapper;
  }

  // Nome del servizio/prodotto
  const inputNome = document.createElement("input");
  inputNome.type = "text";
  inputNome.name = "voce-" + n + "-nome";

  // Unità di misura
  const unitaSelect = document.createElement("select");
  unitaSelect.name = "voce-" + n + "-unita";
  ["Pezzi", "Ore", "Mq", "Litri", "Altro"].forEach(option => {
    const opt = document.createElement("option");
    opt.value = option.toLowerCase();
    opt.textContent = option;
    unitaSelect.appendChild(opt);
  });

  // Quantità
  const inputQuantita = document.createElement("input");
  inputQuantita.type = "number";
  inputQuantita.min = "0";
  inputQuantita.step = "0.01";
  inputQuantita.name = "voce-" + n + "-quantita";

  // Prezzo unitario
  const inputPrezzo = document.createElement("input");
  inputPrezzo.type = "number";
  inputPrezzo.min = "0";
  inputPrezzo.step = "0.01";
  inputPrezzo.name = "voce-" + n + "-prezzo";

  // IVA (%)
  const inputIva = document.createElement("input");
  inputIva.type = "number";
  inputIva.min = "0";
  inputIva.max = "100";
  inputIva.step = "0.01";
  inputIva.name = "voce-" + n + "-iva";
  inputIva.placeholder = "Es. 22";

  // Bottone Rimuovi
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Rimuovi voce";
  button.style.marginTop = "5px";
  button.addEventListener("click", function () {
    remove_item(div.id);
  });

  // Append campi al div principale
  div.appendChild(h3);
  div.appendChild(create_field("Nome del servizio/prodotto:", inputNome));
  div.appendChild(create_field("Unità di misura:", unitaSelect));
  div.appendChild(create_field("Quantità:", inputQuantita));
  div.appendChild(create_field("Prezzo per unità (€):", inputPrezzo));
  div.appendChild(create_field("IVA (%):", inputIva));
  div.appendChild(button);

  container.appendChild(div);

  n++;
}

function remove_item(id) {
  const elem = document.getElementById(id);
  if (elem) {
    elem.remove();
  }
}
