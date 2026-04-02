const categoryElements = document.querySelectorAll(".item");
console.log("Number of categories: ", categoryElements.length);
categoryElements.forEach((category) => {
  console.log("Category: ", category.querySelector("h2").textContent);
  console.log("Elements: ", category.querySelectorAll("li").length);
});
