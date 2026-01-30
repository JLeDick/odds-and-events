const state = {
  numberBank: [],
  odds: [],
  evens: [],
};

function renderNumberBank() {
  const numberBankSection = document.createElement("section");
  numberBankSection.classList.add("number-bank");

  const title = document.createElement("h2");
  title.textContent = "Number Bank";
  numberBankSection.appendChild(title);

  const numberList = document.createElement("div");
  numberList.classList.add("number-list");

  state.numberBank.forEach((num) => {
    const numberSpan = document.createElement("span");
    numberSpan.classList.add("number");
    numberSpan.textContent = num;
    numberList.appendChild(numberSpan);
  });

  numberBankSection.appendChild(numberList);
  return numberBankSection;
}

function renderOdds() {
  const oddsSection = document.createElement("section");
  oddsSection.classList.add("odds");

  const title = document.createElement("h2");
  title.textContent = "Odds";
  oddsSection.appendChild(title);

  const numberList = document.createElement("div");
  numberList.classList.add("number-list");

  state.odds.forEach((num) => {
    const numberSpan = document.createElement("span");
    numberSpan.classList.add("number");
    numberSpan.textContent = num;
    numberList.appendChild(numberSpan);
  });

  oddsSection.appendChild(numberList);
  return oddsSection;
}

function renderEvens() {
  const evensSection = document.createElement("section");
  evensSection.classList.add("evens");

  const title = document.createElement("h2");
  title.textContent = "Evens";
  evensSection.appendChild(title);

  const numberList = document.createElement("div");
  numberList.classList.add("number-list");

  state.evens.forEach((num) => {
    const numberSpan = document.createElement("span");
    numberSpan.classList.add("number");
    numberSpan.textContent = num;
    numberList.appendChild(numberSpan);
  });

  evensSection.appendChild(numberList);
  return evensSection;
}

function renderForm() {
  const form = document.createElement("form");

  const input = document.createElement("input");
  input.type = "number";
  input.id = "number-input";
  input.placeholder = "Enter a number";
  input.required = true;

  const addButton = document.createElement("button");
  addButton.type = "submit";
  addButton.textContent = "Add Number";

  form.appendChild(input);
  form.appendChild(addButton);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addNumber(parseInt(input.value));
    input.value = "";
  });

  return form;
}

function renderSortButtons() {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("sort-buttons");

  const sortOneButton = document.createElement("button");
  sortOneButton.textContent = "Sort 1";
  sortOneButton.addEventListener("click", sortOne);

  const sortAllButton = document.createElement("button");
  sortAllButton.textContent = "Sort All";
  sortAllButton.addEventListener("click", sortAll);

  buttonContainer.appendChild(sortOneButton);
  buttonContainer.appendChild(sortAllButton);

  return buttonContainer;
}

function addNumber(num) {
  state.numberBank.push(num);
  render();
}

function sortOne() {
  if (state.numberBank.length === 0) return;

  const num = state.numberBank.shift();

  if (num % 2 === 0) {
    state.evens.push(num);
  } else {
    state.odds.push(num);
  }

  render();
}

function sortAll() {
  while (state.numberBank.length > 0) {
    const num = state.numberBank.shift();

    if (num % 2 === 0) {
      state.evens.push(num);
    } else {
      state.odds.push(num);
    }
  }

  render();
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const header = document.createElement("h1");
  header.textContent = "Odds and Events";

  app.appendChild(header);
  app.appendChild(renderForm());
  app.appendChild(renderSortButtons());
  app.appendChild(renderNumberBank());

  const categoriesContainer = document.createElement("div");
  categoriesContainer.classList.add("categories");
  categoriesContainer.appendChild(renderOdds());
  categoriesContainer.appendChild(renderEvens());

  app.appendChild(categoriesContainer);
}

render();
