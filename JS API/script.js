const form = document.getElementById("form");
const input = document.getElementById("input");
const result = document.getElementById("result");

const API_KEY = "14c3868875e443bfad464119260407";

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const city = input.value.trim();

    if (city === "") {
        result.innerHTML = "<h3>Please Enter City Name</h3>";
        return;
    }

    try {

        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);

        const data = await response.json();

        if (data.error) {
            result.innerHTML = `<h3>${data.error.message}</h3>`;
            return;
        }

        result.innerHTML = `
            <h2>${data.location.name}, ${data.location.country}</h2>

          

            <h3>${data.current.temp_c} °C</h3>

            <p>Condition : ${data.current.condition.text}</p>

            <p>Humidity : ${data.current.humidity}%</p>

            <p>Wind Speed : ${data.current.wind_kph} km/h</p>
        `;

    } catch (error) {

        result.innerHTML = "<h3>Something Went Wrong</h3>";
        console.log(error);

    }

});
