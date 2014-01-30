// create a namespace for our iterator functions
var Iterators = (function() {
  return {
    each: function (arr, action) {

       for (var i = 0; i < arr.length; i++){
        action(arr[i]);
       }
       return arr;
     },


    map: function (arr, action) {
       var new_arr = [];
       var i = 0;
       Iterators.each(arr, function(x){ 
        new_arr[i] = action(x);
          i++;
        }
      return new_arr;
    },
      // implement map iterator
      // such that action is applied
      // to each element on the array
      // returning a new array containing
      // the results of the applications
    
    reduce: function(arr, base, action) {
      answer = action(base);
      Iterators.each(arr, function(x){
       answer = action (action(x))});
      return answer;
   }
   }()();

   //another way to implement the function map(:
    //new_arr = [];
   // Iterators.each(arr, functions(x) {
   // new_arr.push(action(x));
   // return result;
   //},   



//let's say the array is [1,2,3] the base is 4, the action times answer = action base action()
// declare the array
var arr = [1,2,3];

// should output
// 1
// 2
// 3
console.log("results of applying Iterators.each to arr:");
Iterators.each(arr, function (number) {
  console.log(number);
});

// should output
// => [1,2,3]
console.log("applying Iterators.each to arr should return the array:");
Iterators.each(arr, function (number) {
});

// should output
// [2, 4, 6]
console.log("results of applying Iterators.map to arr:");
console.log(
  Iterators.map(arr, function (number) {
    return number * 2;
  })
);

// should output
// false to indicate that the array returned
// by map is a different object than the array
// that had been passed in
console.log("arr and the array returned by map are identical:");
console.log(
  arr === Iterators.map(arr, function (number) {
    return number * 2;
  })
);

// should output arr's contents to indicate that map did not 
// modify the original array's contents
console.log("arr's contents:");
console.log(arr);

// BONUS: should output the sum
console.log("result of applying Iterators.reduce to arr with a sum function:");
console.log(
  Iterators.reduce(arr, 0, function (a, b) {
    return a + b;
  })
);

var Iterators = (function(){ return "Hello World"})()  ;
//var Iterators is now just the string 'Hello World'
//var student = { name: "Alex", age:  30};
//console.log(student.name);

//Iterators.each(..) is giving us the function each



