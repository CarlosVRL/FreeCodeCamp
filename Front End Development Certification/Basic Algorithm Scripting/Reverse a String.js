/**
  * The Reverse a String routine implements an
  * application that simply returns the reverse
  * order of the original string.
  *
  * @author Carlos Varela
  * @version 1.0
  * @since 2017-03-27
  *
  */

function reverseString(str) {

	// Split input str into an array between characters
	splitString = str.split('');

	// Reverse array object
	reverseStringArray = splitString.reverse();

	// Join array (characters) & return
	return reverseStringArray.join('');

}