const bodyElement = document.querySelector("body");
const btnGenerateHexColor = document.querySelector(".btn");
const displayHexColor = document.querySelector(".hex");

function generateHex() {
  const resources = "0123456789ABCDEF";
  let result = "#";

  for (let i = 0; i < 6; i++) {
    //Math.random() needed be multiplied by 17, cause the last number isn't inclusive
    result += resources[Math.floor(Math.random() * 17)];
  }

  return result;
}

btnGenerateHexColor.addEventListener("click", () => {
  const hexCode = generateHex();

  bodyElement.style.background = hexCode;
  displayHexColor.innerText = hexCode;
});
