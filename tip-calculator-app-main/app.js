var bill = document.getElementById("Bill");
var tipBtn = document.querySelectorAll(".tip-btn");
var resetBtn = document.getElementById("reset");
var customTip = document.getElementById("Custom");
let totalVal = document.querySelectorAll(".dollars");
var People = document.getElementById("people");
let error = document.getElementById("error");

let totalValCalc = 0.0;
let billVal = bill.value;
let peopleVal = People.value;
let TipVal = 0.15;

const validateBill = (event) => {
  const value = event.target.value;
  const replacedValue = value.replace(",", ".");

  const billValue = Number(replacedValue);

  billVal = bill.value;
  console.log(billValue);
};

customTip.addEventListener("change", () => {
  tipBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
  TipVal = customTip.value / 100;
  calculateTotal();
});

bill.addEventListener("change", validateBill);

tipBtn.forEach((btn) => {
  btn.addEventListener("click", changeClass);
});

People.addEventListener("change", peopleValue);

function peopleValue() {
  peopleVal = parseFloat(People.value);
  if (peopleVal <= 0) {
    error.innerHTML = "Number Must Be Greater Than Zero";
  } else if (peopleVal > 0) {
    error.innerHTML = "";
  }
  console.log(peopleVal);
  calculateTotal();
}

function changeClass() {
  tipBtn.forEach((btn) => {
    btn.classList.remove("active");
    if (event.target.innerText === "5%") {
      TipVal = 0.05;
    } else if (event.target.innerText === "10%") {
      TipVal = 0.1;
    } else if (event.target.innerText === "15%") {
      TipVal = 0.15;
    } else if (event.target.innerText === "25%") {
      TipVal = 0.25;
    } else if (event.target.innerText === "50%") {
      TipVal = 0.5;
    }
    if (event.target.innerText === btn.innerText) {
      btn.classList.add("active");
    }
  });
  calculateTotal();
  customTip.value = "";
}

function calculateTotal() {
  if (peopleVal > 0) {
    let tip = (billVal * TipVal) / peopleVal;
    let totalAmmount = (billVal * (TipVal + 1)) / peopleVal;

    totalVal[0].innerHTML = "$" + tip.toFixed(2);
    totalVal[1].innerHTML = "$" + totalAmmount.toFixed(2);
    console.log(tip);
  }
}

resetBtn.addEventListener("click", () => {
  bill.value = "";
  People.value = "1";
  tipBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
  customTip.value = "";
  totalVal[0].innerHTML = "$0.00";
  totalVal[1].innerHTML = "$0.00";
});
