var mod = require('../src/singly-linked-list.js');
var SinglyLinkedList = mod.SinglyLinkedList;
var expect = require('chai').expect;

describe('Singly Linked List', function() {
  it('should push properly', function() {
    var linkedList = new SinglyLinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    expect(linkedList.first.data).to.equal(1)
    expect(linkedList.first.next.data).to.equal(2)
    expect(linkedList.first.next.next.data).to.equal(3)
    expect(linkedList.last.data).to.equal(3)
  });
  it('should pop properly', function () {
    var linkedList = new SinglyLinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    expect(linkedList.last.data).to.equal(3);
    linkedList.pop();
    expect(linkedList.last.data).to.equal(2);
  });
  it('should find the kth to last element', function() {
    var linkedList = new SinglyLinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    expect(linkedList.findElementFromEnd(3).data).to.equal(2)
  });
  it('should remove a specific node', function() {
    var linkedList = new SinglyLinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    var nodeToRemove = linkedList.first.next;
    linkedList.remove(nodeToRemove);
    expect(linkedList.first.data).to.equal(1);
    expect(linkedList.first.next.data).to.equal(3);
  });
  it('should insert after a specific node', function() {
    var linkedList = new SinglyLinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    var nodeToInsertAfter = linkedList.first.next;
    linkedList.insertAfter(4, nodeToInsertAfter);
    expect(linkedList.first.next.data).to.equal(2);
    expect(linkedList.first.next.next.data).to.equal(4);
    expect(linkedList.first.next.next.next.data).to.equal(3);
  });
  it('should update the last property, if node is inserted after the tail', function() {
    var linkedList = new SinglyLinkedList();
    linkedList.push(1);
    linkedList.push(2);
    var nodeToInsertAfter = linkedList.first.next;
    linkedList.insertAfter(4, nodeToInsertAfter);
    expect(linkedList.first.next.data).to.equal(2);
    expect(linkedList.first.next.next.data).to.equal(4);
    expect(linkedList.last.data).to.equal(4);
  });
});