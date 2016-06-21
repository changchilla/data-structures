(function(exports){
  exports.Node = function(data) {
    this.data = data;
    this.next = null;
  };
  exports.SinglyLinkedList = function() {
    this.first = null;
    this.last = null;
  };
  exports.SinglyLinkedList.prototype.push = function(data) {
    var node = new exports.Node(data);
    if(this.first === null) {
      this.first = this.last = node;
    } else {
      var temp = this.last;
      this.last = node;
      temp.next = node;
    };
  };
  // find the kth to last element of a linked list
  exports.SinglyLinkedList.prototype.findElementFromEnd = function(index) {
    if(this.first === null) {
      return null;
    }
    var current = this.first;
    var stack = [];
    while(current) {
      stack.push(current)
      current = current.next;
    }
    if(stack.length <= index) {
      return null;
    }
    return stack[stack.length - index];
  }
})(module.exports)