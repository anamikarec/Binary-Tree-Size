// A program to calculate the size of binary tree

class Node {
  constructor(item) {
    this.data = item;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  size(node = this.root) {
    if (node == null) return 0;
    else return this.size(node.left) + 1 + this.size(node.right);
  }
}

// creating a binary tree
const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);
console.log("Size of the tree", tree.size());
