// student Name=uzma imran : assignment asigned by sir humza alvi & miss manaheel

// Q#01:create an array named fruits that contains the following string elements..
// apple , banana, mango orange.

const fruits =["apple", "banana","mango","orange"]
console.log(fruits);

// Q#2:declare an array named number that can contains only number element 
// and initialize it with the value of 10,20,30 and 40

const number = [10,20,30,40];
console.log(number);

//Q#3 access the third element of the fruit array ans assign it to a variable named third fruit....

const thirdfruits = fruits[2];
console.log(fruits[2]);

// Q#4 change the second element of the number array to 25

number[1] = 25;
console.log(number)

// Q#5: add the element of "grape " at the end of the fruit array using the method


// in array .push() method add new element at the end of an array, lets see

fruits.push("grape");
console.log(fruits);


// Q#06: remove the last element of fruit array using the method and assign it to a variable named last fruit.

// ans: .pop () method is used to remove a last element of an array so here grape will be remove

const lastFruit = fruits.pop();        //assigned it to a variable lastfruit
console.log(fruits);                  //grape will be remove becouse it was the last element of array


// Q#07: remove the first element from the fruit array using the method and assign it to a variable named firstfruit.

// Ans: i will use here .shift () method to remove the first element of the array....lets see

const firstfruit = fruits.shift();    // assign it a variable named firstfruits
console.log(fruits);                 // apple will be delet becouse it was the first element of array.


// Q#08: add the element "kiwi" to the begning of the fruit array using method.

// Ans: .unshift() method always used to add an element in the begning of the array lets see

fruits.unshift("kiwi");
console.log(fruits);  // kiwi will be add at the begning of the array ["kiwi","banana","mango","orange"]


// Q#09: remove two element of a fruit array starting from index 1 using the method.

// ans: m gonna used .splice () method to add 2 element in the middle of an array

fruits.splice(1,2);
console.log(fruits); //["kiwi","orange"] will be here becouse index 1 and 2 has been deleted successfully.

//Q#10: insert the element "pineapple" & "pear" at index 2 of fruits array using method.

fruits.splice(2,0,"pineapple","pear");
console.log(fruits);  //["kivi","orange","pineapple","pear"] is the answer after adding 2 element at index 2


// Q#11: create a new array named citrusfruits that contains the first two element of the fruit array using the method

// ans: .slice () will provide the new array

const citrusfruits = fruits.slice(0,2);
console.log("first two element",citrusfruits);  // it will show just["kive","orange"] the first 2 element of the array

// Q#12: create a new array named lasttwofruits that contains the last two element of the fruit array using method

// ans:again i am using .slice()


const lasrTwoFruit = fruits.slice(-2);
console.log("last two fruit",lasrTwoFruit);























