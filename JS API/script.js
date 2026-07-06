document.getElementById("form").addEventListener("submit",async(e)=>{

    e.preventDefault();

const input = document.getElementById("input_id").value.trim();
const celsius = document.getElementById("c");
const humidity = document.getElementById("h");

const speed = document.getElementById("s");


celsius.textContent = "";
humidity.textContent = "";
speed.textContent = "";


if(!input){

    celsius.textContent = "Enter your city name";

    return;
}

try{

    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=741c8e2867412a6d048b623e3dbfc3c6&units=metric`);

    const data = await api.json();

    console.log(data);


    if(data.cod !== 200){

        throw new Error("city not found ")


    }

    humidity.textContent = data.name;

    speed.innerHTML = `
    
    <p>Temperature : ${data.main.temp}</p>
    <p>Humidity : ${data.main.humidity}</p>
    <p>Speed : ${data.wind.speed}</p>
    <p>Condition :${data.weather[0].main}</p>
    `;




}catch(err){

    celsius.textContent="city not found";
    console.log(err);
}



})