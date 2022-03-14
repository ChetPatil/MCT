let weather = {
    "apiKey":'427a1a328b72d474e92a1277edbac3fc',
    fetchWeather:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            +this.apiKey)
        .then((response)=>response.json())
        
        
        .then((data)=>this.displayWeather(data));
    },
    displayWeather : function(data)
    {
        const { name } = data;
        const { icon, description} = data.weather[0];
        const { temp, humidity } = data.main;
        const {speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon+ ".png";
        document.querySelector(".description").innerText =  description;
        document.querySelector(".temp").innerText =  temp +"° C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity +"%";
        document.querySelector(".wind").innerText = "Wind speed:"+speed+"Km/h";
        document.querySelector(".weather").classList.remove("loading")
    },
    search: function(){
        this.fetchWeather(document.querySelector(".searchbar").value)
    }
};
document
.querySelector(".search button")
.addEventListener("click", function ()
    {
        weather.search();
    });

document.querySelector(".searchbar").addEventListener("keyup", function(event)
{
    if(event.keyup == "Enter")
    {
        weather.search();
    }
});
weather.fetchWeather("Denver");
