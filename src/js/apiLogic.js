class Bikes {
  getBikes() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const urlToSend = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.addEventListener("loadend", function() {
        const serverResponse = JSON.parse(this.responseText);
        console.log(serverResponse);
      });  
    });
  }
}  


// export class Bikes {
//   static getBikes(curr) {
//     return new Promise(function (resolve, reject) {
//       let request = new XMLHttpRequest();
//       const urlToSend = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${curr}`;
//       request.addEventListener("loadend", function() {
//         const serverResponse = JSON.parse(this.responseText);
//         if (this.status === 200) {
//           resolve([serverResponse]);
//         } else {
//           reject([this]);
//         }
//       });
//         request.open("GET", urlToSend, true);
//         request.send();
//     });
//   }
// }  

// export function exchange(apiResponse) {
//   const usdTo = ;

// }