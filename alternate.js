module.exports.names = ['Mabel', 'Miracle', 'Ikenna', 'Kosala']

const persons = {
	name: 'Hero',
	age: 29,
	adress: '78 Kaiahili street'
}

module.exports.personal = persons

function addValue(num1, num2){
	console.log(`the sum of ${num1} and ${num2} is ${num1 + num2}`);
}

addValue(3, 4)