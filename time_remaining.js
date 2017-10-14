var Time1 = new Date('2017-10-14 07:00:00');
var Time12 = Time1.getHours();

var Time2 = new Date('2017-10-14 05:00:00');
var Time21 = Time2.getHours();

var Hours = new Date('2017-10-14 12:00:00');
var Hours2 = Hours.getHours();

var difference = (Time12 - Time21);

var usedTime = Hours2 - difference;

var leftTime = Hours2 - usedTime;

console.log("You Still have " + leftTime + " hours left.");
