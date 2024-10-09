const button = document.querySelector("button");
const inputBox = document.querySelector("#userInput");
const image = document.querySelector("img");

button.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("Please Enter Text");
    return;
  }
  image.src =
    " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    inputBox.value +
    "&format=svg";
  image.classList.add("show");
  inputBox.value = "";
  inputBox.focus();
});
