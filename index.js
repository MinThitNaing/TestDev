var my_name = prompt("What is your name?: ");
var firstChar = name.slice(0, 1);
var upperCaseFirtChar = firstChar.toUpperCase();
var restOfName = name.slice(1, name.length);
restOfName = restOfName.toLowerCase();
var capitalisedName = upperCaseFirtChar + restOfName;
alert("Hello, " + capitalisedName);
