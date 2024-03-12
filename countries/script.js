document.addEventListener("DOMContentLoaded", function () {
  const selectElement = document.querySelector(".form");
  const countriesContainer = document.querySelector(".countries");

  fetch("https://restcountries.com/v3/all")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((country) => {
        const option = document.createElement("option");
        option.textContent = country.name.common;
        option.value = country.name.common;
        selectElement.appendChild(option);
      });

      selectElement.addEventListener("change", function () {
        const selectedCountry = this.value;
        const selectedCountryData = data.find(
          (country) => country.name.common === selectedCountry
        );

        countriesContainer.innerHTML = `
                    <div style="margin 2px">
                        <img src="${
                          selectedCountryData.flags[0]
                        }" width="100" height="auto">
                        <h2>${selectedCountry}</h2>
                        <p>Capital: ${selectedCountryData.capital}</p>
                        <p>Population: ${selectedCountryData.population}</p>
                        <p>Region: ${selectedCountryData.region}</p>
                        <p>Subregion: ${selectedCountryData.subregion}</p>
                        <p>Languages: ${Object.values(
                          selectedCountryData.languages
                        ).join(", ")}</p>
                    </div>
                `;
      });
    })
    .catch((error) => console.error("Error fetching countries:", error));
});
