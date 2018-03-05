'use strict';

const BinaryTree = require('../lib/binary-tree').BinaryTree;
const TreeNode = require('../lib/binary-tree').TreeNode;
require('jest');

describe('Binary Tree(BT)', () => {

    let one = new TreeNode(1);
    let two = new TreeNode(2);
    let three = new TreeNode(3);
    let four = new TreeNode(4);
    let five = new TreeNode(5);
    let six = new TreeNode(6);
    let seven = new TreeNode(7);
    let eight = new TreeNode(8);
    let nine = new TreeNode(9);
    
    let binaryTree = new BinaryTree();
    binaryTree.root = one;
    
    one.left = two;
    one.right = three;
    
    two.left = six;
    
    three.left = four;
    three.right = five;
    
    six.right = seven;
    
    seven.left = eight;
    seven.right = nine;

    describe('In Order Traversal Method', () => {

        binaryTree.inOrderTraversal();

        it('should return the root of the tree', () => {
            expect(binaryTree.root.value).toEqual(1);
        });
    });
});