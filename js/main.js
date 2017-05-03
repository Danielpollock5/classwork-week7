var classWork = "this is a string"
document.getElementById('classwork').innerHTML = classWork

 var idk = "more strings please"
 document.getElementById('idk').textContent = idk

 function getInfo(){
 	 var userInput = document.getElementById("derping").value
 	 console.log(userInput)
 }
 var array = [1, 2, 3, 4, 5]
 for (var i = 0; i < array.length; i++) {
 	console.log(i)
 }

 var meObj = {
 	name: "danny",
 	age: "27",
 	brain: "hurts"
 }
 console.log("My name is " + meObj.name)
 console.log("My age is " + meObj.age)
 console.log("My brain " + meObj.brain)

var catArray = [
{
	name: "meepins",
	weight: "really fat",
	owner: "My wife and I"
},
{
	name: "russell",
	weight: "skinny",
	owner: "Cameron"
},
{
	name: "nari",
	weight: "panther",
	owner: "miggy?"
}
]
for (var i = 0; i < catArray.length; i++) {

console.log("my name is " + catArray[i].name + " and my owner is " + catArray[i].owner)
}