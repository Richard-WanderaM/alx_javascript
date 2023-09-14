#!/usr/bin/node

function welcomeMessage(fullName) {
    return function () {
      alert('Welcome ' + fullName);
    };
  }
  
  var guillaume = welcomeMessage('Guillaume');
  var alex = welcomeMessage('Alex');
  var fred = welcomeMessage('Fred');
  
  // To test the closures
  guillaume();
  alex();
  fred();
  