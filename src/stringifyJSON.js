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
  var returnedString = '';

  if (arguments[1] !=== undefined) {
    stringifiedObject = arguments[1];
  }

  //base cases
  if ((objectType === 'number') || (objectType === 'boolean')
    || (objectType === 'null')) {
    return obj.toString();
  } else if (objectType === 'string') {
    return obj;
  }

  //terminating cases
  if ((objectType === 'function') || (objectType === 'undefined')) {
    return null;
  }

  //recursive cases
  if (Array.isArray(obj) === true) {
    if (obj.length === 0) {
      return '[]';
    }
    else
      stringifiedObject += '['
      for (var i = 0; i < obj.length; i++) {
        returnedString = stringifyJSON(obj, stringifiedObject);
        if (returnedString === null) {
          stringifiedObject += returnedString.toString();
        } else {
          stringifiedObject += retunredString;
        }
        if (i < obj.length - 1) {
          stingifiedObject += ',';
        }
      }
      stringifiedObject += ']'
      return stringifiedObject;
  } else if (objectType === 'object') {
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
  }
  return stringifiedObject;
};
