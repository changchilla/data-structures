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

  it('should add a child to a node of a doubly linked list', function() {
    var firstLevelLinkedList = new LinkedList();
    firstLevelLinkedList.push(1);
    firstLevelLinkedList.push(2);
    firstLevelLinkedList.push(3);
    var secondLevelLinkedList = new LinkedList();
    secondLevelLinkedList.push(4);
    secondLevelLinkedList.push(5);

    firstLevelLinkedList.addChild(secondLevelLinkedList, firstLevelLinkedList.first);
    firstLevelLinkedList.flatten();
    expect(firstLevelLinkedList.first.data).to.equal(1);
    expect(firstLevelLinkedList.last.data).to.equal(5);
  });

  it('should flatten a multilevel doubly linked list', function() {
    var firstLevelLinkedList = new LinkedList();
    firstLevelLinkedList.push(1);
    firstLevelLinkedList.push(2);
    firstLevelLinkedList.push(3);
    var secondLevelLinkedList = new LinkedList();
    secondLevelLinkedList.push(4);
    secondLevelLinkedList.push(5);
    firstLevelLinkedList.addChild(secondLevelLinkedList, firstLevelLinkedList.last);
    firstLevelLinkedList.flatten();
    expect(firstLevelLinkedList.first.data).to.equal(1);
    expect(firstLevelLinkedList.last.data).to.equal(5);
  });

  it('should unflatten a flattened linked list', function() {
    var firstLevelLinkedList = new LinkedList();
    firstLevelLinkedList.push(1);
    firstLevelLinkedList.push(2);
    firstLevelLinkedList.push(3);
    var secondLevelLinkedList = new LinkedList();
    secondLevelLinkedList.push(4);
    secondLevelLinkedList.push(5);
    var secondLevelLinkedList2 = new LinkedList();
    secondLevelLinkedList2.push(6);
    secondLevelLinkedList2.push(7);

    firstLevelLinkedList.addChild(secondLevelLinkedList, firstLevelLinkedList.last);
    firstLevelLinkedList.addChild(secondLevelLinkedList2, firstLevelLinkedList.first.next);
    firstLevelLinkedList.flatten();
    expect(firstLevelLinkedList.first.data).to.equal(1);
    expect(firstLevelLinkedList.last.data).to.equal(5);
    firstLevelLinkedList.unflatten();
    expect(firstLevelLinkedList.first.data).to.equal(1);
    expect(firstLevelLinkedList.last.data).to.equal(3);
  });
});