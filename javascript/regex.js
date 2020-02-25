var result = document.querySelector('#result');
var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  checkPhoneNumber(this.phone.value);
});

function checkPhoneNumber(phoneNo) {
  var phoneRE = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/;
  if (phoneNo.match(phoneRE)) {
    result.innerHTML = 'The phone number is <strong>valid!</strong>';
  } else {
    result.innerHTML = 'The phone number is <strong>invalid!</strong>';
  }
}

// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// ##########################
// # Higher-Order Functions #
// ##########################


// Challenge 1
const addTwo = (num) => {
	return num + 2
};

// To check if you've completed this function, uncomment these console.logs!
 console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
const addS = (word) => {
	return word + 's'
};

// Uncomment these to check your work
 console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
const map = (array, callback) => {
  let newArray = []
	for (let i =0; i < array.length; i++){
    newArray.push(callback(array[i]))
  }
  return newArray

};

 console.log(map([1, 2, 3], addTwo));


// Challenge 4
const forEach = (array, callback) => {
  
  for (let i=0; i < array.length; i++){
    callback(array[i])
  }

};

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, char => alphabet += char);
console.log(alphabet);   //prints 'abcd'
// See for yourself if your forEach works!



// Challenge 5
const mapWith = (array, callback) => {
	let newArray =[]
  array.forEach(element => newArray.push(callback(element)))
  return newArray
  
};

console.log(mapWith([1, 2, 3], addTwo));


// Challenge 6
const reduce = (array, callback, initialValue) => {
	
  let acc = initialValue
  let count = 0
  
  for(let i = 0; i <array.length; i++){
      acc += callback(count,array[i])
  }
  
  return acc

};
