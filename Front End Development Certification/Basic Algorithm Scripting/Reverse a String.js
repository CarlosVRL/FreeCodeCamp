/**
  * The Reverse a String function simply returns
  * the reversed order of the original string.
  *
  * @author Carlos Varela
  * @version 1.0
  * @since 2017-03-27
  *
  */

function reverseString(str) {

	// var splitString = [];
	// var reverseStringArray = [];

	// Split str (input) into an array between each character
	//splitString = str.split('');

	// Reverse array object
	//reverseStringArray = splitString.reverse();

	// Join array (characters) & return
	//return reverseStringArray.join('');

	// A compact way to accomplish the same
	return str.split('').reverse().join('');

}