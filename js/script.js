//First Name Button
var firstName = document.getElementById('btn1');

function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

firstName.addEventListener('click', function(){
    var firstName = prompt("What is your first name?");
    confirm("Is your first name " + firstName + " ?");

    console.log (firstName);
});

//Middle Name Button
var middleName = document.getElementsByTagName('button')[1];

middleName.addEventListener('click', function(){
    var middleName = prompt("What is your middle name?");
    confirm("Is your middle name " + middleName + " ?");

    console.log (middleName);
});

//Last Name Button
var lastName = document.querySelector('#btn3');

lastName.addEventListener('click', function(){
    var lastName = prompt("What is your last name?");
    confirm("Is your last name " + lastName + " ?");

    console.log (lastName);
});
