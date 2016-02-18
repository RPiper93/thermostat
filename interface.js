$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('.temperature-upButton').on('click', function(){
    thermostat.upButton();
    updateTemperature();
  });

  $('.temperature-downButton').on('click', function(){
    thermostat.downButton();
    updateTemperature();
  });

  $('.temperature-resetTemp').on('click', function(){
    thermostat.resetTemp();
    updateTemperature();
  });

  $('.power-saving-mode').on('click', function(){
    thermostat.changeMode();
    if (thermostat.powerSM === false){
      $('.power-saving-status').text("off");
    }
    else {
      $('.power-saving-status').text("on");
    };
  });

  $('.local-city').change(function(){
    var city = $('.local-city').val();
    displayWeather(city);
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ city;
    var token = '&appid=f83f44a7a0afa1876ffd608629d71ef1';
    var units = '&units=metric';
    $.get(url + token + units, function(data){
      $('.local-temperature').text(data.main.temp + " DEGREES");
    });
  };

  function updateTemperature(){
    $('.temperature').text(thermostat.currentTemp() + " DEGREES");
    $('*').css("background-color", thermostat.displayTemp());
  };
});