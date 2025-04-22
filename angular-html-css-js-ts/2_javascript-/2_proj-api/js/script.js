// Variáveis e seleção de elementos
const apiKey = "addad5bde83a3221a3b7a40e8359c37c";
// apiCountryUrl = "https://flagsapi.com/BR/flat/48.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector( "#city" );
// acessa o span dentro o temperature
const tempElement = document.querySelector( "#temperature span" );
const descElement = document.querySelector( "#description" );
const weatherIconElement = document.querySelector( "#weather-icon" );
const countryElement = document.querySelector( "#country" );
const humidityElement = document.querySelector( "#humidity span" );
const windElement = document.querySelector( "#wind span" );

const weatherContainer = document.querySelector( "#weather-data" );


// Funçoes

// acessa a API - assincrona - porque pode demorar um tmepo para responder
const getWeatherData = async( city ) => {
    
    // template string
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    // fetch api
    const res = await fetch( apiWeatherURL );

    // transformar em objeto js
    const data = await res.json();

    return data;
}

// deixar async por causa do getWeatherData
const showWeatherData = async ( city ) => {

    const data = await getWeatherData( city );

    cityElement.innerText = data.name;
        // arrumar a formatação da temperatura - mostrar o grau inteiro
    tempElement.innerText = parseInt( data.main.temp );
    descElement.innerText = data.weather[0].description;
        // mudar o icone do tempo, mudar o src com uma string dinamica
    weatherIconElement.setAttribute( 
        "src", 
        `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` 
    );
    countryElement.setAttribute( "src", `https://flagsapi.com/${data.sys.country}/flat/48.png` );
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;

    weatherContainer.classList.remove( "hide" );
}


// Eventos
searchBtn.addEventListener( "click", ( e ) => {

    // impede o comportamento padrão de um evento de ocorrer
    // se um botão dentro de um formulário for clicado, o evento padrão seria o envio do formulário
    // se não colocasse isso, quando apertasse no botão a página se regarregaria
    e.preventDefault();

    // pegar o valor do input
    const city = cityInput.value;

    showWeatherData( city );
} );

// evento para funcionar apertar enter
// keyup  - evento que pega quando solta a tecla
cityInput.addEventListener( "keyup", (e) => {

    if ( e.code === "Enter" ) {
        const city = e.target.value;

        showWeatherData( city );
    }
} );
