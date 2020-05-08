
//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

//Create a function called addMoreDucks that takes in an array
//and if the array's length is greater than 4, replace the
//3rd element of the array with the string '42 ducks'. 
//addMoreDucks should return the array.

//Code here
function addMoreDucks(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 4) {
            arr[2] = "42 ducks";
        }
    }
    return arr;
}


//////////////////PROBLEM 2////////////////////

//Create a function called cutItOut that takes in an array
//and if the array's length is greater than 4, removes 
//the 3rd element of the array. cutItOut should return the array.

//Code here
Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
  };

function cutItOut(arr) {
    for(let i = 0; i < arr.length; i++) {                                      //WORK IN PROGRESS
        console.log(arr);
        if(arr[i] > 4) {
            console.log(arr[i]);
            arr.remove(2);
        }
    }
    return arr;
}


//////////////////PROBLEM 3////////////////////

//Create a function called changeName that takes in an array
//and finds the element "Tolkn", and changes it to "Tolkien".
//changeName should return the array.

//Code here
function changeName(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "Tolkn") {
            arr[i] = "Tolkien";
        }
    }
    return arr;
}
