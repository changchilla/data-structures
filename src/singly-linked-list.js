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

  exports.SinglyLinkedList.prototype.pop = function() {
    var temp = this.first;
    if (!temp) {
      throw new Error('No node to remove');
    }
    while(temp.next !== this.last) {
      temp = temp.next;
    }
    temp.next = null;
    this.last = temp;
  };

  exports.SinglyLinkedList.prototype.remove = function(node) {
    if(!node){
      return false;
    }
    var temp = this.first;
    if(temp === node) {
      this.first = this.first.next;
      return true;
    }
    if (!temp) {
      throw new Error('No node to remove');
    }
    while(temp.next !== node) {
      temp = temp.next;
    }
    temp.next = temp.next.next;
    if(node === this.last) {
      this.last = temp;
    }
    return true;
  };

  exports.SinglyLinkedList.prototype.removeHead = function() {
    if(!this.first){
      throw new Error('No node to remove');
    }
    this.first = this.first.next;
  };

  exports.SinglyLinkedList.prototype.insertAfter = function(data, nodeToInsertAfter) {
    var temp = this.first;
    var newNode = new exports.Node(data);
    if(!temp){
      throw new Error('No nodes exist');
    }
    while(temp !== nodeToInsertAfter) {
      temp = temp.next;
    }
    newNode.next = temp.next;
    temp.next = newNode;
    if(temp === this.last){
      this.last = newNode;
    }
  };
  
  exports.SinglyLinkedList.prototype.findMToLastElement = function(m) {
    var current = this.first;
    for(var i=0; i<m; i++){
     if(current.next){
       current = current.next;
     }
    }
    var mBehind = this.first;
    while(current.next){
      current = current.next;
      mBehind = mBehind.next;
    }
    return mBehind;
  };
  // more inefficient than above
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
  };
  
  exports.SinglyLinkedList.prototype.deleteStack = function(){
    
  }
})(module.exports)