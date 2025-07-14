//Ask for the user's name
const userName=prompt("What's uour name?");

//Greet using alert
alert("Hello"+userName+"!");

//Greet b changing text on the page
const heading=document.getElementById("greeting");
heading.innerText="Hello,"+userName+"!";
