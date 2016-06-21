var mod = require('../src/doubly-linked-list.js');
var LinkedList = mod.DoublyLinkedList;
var expect = require('chai').expect;

describe('Linked List', function() {
  it('should push properly', function() {
    var linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    expect(linkedList.first.data).to.equal(1)
    expect(linkedList.first.next.data).to.equal(2)
    expect(linkedList.first.next.next.data).to.equal(3)
    expect(linkedList.last.data).to.equal(3)
  });

  it('should pop properly', function() {
    var linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.pop();
    expect(linkedList.last.data).to.equal(2);
    expect(linkedList.last.next).to.not.exist;
  });

  it('should unshift properly', function() {
    var linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.unshift(3);
    expect(linkedList.first.data).to.equal(3)
    expect(linkedList.first.next.data).to.equal(1)
    expect(linkedList.first.next.next.data).to.equal(2)
    expect(linkedList.last.data).to.equal(2)
  });

  it('should remove the duplicates', function() {
    var linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(2);
    linkedList.push(4);
    linkedList.push(3);
    linkedList.push(2);
    linkedList.removeDuplicates();
    expect(linkedList.first.data).to.equal(1);
    expect(linkedList.first.next.data).to.equal(2);
    expect(linkedList.first.next.next.data).to.equal(4);
    expect(linkedList.first.next.next.next.data).to.equal(3);
    expect(linkedList.last.data).to.equal(3)
  });

  it('should remove the duplicates', function() {
    var linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(1);
    linkedList.removeDuplicates();
    expect(linkedList.first.data).to.equal(1);
    expect(linkedList.first.next).to.not.exist;
  });
});