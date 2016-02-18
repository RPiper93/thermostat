'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases temperature with up button', function() {
    thermostat.upButton();
    expect(thermostat.temperature).toEqual(21);
  });

  it('decreases temperature with down button', function() {
    thermostat.downButton();
    expect(thermostat.temperature).toEqual(19);
  });

  it('won\'t go lower than 10 degrees', function() {
    for(var i = 0; i<10; i++) {
      thermostat.downButton();
    };
    expect(function() {thermostat.downButton()}).toThrow("Minimum temperature reached.");
  });

  it('starts with power saving mode on', function() {
    expect(thermostat.powerSM).toBe(true);
  });

  it('when power saving mode is on, max temp is 25', function() {
    for(var i = 0; i < 5; i++) {
      thermostat.upButton();
    };
    expect(function() { thermostat.upButton() }).toThrow("Maximum temperature reached.");
  });
});
