//Q1 is a sting
//q2 is a number
//q3 is a string array
//q4 boolean
//q6 array
//q7 sting
//q8 boolean
//q9 mixed array
//========4. Concatenation==
//Hello my name is 'danny'
//120
//1010ten
//5- if else/elseif
//5.1 num4 is greater that 1
//5.2 else statement ran
//5.3 else if statement ran
//5.4 else if statement ran
// 6. for loop
//thisisanarrayofstrings
//25 but how??
//11, 33, 55, 77, 99
//functions
// else, if, if
// else, else if, else
// make the more complicated rule on top!!!!!!
for(i = 1; i <= 100; i = i+1) {
	// if its divisable by 3 and 5 doing the following code
	if (i % 3 == 0 && i % 5 == 0) {
		console.log("fizzbuzz")
	// if its divisable by 5 then do this....'buzz'
	} else if (i % 5 == 0) {
		console.log("buzz")
	// if its divisable by 3 then do this...fizzzz
	} else if (i % 3 == 0) {
		console.log("fizz")
	// print
	} else {
		console.log(i)
	}
}