'use strict';

module.exports.TreeNode = class TreeNode{
    constructor(value,left=null,right=null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
};

module.exports.BST = class BST{
    constructor(root=null){
        this.root = root;
    }

    insert(nodeToInsert){
        if(this.root === null)
            this.root = nodeToInsert;
        else
            this._insert(this.root,nodeToInsert);
    }

    _insert(root,nodeToInsert){
        if(nodeToInsert.value < root.value){

            if(!root.left)
                root.left = nodeToInsert;
            else
                this._insert(root.left,nodeToInsert);
        } else {

            if(!root.right)
                root.right = nodeToInsert;
            else
                this._insert(root.right,nodeToInsert);
        }
    }

    find(value){
        return this._find(this.root,value);

    }

    _find(root,value){
        if(!root)
            return null;
        else if(root.value === value)
            return root;
        else if(root.value < value)
            return this._find(root.right,value);
        else
            return this._find(root.left,value);
    }

    isBalanced() {
        return this._isBalanced(this.root);
    }

    _isBalanced(root) {
        if(root === null) return true;

        let leftHeight = Math.max(root.left);
        let rightHeight = Math.max(root.right);
        let difference = Math.abs(leftHeight, rightHeight);

        if(difference > 1){
            return false;
        } else if(difference === 1){
            return true;
        } else {
            return this._isBalanced(root.left) && this._isBalanced(root.right);
        }
    }
};