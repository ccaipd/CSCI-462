// This is a test case that checks if name is valid and returns a string
// safeName()
// input: foobBar'
// output: 'Is safe name'

/**************************TEST CASE 1******************************/

function test_safeName () {
	var varDB = new Blockly.Names('window,door');
	assertEquals('Is Safe Name', 'fooBar', varDB.safeName_('fooBar'));
}

/**************************FAULT INJECTION 1*****************************

function test_safeName_ () {
	var varDB = new Blockly.Names('window;door');
	assertNull('Is Safe Name', 'fooBar', varDB.safeName_('fooBar'));
}
*/
