const form = document.querySelector(".login-form");

const handleFormSubmit = (event) => {
  event.preventDefault();

  const formElements = form.elements;
  const formData = {};

  for (let element of formElements) {
    if (element.name) {
      const value = element.value.trim();

      if (!value) {
        alert("All form fields must be filled in");
        return;
      }

      formData[element.name] = value;
    }
  }

  console.log(formData);
  form.reset();
};

form.addEventListener("submit", handleFormSubmit);
