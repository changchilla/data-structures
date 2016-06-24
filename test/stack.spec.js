var mod = require('../src/stack.js');
var Stack = mod.Stack;
var expect = require('chai').expect;

describe('Stack', function() {
  it('should push values to the top of the stack', function() {
    var stack = new Stack();
    stack.push(1);
    expect(stack.top.data).to.equal(1);
    expect(stack.top.next).to.not.exist;
  })
  it.only('should pop values from the top of the stack', function() {
    var stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.top.data).to.equal(2);
    stack.pop();
    expect(stack.top.data).to.equal(1);
  })
});