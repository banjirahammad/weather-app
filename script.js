
let search_input = document.querySelector("#search_input");
const search_btn = document.querySelector("#btn");
const key = 'df52d4362dcf40b8881140917230207';

search_btn.addEventListener("click", getInfo);

function getInfo() {
    let search = search_input.value;
    getWeatherData(search);
};

const wether = document.querySelector('.weather-result ');
wether.style.display = "none";
let result = document.querySelector('.card-body ');

function getWeatherData(v) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${v}`;
    axios.get(url)
        .then(response => {
            wether.style.display = "block";
            const location = response.data.location;
            const current = response.data.current;
            result.innerHTML = 
            `
                <div class="img  text-center">
                     <img src="https:${current.condition.icon}" alt="image" />
                </div>
                <h3><b>Location</b>: ${location.name}, ${location.country}</h3>
                <h3><b>Temperature</b>: ${current.temp_c}°C / ${current.temp_f}°F</h3>
                <h3><b>Humidity</b>: ${current.humidity}%</h3>
                <h3><b>Description</b>: ${current.condition.text}</h3>
            `;
    })
        .catch(error => {
            wether.style.display = "block";
            result.innerHTML = `<h2>Location can not find</h2>`
        // Handle errors
        // console.error(error);
        
    });
}
