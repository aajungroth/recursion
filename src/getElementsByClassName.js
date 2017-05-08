// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  return $(document).ready(function() {
    var body = $(document).find(body);
    var nodeList = [];
    var getClassNodes = function(node, className) {
      //iterate through the children
        //recurse on the children
      //if the this node has the class
        //add it to the node list
    };

    getClassNodes(body, className);
    return nodeList;
  });
};
