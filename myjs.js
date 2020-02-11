

function addNums(num1, num2) {
	return num1 + num2;
}

const multNums = (num1, num2) => {
	return num1 * num2;
}

console.log(addNums(9, 5));
console.log(multNums(9, 5));

const cat = {
	tail: false,
	paws: 4,
	talk: function() {
		return ('meow, I have ' + this.paws + ' paws');
	}
}

if (cat.tail) {
	console.log('cats have tails')
	}else{
	console.log('no tail')};
	
console.log(cat.talk());

function getColor() {
	runNow2(value);
}

function runNow(newColor) {
	const x = document.getElementById("pogo");
	x.style.color = newColor;
	x.style.fontSize = "42px";
	x.style.textDecoration = "underline";
}

runNow2 = (newColor) => {
	const x = document.getElementById("pogo");
	x.style.color = newColor;
	x.style.fontSize = "100px";
	x.style.textDecoration = "underline";
}


