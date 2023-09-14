#!/usr/bin/node

// First, we create the studentHogwarts module
var studentHogwarts = (function () {
    var privateScore = 0;
    var name = null;
  
    function changeScoreBy(points) {
      privateScore += points;
    }
  
    return {
      setName: function (newName) {
        name = newName;
      },
      rewardStudent: function () {
        changeScoreBy(1);
      },
      penalizeStudent: function () {
        changeScoreBy(-1);
      },
      getScore: function () {
        return name + ': ' + privateScore;
      },
    };
  })();
  
  // Second, we create an instance for Harry
  var harry = Object.create(studentHogwarts);
  harry.setName('Harry');
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  
  // we then log Harry's name and score
  console.log(harry.getScore());
  
  // We Create an instance for Draco
  var draco = Object.create(studentHogwarts);
  draco.setName('Draco');
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  
  // We finally Log Draco's name and score
  console.log(draco.getScore());
  