
export class Rates{
  static getRates() {
    return new Promise(function (resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          console.log(this.status);
          resolve([response]);
        } else {
          reject([this]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}

export function mult(response, userInputNum, userInputCur) {
  let output = `${response}.conversion_rates.${userInputCur} * ${userInputNum}`;
  console.log("wut");
  return output;
}


