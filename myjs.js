

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




runNow2 = (newColor) => {
	const x = document.getElementById("pogo");
	x.style.fontSize = "100px";
	x.style.textDecoration = "underline";
	for (i=0; i<1000; i++) {
		console.log(i);
	}
}


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
};