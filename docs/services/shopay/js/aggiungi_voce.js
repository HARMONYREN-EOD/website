let n = 0;

function aggiungi_voce() {
  const container = document.getElementById("servizi-prodotti");

  const div = document.createElement("div");
  div.id = "voce-" + n;

  const h2 = document.createElement("h2");
  h2.textContent = "Voce #" + (n + 1);

  const p = document.createElement("p");
  p.textContent = "Nome del servizio/prodotto:";

  const input = document.createElement("input");
  input.type = "text";

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Rimuovi voce";
  button.onclick = function () {
    rimuovi_voce(n);
  };


  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(input);
  div.appendChild(button);

  container.appendChild(div);

  n++;
}

function rimuovi_voce(id) {
  const elem = document.getElementById("voce-" + (id - 1));
  if (elem) {
    elem.remove();
    n--;
  }
}
