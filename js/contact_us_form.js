function makeSelectionBox(id, options, dir) {
  const selectionBox = document.getElementById(id);

  function createDropdown() {
    // Remove existing dropdown
    const existing = selectionBox.querySelector(".dropdown");
    if (existing) existing.remove();

    const dropdown = document.createElement("div");
    dropdown.className = "dropdown";

    for (const code in options) {
      const item = document.createElement("div");
      item.className = "dropdown-item selection-item"; // reuse main selection-item style

      // Image div
      const imgDiv = document.createElement("div");
      imgDiv.className = "selection-item-image";
      imgDiv.style.backgroundImage = `url(${dir}/${code}.svg)`;
      imgDiv.style.backgroundSize = "cover";
      imgDiv.style.backgroundPosition = "center";
      imgDiv.style.borderRadius = "50%";
      imgDiv.style.width = "2rem";
      imgDiv.style.height = "2rem";

      // Text span
      const text = document.createElement("span");
      text.textContent = options[code];

      item.appendChild(imgDiv);
      item.appendChild(text);

      // Click to select
      item.addEventListener("click", () => {
        const shown = selectionBox.querySelector(".selection-item.shown");
        const imgContainer = shown.querySelector(".selection-item-image");

        // Apply selected image and text
        imgContainer.style.backgroundImage = `url(${dir}/${code}.svg)`;
        shown.querySelector(".selection-item-text p").textContent = options[code];

        dropdown.remove();
      });

      dropdown.appendChild(item);
    }

    selectionBox.appendChild(dropdown);
  }

  // Toggle dropdown
  selectionBox.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) createDropdown();
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", (e) => {
    if (!selectionBox.contains(e.target)) {
      const dropdown = selectionBox.querySelector(".dropdown");
      if (dropdown) dropdown.remove();
    }
  });
}

// Example usage
const countries = { japan: "日本 / Japan", italy: "Italia / Italy" };
const currencies = { jpy: "Yen (JPY)", eur: "Euro (EUR)" };

makeSelectionBox("country-of-incorporation", countries, "/assets/svg/flags");
makeSelectionBox("fiscal-residence", countries, "/assets/svg/flags");
makeSelectionBox("preferred-currency", currencies, "/assets/svg/currencies");