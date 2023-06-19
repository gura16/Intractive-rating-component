const firstcontainer = document.querySelector(".main-container");
const secondcontainer = document.querySelector(".main-container2");
const button = document.querySelector(".button");
const numbers = document.querySelectorAll(".oval-number");
const select = document.querySelector(".select");

button.addEventListener("click", () => {
  firstcontainer.style.display = "none";
  secondcontainer.style.display = "flex";
});

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    if (numbers[i].classList.contains("open")) {
      numbers[i].style.backgroundColor = "";
      numbers[i].style.color = "";
      numbers[i].classList = "oval-number";
    } else {
      numbers[i].style.backgroundColor = "#7C8798";
      numbers[i].style.color = "#ffff";
      select.textContent =
        "You selected " + numbers[i].textContent + " out of 5";
      numbers[i].classList = "open";
    }
    for (let k = 0; k < numbers.length; k++) {
      if (numbers[k].classList.contains("open") && numbers[k] !== numbers[i]) {
        numbers[k].style.backgroundColor = "";
        numbers[k].style.color = "";
        numbers[k].classList = "oval-number";
      }
    }
  });
}
