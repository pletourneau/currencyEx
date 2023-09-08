import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './css/styles.css';

function getRates() {
  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElements(response);
    }
  });

  request.open("GET", url, true);
  request.send();
}




//UI logic

