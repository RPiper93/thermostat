'use strict';

function Thermostat() {
  this.temperature = 20;
  this.powerSM = true;
  this.MIN_TEMP = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.MEDIUM_TEMP = 18;
};

Thermostat.prototype.currentTemp = function() {
  return this.temperature;
};

Thermostat.prototype.displayTemp = function() {
  if(this.temperature < this.MEDIUM_TEMP){
    return "#63E57A";
  }
  else if(this.temperature < this.MAX_TEMP_PSM_ON) {
    return "#E0C344";
  };
  return "#E0694D";
};

Thermostat.prototype.upButton = function() {
  if(this._maxTemp() === true) {
    throw "Maximum temperature reached.";
  };
  this.temperature++;
};

Thermostat.prototype.downButton = function() {
  if(this._minTemp() === true) {
    throw "Minimum temperature reached.";
  };
  this.temperature--;
};

Thermostat.prototype.changeMode = function() {
  this.powerSM = !this.powerSM;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};

Thermostat.prototype._minTemp = function() {
  return this.temperature === this.MIN_TEMP;
};

Thermostat.prototype._maxTemp = function() {
  if(this.powerSM === true){
    return this.temperature >= this.MAX_TEMP_PSM_ON;
  }
  else {
    return this.temperature >= this.MAX_TEMP_PSM_OFF;
  };
};