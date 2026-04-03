const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

const handleInput = (event) => {
  const currentValue = event.currentTarget.value.trim();
  refs.nameOutput.textContent = currentValue ? currentValue : "Anonymous";
};

refs.nameInput.addEventListener("input", handleInput);
