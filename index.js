import { totalTip, tipAmountPerPerson, totalPerPerson } from "./ults.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initial
  let tip_percent = 0;
  let bill = 0;
  let tip_custom = 0;
  let tip_radio = 0;
  let noOfPeople = 0;

  // Input values
  let input_noOfPeople = document.getElementById("number-of-people");
  let input_bill = document.getElementById("bill");
  let input_tip_custom = document.getElementById("percent6");
  let radio_btns = document.getElementsByClassName("radio-button");
  let tip_amount_per_person_rs = document.getElementById("tip");
  let total_per_person_rs = document.getElementById("total");

  //Error text
  let bill_errText = document.getElementsByClassName("bill__errorText")[0];
  let tip_errText = document.getElementsByClassName("tip__errorText")[0];
  let noOfPeople_errText = document.getElementsByClassName(
    "noOfPeople__errorText"
  )[0];

  // Reset button
  let reset = document.getElementsByClassName("btn-reset")[0];

  // Handle User's input
  input_bill.addEventListener("keyup", () => {
    let temp = input_bill.value.trim();

    // Check if input value is a number or not
    if (isNaN(temp)) {
      bill_errText.classList.remove("hidden");
      bill_errText.innerHTML = "Please type a number!";
      input_bill.classList.add("input-error");
    } else {
      bill_errText.classList.add("hidden");
      bill_errText.innerHTML = "";
      input_bill.classList.remove("input-error");
      bill = parseFloat(temp);
    }
  });

  input_tip_custom.addEventListener("keyup", () => {
    let temp = input_tip_custom.value.trim();

    // Check if input value is a number or not
    if (isNaN(temp)) {
      tip_errText.classList.remove("hidden");
      tip_errText.innerHTML = "Please type a number!";
      input_tip_custom.classList.add("input-error");
    }
    // Check if input value is an integer
    else if (!Number.isInteger(Number(temp))) {
      noOfPeople_errText.classList.remove("hidden");
      noOfPeople_errText.innerHTML = "Please type an integer!";
      input_noOfPeople.classList.add("input-error");
    } else {
      tip_errText.classList.add("hidden");
      tip_errText.innerHTML = "";
      input_tip_custom.classList.remove("input-error");
      tip_custom = parseInt(temp);
    }
  });

  // If user click a tip button
  for (let index = 0; index < radio_btns.length; index++) {
    radio_btns[index].addEventListener("click", function () {
      // 1. Get input value
      tip_radio = parseInt(this.children[0].value);

      // 2. Block the custom field
      input_tip_custom.disabled = true;

      //3. Checked the radio button
      this.children[0].checked = true;
    });
  }

  // Suppose this event is the last action of the user
  input_noOfPeople.addEventListener("keyup", () => {
    let temp = input_noOfPeople.value.trim();
    // Check if input value is a number or not
    if (isNaN(temp)) {
      noOfPeople_errText.classList.remove("hidden");
      noOfPeople_errText.innerHTML = "Please type a number!";
      input_noOfPeople.classList.add("input-error");
    }
    // Check if input value is an integer
    else if (!Number.isInteger(Number(temp))) {
      noOfPeople_errText.classList.remove("hidden");
      noOfPeople_errText.innerHTML = "Please type an integer!";
      input_noOfPeople.classList.add("input-error");
    } else {
      noOfPeople_errText.classList.add("hidden");
      noOfPeople_errText.innerHTML = "";
      input_noOfPeople.classList.remove("input-error");
      noOfPeople = parseInt(temp);
    }

    // Caculate tip amount and total money per person
    tip_percent = tip_custom > 0 ? tip_custom : tip_radio;

    let total_tip = totalTip(bill, tip_percent);
    let tip_amount_per_person = tipAmountPerPerson(total_tip, noOfPeople);
    let total_per_person = totalPerPerson(bill, total_tip, noOfPeople);

    tip_amount_per_person_rs.innerText =
      tip_amount_per_person > 0 ? tip_amount_per_person : "0.00";
    total_per_person_rs.innerText =
      total_per_person > 0 ? total_per_person : "0.00";
  });

  // Handle reset button
  reset.addEventListener("click", () => {
    tip_percent = 0;
    bill = 0;
    tip_custom = 0;
    tip_radio = 0;
    noOfPeople = 0;
    
    input_tip_custom.disabled = false;
    input_tip_custom.value = "";
    tip_errText.classList.add("hidden");
    tip_errText.innerHTML = "";
    input_tip_custom.classList.remove("input-error");

    input_bill.value = "";
    bill_errText.classList.add("hidden");
    bill_errText.innerHTML = "";
    input_bill.classList.remove("input-error");

    input_noOfPeople.value = "";
    noOfPeople_errText.classList.add("hidden");
    noOfPeople_errText.innerHTML = "";
    input_noOfPeople.classList.remove("input-error");

    tip_amount_per_person_rs.innerText = "0.00";
    total_per_person_rs.innerText = "0.00";

    for (let index = 0; index < radio_btns.length; index++) {
      radio_btns[index].children[0].checked = false;
    }
  });
});
