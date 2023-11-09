/**
Потрібно реалізувати логіку, яка буде формувати 2 випадаючих списки.
У першому містяться назви країн, у другому – назви міст.
Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку
певна країна - в правому випадаючому списку з'являлися міста цієї країни.
Список міст формується динамічно, через JavaScript.
Також потрібно нижче в параграфі вивести назву обраної країни і місто.
Спробуйте не вносити зміни в html файл.
 */



const country = document.getElementById('country');
const cities = document.getElementById('cities');
const paragraph = document.querySelector('p');

const countryCities = {
  usa: ['New York', 'Chicago'],
  ger: ['Berlin', 'Munich'],
  ukr: ['Kharkiv', 'Poltava'],
};

function updateCityList() {
  const selectedCountry = country.value;
  cities.innerHTML = '';

  const countryCitiesArray = countryCities[selectedCountry];

  countryCitiesArray.forEach((city, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.text = city;
    cities.appendChild(option);
  });

  updateParagraphText();
}

function updateParagraphText() {
    const selectedCountry = country.options[country.selectedIndex].text;
    const selectedCity = cities.options[cities.selectedIndex].text;

    paragraph.innerText = `${selectedCountry}, ${selectedCity}`;
}

country.addEventListener('change', updateCityList);
cities.addEventListener('change', updateParagraphText);