// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
/*
Use .toString() for numbers, booleans and nulls
Return strings as they are, test for strings
Ignore functions by testing for functions with typeof equals function
Ingore undefined
test for arrays recurse on the elements test is array with Array.isArray()
test for objects recurse on the elements test type is object with typeof equals object
*/
//input any kind of object, string, number, boolean, array, function, object, etc.
//output everything that can be converted to a string returned as a string
  //this includes [], {}, :, ',', etc.
//procedure determine the type of the obj received, if its and object or an array,
  //recurses on the elements
var stringifyJSON = function(obj) {
  // your code goes here
  var objectType = typeof obj;
  //passed internally as a second argument
  var stringifiedObject = '';
  //if stringifiedObject is not undefined
    //update stringifiedObject

  //base cases
  //if its a number
    //return stringify
  //if its a boolean
    //return stringify
  //if its a string
    //return the string
  //if its a null
    //return stringify

  //terminating cases
  //if its a function
    //return error null
  //if its an undefined
    //return error null

  //if its an array
    //if its an empty array
      //base case return array literal '[]'
    //else
      //add a '['
      //iterate on the elements
        //recurses on all elements
        //if the return is null
          //add null to the string
        //else
          //add the element to the string
        //if its not the last element
          //add comma
      //add a ']'
      //return the stringified array


  //if its an object
    //if its an empty object
      //base case return object literal '{}'
    //else
      //add a '{'
      //iterate on all elements
        //if its not the first key-value pair
            //add a comma
        //else
          //set a bool for first pass to true
        //recurses on all values
        //if the value is null
          //skip that key value pair
        //else
          //get the key
          //add a :
          //add the stringified value
      //add a '}'
    //return the stringified object
  return stringifiedObject;
};
