
export class Rates{
  static getRates() {
    return new Promise(function (resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
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

export function mult(userInputNum, userInputCurMult) {
  const output = (userInputNum * userInputCurMult).toFixed(2);
  return Math.abs(output);
}


