function createTemperatureFetcher() {
  const temperatureData = {
    "New York": 20,
    London: 18,
    Paris: 22,
    Tokyo: 25,
    Sydney: 28,
  };

  const cache = {};

  return function getTemperatureForCity(city) {
    if (cache[city]) {
      console.log(`Retrieved from cache: ${city}`);
      return cache[city];
    } else if (temperatureData[city]) {
      console.log(`Fetched from API and cached: ${city}`);
      cache[city] = temperatureData[city];
      return cache[city];
    } else {
      return `Temperature data not available for ${city}`;
    }
  };
}

const getTemperatureForCity = createTemperatureFetcher();

const temperature1 = getTemperatureForCity("New York");
console.log(temperature1);

const temperature2 = getTemperatureForCity("New York");
console.log(temperature2);

const temperature3 = getTemperatureForCity("London");
console.log(temperature3);

const temperature4 = getTemperatureForCity("London");
console.log(temperature4);
