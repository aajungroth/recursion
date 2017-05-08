// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
    var body = document.body;
    var nodeList = [];

    var classInList = function(classList, className) {
      if(classList === undefined) {
        return false;
      }
      for (var i = 0; i < classList.length; i++) {
        if (classList[i] === className) {
          return true;
        }
      }
      return false;
    };

    var getClassNodes = function(node, className) {
      //if the this node has the class in its list of classes
      if (classInList(node.classList, className)) {
        //add it to the node list
        nodeList.push(node);
      }
      //iterate through the children
      if (node.hasChildNodes() === true) {
        for (var i = 0; i < node.childNodes.length; i++) {
          //recurse on the children
          getClassNodes(node.childNodes[i], className);
        }
      }
    };

    getClassNodes(body, className);
    return nodeList;
};
