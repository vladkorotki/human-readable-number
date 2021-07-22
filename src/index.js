let smallNumbers = {
	0: '',
	1: 'one',
	2: 'two',
	3: 'three',
	4: 'four',
	5: 'five',
	6: 'six',
	7: 'seven',
	8: 'eight',
	9: 'nine',
	10: 'ten',
	11: 'eleven',
	12: 'twelve',
	13: 'thirteen',
	14: 'fourteen',
	15: 'fifteen',
	16: 'sixteen',
	17: 'seventeen',
	18: 'eighteen',
	19: 'nineteen',
};
let middleNumbers = {
	1: 'ten',
	2: 'twenty',
	3: 'thirty',
	4: 'forty',
	5: 'fifty',
	6: 'sixty',
	7: 'seventy',
	8: 'eighty',
	9: 'ninety',
}
module.exports = function toReadable(number) {
	if (number === 0) return 'zero';
	let result = '';
	let stringNumber = number.toString();
	let numberToArray = stringNumber.split('');
	let lastIndex = numberToArray.length - 1;
	let handreds = 'hundred';
	if (numberToArray.length === 3) {
		result = `${smallNumbers[+numberToArray[lastIndex - 2]]} ${handreds} ${middleNumbers[+numberToArray[lastIndex - 1]]} ${smallNumbers[+numberToArray[lastIndex]]}`
		if (+numberToArray[lastIndex - 1] === 1) {
			result = `${smallNumbers[+numberToArray[lastIndex - 2]]} ${handreds} ${smallNumbers[+(numberToArray[lastIndex - 1] + numberToArray[lastIndex])]}`;
		}
		if (+numberToArray[lastIndex - 1] === 0) {
			result = `${smallNumbers[+numberToArray[lastIndex - 2]]} ${handreds} ${smallNumbers[+numberToArray[lastIndex]]}`;
		}
		if (+numberToArray[lastIndex] === 0) {
			result = `${smallNumbers[+numberToArray[lastIndex - 2]]} ${handreds} ${middleNumbers[+numberToArray[lastIndex - 1]]}`;
		}
		if (+numberToArray[lastIndex - 1] === 0 && +numberToArray[lastIndex] === 0) {
			result = `${smallNumbers[+numberToArray[lastIndex - 2]]} ${handreds}`;
		}
	}

	if (numberToArray.length === 2) {
		result = `${middleNumbers[+numberToArray[lastIndex - 1]]} ${smallNumbers[+numberToArray[lastIndex]]}`
		if (+numberToArray[lastIndex - 1] === 1) {
			result = `${smallNumbers[+(numberToArray[lastIndex - 1] + numberToArray[lastIndex])]}`;
		}
		if (+numberToArray[lastIndex - 1] === 0) {
			result = `${smallNumbers[+numberToArray[lastIndex]]}`;
		}
		if (+numberToArray[lastIndex] === 0) {
			result = `${middleNumbers[+numberToArray[lastIndex - 1]]}`;
		}

	}
	if (numberToArray.length === 1) {
		result = smallNumbers[number];
	}

	return result;

}
