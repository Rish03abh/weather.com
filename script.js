var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var cityoutput =document.querySelector('#cityoutput');
var descrip =document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
 apik ="4de5be02c2439750e1d74f052a120068";
function convertion(val)
{
    return(val - 273).toFixed(3);
}
 btn.addEventListener('click',function() 
{

fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik) 
.then(res => res.json())
.then(data =>
{

   var nameval = data['name'];
   var descrip = data['weather']['0']['description'];
   var tempature = convertion(data['main']['temp']);
   var wndspeed = data['wind']['speed'] ;

   cityoutput.innerHTML=`Weather of <span>${nameval}</span>`;
   temp.innerHTML= `Temperature: <span>${tempature} °C</span>`;
   description.innerHTML = `sky conditions: <span>${descrip}</span>`;
   wind.innerHTML = `wind speed: <span>${wndspeed} km/h</span>`;
})
.catch(err => alert('you entered wrong city name'));
});