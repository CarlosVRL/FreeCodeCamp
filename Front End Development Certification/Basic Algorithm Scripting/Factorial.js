/**
  * Returns the factorial of an number (assumes
  * integer). The factorial of 0 defined as 1.
  *
  * @author Carlos Varela
  * @version 1.0
  * @since 2017-03-27
  */

function factorialize(num) {

	// 0-case
	if (num === 0) return 1;

	// Initialization
	var product = 1;

	// Recursive product
	for ( let i = 1; i <= num; i++ ) {
		product *= i;
	}

	return product;

}
