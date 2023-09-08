import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './css/styles.css';
import { Rates, mult } from './js/apiLogic.js';


function showRate(userInputNum, userInputCurMult, userInputCur) {
  let res = mult(userInputNum, userInputCurMult, userInputCur);
  document.getElementById("form1").reset();
  document.getElementById("showResults").innerText = res;
  document.getElementById("showCountryCode").innerText = userInputCur;
}
function showError(request) {
  document.getElementById("showResults").innerText = `There is an error accessing the bike ${request[0].status}`;
}


function handleFormSubmission(event) {
  event.preventDefault();
  let promise = Rates.getRates();
  promise.then(function (response) {
    const userInputNum = parseFloat(document.getElementById("amount").value);
    const userInputCur = document.getElementById("currencyNew").value.toUpperCase();
    const userInputCurMult = response[0].conversion_rates[userInputCur];
    if (userInputCurMult === undefined || userInputCurMult === isNaN) {
      document.getElementById("showResults").innerText = "invalid currency code, please try again";
      document.getElementById("form1").reset();
    } else {
      showRate(userInputNum, userInputCurMult, userInputCur);
    }
  }, function (errorMessage) {
    showError(errorMessage);
  });
}

window.addEventListener("load", function () {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});