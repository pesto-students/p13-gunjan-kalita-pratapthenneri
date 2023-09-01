async function getExchangeRate(currencyCode) {
  try {
    const response = await fetch("https://api.exchangerate.host/latest");

    if (!response.ok) {
      throw new Error(
        `Failed to fetch exchange rates. Status: ${response.status}`
      );
    }

    const data = await response.json();

    if (currencyCode in data.rates) {
      const rate = parseFloat(data.rates[currencyCode]).toFixed(4);
      return rate;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error(`Error fetching exchange rate: ${error.message}`);
  }
}

getExchangeRate("USD")
  .then((rate) => {
    console.log(rate); // Output: 1.0845 (rounded to 4 decimal places)
  })
  .catch((error) => {
    console.error(error);
  });
getExchangeRate("XYZ")
  .then((rate) => {
    console.log(rate); // Output: null
  })

  .catch((error) => {
    console.error(error);
  });
