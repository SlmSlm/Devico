let blocks = document.querySelectorAll(".block");

blocks.forEach((el) =>
  el.addEventListener("click", function changeColor() {
    el.style =
      "background-color: " +
      "#" +
      (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();
  })
);
