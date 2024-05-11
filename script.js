const billInput = document.querySelector(".billInput input");
const CustomTip = document.querySelector(".tip input");
const broz = document.querySelector(".peoples input");
const genBill = document.querySelector(".genBill");
const resetbtn = document.querySelector(".right button");
const tipsContainer = document.querySelector(".tips");

let selectedTip = 0;

broz.addEventListener("input", () => {
  if (selectedTip && broz.value) {
    genBill.disabled = false;
  } else {
    genBill.disabled = true;
  }
});

tipsContainer.addEventListener("click", (e) => {
  if (e.target != tipsContainer) {
    CustomTip.value = "";
    [...tipsContainer.children].forEach((tip) =>
      tip.classList.remove("selectedTip")
    );
    e.target.classList.add("selectedTip");
    selectedTip = parseInt(e.target.innerText);
    if (broz.value) {
      genBill.disabled = false;
    } else {
      genBill.disabled = true;
    }
  }
});

CustomTip.addEventListener("input", () => {
  [...tipsContainer.children].forEach((tip) =>
    tip.classList.remove("selectedTip")
  );
  selectedTip = parseInt(CustomTip.value);
  if (selectedTip && broz.value) {
    genBill.disabled = false;
  } else {
    genBill.disabled = true;
  }
});

billInput.addEventListener("input", () => {
  if (billInput.value){
    CustomTip.disabled = false;
    broz.disabled = false;
    tipsContainer.classList.remove("disabled");
  } else {
    CustomTip.value = "";
    broz.value = "";
    [...tipsContainer.children].forEach((tip) =>
      tip.classList.remove("selectedTip")
    );
    CustomTip.disabled = true;
    broz.disabled = true;
    tipsContainer.classList.add("disabled");
  }
});

genBill.addEventListener("click", () => {
  const billAmt = parseInt(billInput.value);
  const totalTip = (billAmt * selectedTip) / 100;

  const totAmt = totalTip + billAmt;
  document.querySelector(".amt .result").innerHTML = totalTip;
  document.querySelector(".tot .result").innerHTML = totAmt;
  document.querySelector(".each .result").innerHTML = totAmt / broz.value;
  resetbtn.disabled = false;
  genBill.classList.add("selectedTip");
});

resetbtn.addEventListener("click", () => {
  [...tipsContainer.children].forEach((tip) =>
    tip.classList.remove("selectedTip")
);
billInput.value = "";
  CustomTip.value = "";
  broz.value = "";
  document.querySelector(".amt .result").innerHTML = "";
  document.querySelector(".tot .result").innerHTML = "";
  document.querySelector(".each .result").innerHTML = "";
  selectedTip = 0;
  resetbtn.disabled = true;
  genBill.classList.remove("selectedTip");
  genBill.disabled = true;
  tipsContainer.classList.add("disabled");
  CustomTip.disabled = true;
    broz.disabled = true;
});
