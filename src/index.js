import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './css/styles.css';
import { Rates, mult } from './js/apiLogic.js';


function showRate(apiResponse, userInputNum, userInputCur) {
  let res = mult(apiResponse, userInputNum, userInputCur)
  document.getElementById("showResults").innerText = res;
}
function showError(request) {
  document.getElementById("showResults").innerText = `There is an error accessing the bike ${request[0].status}`;
}


function handleFormSubmission(event) {
  event.preventDefault();
  // const userInputNum = document.getElementById("amount").value;
  // const userInputCur = document.getElementById("currencyNew").value;
  document.getElementById("amount").value = null;
  document.getElementById("currencyNew").value = null;
  let promise = Rates.getRates();
  promise.then(function (response) {
    showRate(response);
  }, function (errorMessage) {
    showError(errorMessage);
  });
}

window.addEventListener("load", function () {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});