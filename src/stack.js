// Stack is a data type/collection where main operations are addition of an item (push) and removal (pop).
// Implements LIFO (last in first out) which means last element added should be the first one to be removed.
// Implemented below using linked list

(function(exports){
  function Node(data){
    this.data = data;
    this.next = null;
  }

  exports.Stack = function(){
    this.top = null;
  };

  exports.Stack.prototype.push = function(data) {
    var node = new Node(data);
    var temp = this.top;
    if(!temp) {
      this.top = node;
    } else {
      this.top = node;
      this.top.next = temp;
    }
  };
  exports.Stack.prototype.pop = function(){
    var newTop = this.top.next;
    if(this.top) {
      var popData = this.top.data;
      this.top = newTop;
      return popData;
    }
    return;
  };

})(module.exports)


