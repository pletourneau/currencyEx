# _{Currency Exchanger}_

#### By _**{Paul LeTourneau}**_

#### _{Using the ExchangeRate-API, this will convert a currency from USD to any currency supported by this API}_

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _Bootstrap_
* _Node.js v18.17.1_
* _NPM v9.6.7_

## Description

_{With the input of an amount in USD and a second input of another currency, the user is able to see how much the USD will convert to in a second currency. This does not take exchange fees into account. It uses the most up to date information from the ExchangeRate-API, but please note that rapidly fluctuating currencies can change faster than the API can keep up.}_

## Setup/Installation Requirements

* _Clone the repository from this GitHub link, https://github.com/pletourneau/currencyEx_
* _Open root directory in code editor_
* _In the root directory add a file named ".env"_
* _In the root directory add a file named ".gitignore"_
* _In a web browser, preferably Chrome, navigate to https://app.exchangerate-api.com/sign-up and create a "Free" account_
* _After account is created, navigate to https://app.exchangerate-api.com/keys and copy your active API key_
* _Return to your code editor. Open ".env" file_
* _Add the following text into the ".env" file, "API_KEY=" followed by the key that was given to you on the ExchangeRate-API site (do not enter quotation marks)_
* _Add the following text into the ".gitignore" file, ".env" (do not enter quotation marks)_
* _In the terminal, or GitBash, enter $ "npm install" to install all packages_
* _In the terminal, or GitBash, enter $ "npm run build" to build the project using webpack_
* _If you would like to lint the files, in the terminal, or GitBash, enter $ "npm run lint"_
* _In the terminal, or GitBash, enter $ "npm run start" to start a development server_

_{The instructions above assume you already have node.js and npm.js installed on your computer. See technologies used for version numbers}_

## Known Bugs

* _No known bugs_


## License

```
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

_{Please contact me with any questions at thepaulletourneau@gmail.com}_

Copyright (c) _2023_ _Paul LeTourneau_