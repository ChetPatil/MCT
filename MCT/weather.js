function GetInformation() {
    var CityInputName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = ""+CityInputName.value+"";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+CityInputName.value+'&appid=9ed8a055d5034a9dbd6bf480f6b3faef')
.then(response => response.json())
.then(data => {
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
    }

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
    }
  
     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    console.log(data)
})
}
function Default(){
    document.getElementById("cityInput").defaultValue = "Karnataka";
    GetInformation();
}
var Dates = new Date();
var Weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
function CheckDay(day){
    if(day + Dates.getDay() > 6){
        return day + Dates.getDay() - 7;
    }
    else{
        return day + Dates.getDay();
    }
}
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = Weekdays[CheckDay(i)];
    }