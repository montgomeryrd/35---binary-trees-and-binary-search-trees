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

        it('should return the 1st value using In Order Traversal', () => {
            expect(binaryTree.inOrder[0]).toEqual(6);
        })

        it('should return the 5th value using In Order Traversal', () => {
            expect(binaryTree.inOrder[5]).toEqual(1);
        });

        it('should return the 4th node value', () => {
            expect(binaryTree.inOrder[4]).toEqual(2);
        });

        it('should return the last value of my binary tree', () => {
            expect(binaryTree.inOrder[8]).toEqual(5);
        });
        
        it('should return the length of my tree', () => {
            expect(binaryTree.inOrder.length).toEqual(9);
        });
        
        it('should return all values using In Order Traversal', () => {
            expect(binaryTree.inOrder).toEqual([6, 8, 7, 9, 2, 1, 4, 3, 5]);
        });
    });

    describe('Pre Order Traversal Method', () => {

        binaryTree.preOrderTraversal();

        it('should return the root of the tree', () => {
            expect(binaryTree.root.value).toEqual(1);
        });

        it('should return the 1st value using In Order Traversal', () => {
            expect(binaryTree.preOrder[0]).toEqual(1);
        })

        it('should return the 5th value using In Order Traversal', () => {
            expect(binaryTree.preOrder[5]).toEqual(9);
        });

        it('should return the 4th node value', () => {
            expect(binaryTree.preOrder[4]).toEqual(8);
        });

        it('should return the last value of my binary tree', () => {
            expect(binaryTree.preOrder[8]).toEqual(5);
        });
        
        it('should return the length of my tree', () => {
            expect(binaryTree.preOrder.length).toEqual(9);
        });
        
        it('should return all values using In Order Traversal', () => {
            expect(binaryTree.preOrder).toEqual([1, 2, 6, 7, 8, 9, 3, 4, 5]);
        });
    });

    describe('Post Order Traversal Method', () => {

        binaryTree.postOrderTraversal();

        it('should return the root of the tree', () => {
            expect(binaryTree.root.value).toEqual(1);
        });

        it('should return the 1st value using In Order Traversal', () => {
            expect(binaryTree.postOrder[0]).toEqual(8);
        })

        it('should return the 5th value using In Order Traversal', () => {
            expect(binaryTree.postOrder[5]).toEqual(4);
        });

        it('should return the 4th node value', () => {
            expect(binaryTree.postOrder[4]).toEqual(2);
        });

        it('should return the last value of my binary tree', () => {
            expect(binaryTree.postOrder[8]).toEqual(1);
        });
        
        it('should return the length of my tree', () => {
            expect(binaryTree.postOrder.length).toEqual(9);
        });
        
        it('should return all values using In Order Traversal', () => {
            expect(binaryTree.postOrder).toEqual([8, 9, 7, 6, 2, 4, 5, 3, 1]);
        });
    });
});