//First Name Button
var firstName = document.getElementById('btn1');

firstName.addEventListener('click', function(){
    var firstName = prompt("What is your first name?");
    confirm("Is your first name " + firstName.replace(/\b[a-z]/g,function(f){return f.toUpperCase();}) + " ?");

    console.log(firstName.replace(/\b[a-z]/g,function(f){return f.toUpperCase();}));

    //console.log (firstName);
});


//Middle Name Button
var middleName = document.getElementsByTagName('button')[1];

middleName.addEventListener('click', function(){
    var middleName = prompt("What is your middle name?");
    confirm("Is your middle name " + middleName.replace(/\b[a-z]/g,function(f){return f.toUpperCase();}) + " ?");

    console.log(middleName.replace(/\b[a-z]/g,function(f){return f.toUpperCase();}));
});


//Last Name Button
var lastName = document.querySelector('#btn3');

lastName.addEventListener('click', function(){
    var lastName = prompt("What is your last name?");
    confirm("Is your last name " + lastName.replace(/\b[a-z]/g,function(f){return f.toUpperCase();}) + " ?");

    console.log(lastName.replace(/\b[a-z]/g,function(f){return f.toUpperCase();}));
});
