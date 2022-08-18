const sumbitBtn = document.getElementById("btn-submit");
const inputs = document.querySelectorAll("input");
const container = document.querySelector(".container");

function getValue() {
  inputs.forEach((input) => {
    if (input.checked) {
      renderResults(input.value);
    }
  });
}

function renderResults(value) {
  const result = `
        <img src="images/illustration-thank-you.svg" class="img-thank-you"/>
        <span class="result">You selected ${value} out of 5</span>
        <h2>Thank You!</h2>
        <p class="p-thanks">We appreciate you taking the time to give a rating. If you ever need more
        support, don’t hesitate to get in touch!</p>
    `;

  container.innerHTML = result;
  container.style.textAlign = "center";

  if (window.innerWidth < 768) {
    container.style.padding = "34px 25px 0 24px";
  } else if (window.innerWidth >= 768) {
    container.style.padding = "45px 40px 45px 32px";
  }
}

sumbitBtn.addEventListener("click", () => {
  getValue();
});
