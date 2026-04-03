const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

const refs = {
  createButton: document.querySelector("button[data-create]"),
  destroyButton: document.querySelector("button[data-destroy]"),
  boxesContainer: document.querySelector("#boxes"),
  amountInput: document.querySelector("input[type=number]"),
};

const createBoxes = (amount) => {
  let width = 30;
  let height = 30;
  let content = "";

  for (let i = 0; i < amount; i++) {
    content += `<div style="width: ${width + i * 10}px; height: ${height + i * 10}px; background-color: ${getRandomHexColor()}; margin-top: 5px;"></div>`;
  }

  return content;
};

const handleCreateButtonClick = () => {
  const amount = parseInt(refs.amountInput.value);

  if (amount < 1 || amount > 100) {
    console.log("Please enter a number between 1 and 100");
    return;
  }

  refs.boxesContainer.innerHTML = createBoxes(amount);
  refs.amountInput.value = "";
};

const handleDestroyButtonClick = () => {
  refs.boxesContainer.innerHTML = "";
};

refs.createButton.addEventListener("click", handleCreateButtonClick);
refs.destroyButton.addEventListener("click", handleDestroyButtonClick);
