<h1>35-binary-trees-and-binary-search-trees</h1>

authors: Richard Montgomery & Jesus Mendoza

version: 1.0.0

<hr>

<h2>How to Use Binary Tree</h2>

First, establish a binary tree using the TreeNode and BinaryTree constructors. 

```
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
```

Then you will be able to traverse your binary tree using the three methods below.



<strong>Binary Tree: O(n)</strong>

inOrderTraversal() - Traverses the binary tree and returns an array of values using the - L Root R - order of traversal.

```
binaryTree.inOrderTraversal();

[6, 8, 7, 9, 2, 1, 4, 3, 5]
```
preOrderTraversal() - Traverses the binary tree and returns an array of values using the - Root L R - order of traversal.
```
binaryTree.preOrderTraversal();

[1, 2, 6, 7, 8, 9, 3, 4, 5]
```

postOrderTraversal() - Traverses the binary tree and returns an array of values using the - L R Root - order of traversal.

```
binaryTree.postOrderTraversal();

[8, 9, 7, 6, 2, 4, 5, 3, 1]
```
<hr>

<h2>How to Use Binary Search Tree</h2>

<strong>Binary Search Tree: Log(n)</strong>

The Binary Search Tree is a data structure that allows the user to input values that will be inserted into the tree following 'rules'. The methods we've made for our binary search tree are below.

Use the BST constructor to Initialize a Binary Search Tree.

```
    let one = new BST();
```

insert() - inserts a node in relation to the root value. If the value is less than the parent, the node will be inserted to the left side of the tree. If it is greater, then it will be inserted to the right of the tree. Each parent can have up to two nodes.

``` 
    one.insert(new TreeNode(5));
    one.insert(new TreeNode(8));
    one.insert(new TreeNode(3));
    one.insert(new TreeNode(10));
    one.insert(new TreeNode(6));
```

find() - recursively traverses through the tree to find the input value and return it. If the value is not in the tree, it will return null.

```
one.find(5).value

5
```

getHeight() - Uses the Math.max method to determine the length of each side of the tree and returns their lengths.

isBalanced() - Uses the getHeight method to see whether both sides of the tree are balanced (or equal in length).

```
one.isBalanced()

false
```

remove() - recursively traverses through the tree to find the input value and set it's value to null and return null.

<hr>

<h2>Running Tests</h2>
We have two test suites, one for the Binary Tree and another for the Binary Search Tree. 

To test, "npm i" dependencies. 

Then run "npm test" in the terminal. 

34 tests should be this pretty sweet and rewarding green color.

<hr>

<h2> Lab Assignment </h2>
![cf](http://i.imgur.com/7v5ASc8.png) lab 35 - Binary Trees and Binary Search Trees
====

## To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Requirements
#### Configuration
  <!-- list of files, configurations, tools, etc that are required -->
  your lab directory must include
  * **README.md** -- with a documentation about your lab
  * **.gitignore** -- with a robust .gitignore
  * **.eslintrc** -- with the class .eslintrc file
  * **.eslintignore** -- with the class .eslintignore
  * **.package.json** -- with all dependencies and dev-dependencies
  * **lib/** -- directory for holding your programs helper modules
  * **test/** -- directory for holding your programs unit and integration tests

#### Testing
  * write at least three test assertions for each constructor method
  * organize your tests into appropriate describe/it blocks for test output readability

####  Documentation
  * in your README, write documentation for you data structures
  * your documentation should includes code block usage examples
  * provide instructions for:
    * installing and using your data structure
    * accessing each method
    * running your tests

#### Feature Tasks
* Add a `remove(value)` member function to the `BinarySearchTree` class presented in class. 
* Add a `preOrderTraversal` and a `postOrderTraversal` member functions to the `BinaryTree` class presented in class.
* Add a `isBalanced` method to the `BinarySearchTree` class presented in class.
#### Rubric:
  * Tests: 3pts
  * Passes linter: 1pts
  * Completed Data Structure: 3pts
  * Big-O notation: 3pts