// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
/*
Use '' + for numbers
Use strings for booleans and nulls
Return strings surrounded by "", test for strings
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
var stringifyJSON = function stringify(obj) {
  // your code goes here
  var objectType = typeof obj;
  var stringifiedObject = '';
  var returnedString = '';
  //for adding commas to an object
  var firstPass = true;

  //base cases
  if (objectType === 'number') {
    return obj + '';
  } else if (objectType === 'boolean') {
    if (obj) {
      return 'true';
    } else {
      return 'false';
    }
  } else if (obj === null) {
    return 'null';
  } else if (objectType === 'string') {
    return '"' + obj + '"';
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
    else {
      stringifiedObject += '['
      for (var i = 0; i < obj.length; i++) {
        returnedString = stringifyJSON(obj[i]);
        if (returnedString === null) {
          stringifiedObject += 'null';
        } else {
          stringifiedObject += returnedString;
        }
        if (i < obj.length - 1) {
          stringifiedObject += ',';
        }
      }
      stringifiedObject += ']'
      return stringifiedObject;
    }
  } else if (objectType === 'object') {
    stringifiedObject += '{';
    for (var key in obj) {
      returnedString = stringifyJSON(obj[key]);
      if (returnedString !== null) {
        if (firstPass === true) {
          firstPass = false;
        }
        else {
          stringifiedObject += ',';
        }
        stringifiedObject += '"' + key + '"';
        stringifiedObject += ':';
        stringifiedObject += returnedString;
      }
    }
    stringifiedObject += '}';
    return stringifiedObject;
  }
  return stringifiedObject;
};
