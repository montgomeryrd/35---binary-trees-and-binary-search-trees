'use strict';

module.exports.TreeNode = class TreeNode {
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
};

module.exports.BinaryTree = class BinaryTree{
    constructor(root=null){
        this.root = root;
        this.inOrder = [];
        this.preOrder = [];
        this.postOrder = [];
    }

    inOrderTraversal(){
        if(!this.root)
            return null;
        this._inOrderTraversal(this.root);
    }

    _inOrderTraversal(root){
        if(root === null)
            return null;
        this._inOrderTraversal(root.left);
        this.inOrder.push(root.value);
        this._inOrderTraversal(root.right);
    }

    preOrderTraversal(){
        if(!this.root)
            return null;
        this._preOrderTraversal(this.root);
    }

    _preOrderTraversal(root){
        if(root === null)
            return null;
        
        this.preOrder.push(root.value);
        this._preOrderTraversal(root.left);
        this._preOrderTraversal(root.right);
    }

    postOrderTraversal(){
        if(!this.root)
            return null;
        this._postOrderTraversal(this.root);
    }

    _postOrderTraversal(root){
        if(root === null)
            return null;
    
        this._postOrderTraversal(root.left);
        this._postOrderTraversal(root.right);
        this.postOrder.push(root.value);
    }
};