const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

const changeColorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

const handleChangeColorBtnClick = () => {
  const randomColor = getRandomHexColor();
  colorSpan.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
};

changeColorBtn.addEventListener("click", handleChangeColorBtnClick)
