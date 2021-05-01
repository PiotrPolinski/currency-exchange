{
  const calculateResult = (amount, currency) => {

    const rateUSD = 3.7978;
    const rateGBP = 5.2376;
    const rateCHF = 4.1279;
    const rateEUR = 4.5481;

    switch (currency) {

      case "USD":
        return amount / rateUSD;

      case "GBP":
        return amount / rateGBP;

      case "CHF":
        return amount / rateCHF;

      case "EUR":
        return amount / rateEUR;

    }
  };

  const updateResultText = (amount, result, currency) => {

    const resultElement = document.querySelector(".js-finalResult");
    resultElement.innerHTML = `${amount} PLN = ${result.toFixed(2)} ${currency}`;

  };

  const onForminput = () => {

    const amountElement = document.querySelector(".js-myAmount");
    const currencyElement = document.querySelector(".js-wantedCurrency");
    const resultElement = document.querySelector(".js-finalResult");

    const amount = +amountElement.value;
    const currency = currencyElement.value;
    const result = calculateResult(amount, currency);

    updateResultText(amount, result, currency);
  };



  const init = () => {

    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("input", onForminput);
  };

  init();
}
