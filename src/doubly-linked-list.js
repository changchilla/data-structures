(function (exports) {
  exports.Node = function (data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  };
  exports.DoublyLinkedList = function () {
    this.first = null;
    this.last = null;
  };

  // add data to the end of a linked list
  exports.DoublyLinkedList.prototype.push = function (data) {
    var node = new exports.Node(data);
    if (this.first === null) {
      this.first = this.last = node;
    } else {
      var temp = this.last;
      this.last = node;
      node.prev = temp;
      temp.next = node;
    }
  };

  // remove data from end of a linked list
  exports.DoublyLinkedList.prototype.pop = function () {
    var temp = this.last;
    if(!temp) {
      throw new Error('No node to remove');
    } else if (this.last === this.first) {
      this.last = this.first = null;
      return this.last;
    } else {
      this.last.prev.next = null;
      this.last = this.last.prev;
      return this.last;
    }
  };
  // add data to the beginning of a linked list
  exports.DoublyLinkedList.prototype.unshift = function (data) {
    var node = new exports.Node(data);
    if (this.first === null) {
      this.first = this.last = node;
    } else {
      var temp = this.first;
      this.first = node;
      node.next = temp;
      temp.prev = node;
    }
  };

  // remove duplicates from a linked list.
  exports.DoublyLinkedList.prototype.removeDuplicates = function () {
    if (this.first === null) {
      return false;
    }
    var temp = this.first;
    var next;
    var prev;
    var hash = {};
    while (temp) {
      if (!hash[temp.data]) {
        hash[temp.data] = true;
      } else {
        next = temp.next;
        prev = temp.prev;
        if (next) {
          next.prev = prev;
        }
        if (prev) {
          prev.next = next;
        }
        if (temp === this.last) {
          this.last = prev;
        }
      }
      temp = temp.next;
    }
    return true;
  };

  // making a multi level doubly linked list, can add children to a specific node
  // assuming you can only have one child per node
  exports.DoublyLinkedList.prototype.addChild = function(childLinkedList, node) {
    if(node.child) {
      throw new Error('a child already exists for this node')
    }
    node.child = childLinkedList;
  };

  exports.DoublyLinkedList.prototype.flatten = function() {
    var temp = this.first;
    while(this.last !== temp || (this.last === temp && this.last.child)) {
      // if there's children, append them to the end of the linked list and update tail
      if(temp.child) {
        this.last.next = temp.child.first;
        temp.child.first.prev = this.last;
        this.last = temp.child.last;
      }
      temp = temp.next;
    }
  };
  
  exports.DoublyLinkedList.prototype.unflatten = function() {
    // from end to front, if it's a child remove the previous reference to this value, update this.last
    temp = this.last;
    while(temp !== this.first) {
      if(temp.child){
        this.last = temp.child.first.prev;
        this.last.next = null;
        temp.child.first.prev = null;
      }
      temp = temp.prev;
    }
  };

})(module.exports);