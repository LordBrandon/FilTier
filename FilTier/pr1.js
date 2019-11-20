// JavaScript Document
var ninja = {
	eyes:"", 
	hair:"",
	clothes:"",
	swordlength:"",
	name:"",
	};

 ninja.eyes= prompt("eye color");
 ninja.hair= prompt("hair color");
 ninja.clothes= prompt("color of clothes");
 ninja.swordlength= prompt("length of sword");
 ninja.name= prompt("Name of ninja");

 document.getElementById("ninjaP").innerHTML=("Your Ninja's name is " + ninja.name + " his/her eye color is " + ninja.eyes + " and his/her hair color is " + ninja.hair + " The ninja's sword length is  " + ninja.swordlength);
	 
} 
var Y = document.getElementById("kickAudio"); 
function kickAudio() {Y.play();} 
