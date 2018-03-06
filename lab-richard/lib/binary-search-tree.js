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

    _insert(root, nodeToInsert){
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

    getHeight(root) {
        if(root === null) return null;
        return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
    }

    isBalanced() {
        return this._isBalanced(this.root);
    }

    _isBalanced(root) {
        if(root === null) return null;

        let difference = Math.abs(this.getHeight(root.left) - this.getHeight(root.right));

        if(difference > 0){
            return false;
        } else if(difference === 0){
            return true;
        } else {
            return this._isBalanced(root.left) && this._isBalanced(root.right);
        }
    }

    remove(value){
        this.root = this._removeNode(this.root, value);
    }
    
    _removeNode(node, key){
        if(node === null)
            return null;

        else if(key < node.value){
            node.left = this._removeNode(node.left, key);
            return node;
        } else if(key > node.value){
            node.right = this._removeNode(node.right, key);
            return node;
        } else {

            // deleting node with no children
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }
    
            // deleting node with one children
            if(node.left === null){
                node = node.right;
                return node;
            } else if(node.right === null){
                node = node.left;
                return node;
            }
        
            // Deleting node with two children
            let aux = this._findMinNode(node.right);
            node.value = aux.value;
        
            node.right = this._removeNode(node.right, aux.value);
            return node;
        }
    
    }

    _findMinNode(node)    {
        if(node.left === null)
            return node;
        else
            return this._findMinNode(node.left);
    }

};
