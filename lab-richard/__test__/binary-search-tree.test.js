'use strict';

const BST = require('../lib/binary-search-tree').BST;
const TreeNode = require('../lib/binary-search-tree').TreeNode;
require('jest');

describe('Binary Search Tree(BST)', () => {

    let one = new BST();
    one.insert(new TreeNode(5));
    one.insert(new TreeNode(8));
    one.insert(new TreeNode(3));
    one.insert(new TreeNode(10));
    one.insert(new TreeNode(6));

    let _one = new BST();
    _one.root = new TreeNode(5);
    _one._insert(_one.root, new TreeNode(8));
    _one._insert(_one.root, new TreeNode(3));
    _one._insert(_one.root, new TreeNode(10));
    _one._insert(_one.root, new TreeNode(6));
   
    describe('#insert', () => {

        it('should have a root of 5', () => {
            expect(one.root.value).toEqual(5);
            expect(_one.root.value).toEqual(5);
        });

        it('should have a left value of 3', () => {
            expect(one.root.left.value).toEqual(3);
            expect(_one.root.left.value).toEqual(3);
        });

        it('should have a right node with a value of 8', () => {
            expect(one.root.right.value).toEqual(8);
            expect(_one.root.right.value).toEqual(8);
        });

        it('should have a right node with a value of 10', () => {
            expect(one.root.right.right.value).toEqual(10);
            expect(_one.root.right.right.value).toEqual(10);
        });
    });

    describe('#find', () => {

        it('should have a root of 5', () => {
            expect(one.find(5).value).toEqual(5);
            expect(_one._find(_one.root, 5).value).toEqual(5);
        });

        it('should return null because it does not exist!', () => {
            expect(one.find(99)).toBeNull();
        });
    });

    describe('#isBalanced', () => {

        it('should return true since root is null', () => {
            expect(new BST().isBalanced()).toBeNull();
        });

        it('should return false due to the tree being unbalanced', () => {
            expect(one.isBalanced()).toEqual(false);
            expect(_one._isBalanced(_one.root)).toEqual(false);
        });

        let two = new BST();
        two.insert(new TreeNode(5));
        two.insert(new TreeNode(8));
        two.insert(new TreeNode(3));
        two.insert(new TreeNode(10));
        two.insert(new TreeNode(4));
        two.insert(new TreeNode(2));
        two.insert(new TreeNode(7));

        let _two = new BST();
        _two.root = new TreeNode(5);
        _two._insert(_two.root, new TreeNode(8));
        _two._insert(_two.root, new TreeNode(3));
        _two._insert(_two.root, new TreeNode(10));
        _two._insert(_two.root, new TreeNode(4));
        _two._insert(_two.root, new TreeNode(2));
        _two._insert(_two.root, new TreeNode(7));

        it('should return true cause this tree is Balanced af', () => {
            expect(two.isBalanced()).toEqual(true);
            expect(_two._isBalanced(_two.root)).toEqual(true);
        });
    });

    describe('#remove', () => {

        let three = new BST();
        three.insert(new TreeNode(10));
  
        let _three = new BST();
        _three.root = new TreeNode(10);
  
        it('Should return 10 for root', () => {
            expect(three.root.value).toEqual(10);
        });

        it('Should return 10 for root (USING PRIVATE HELPER FUNCTION)', () => {
            expect(_three.root.value).toEqual(10);
        });

        it('Should return a null root once removed', () => {
            three.remove(10);
            expect(three.root).toBeNull();
        });

        it('Should return a null root once removed (USING PRIVATE HELPER FUNCTION)', () => {
            _three.root = _three._removeNode(_three.root, 10);
            expect(_three.root).toBeNull();
        });
    });
});

