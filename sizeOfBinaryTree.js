// A program to calculate the size of binary tree
let preOrderStr = "";
let inOrderStr = "";
let postOrderStr = "";
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
  // find maximum elemwnt in binary tree in O(n)
  findMax(node = this.root) {
    if (node == null) return Number.MIN_VALUE;

    let max = node.data;
    let lmax = this.findMax(node.left);
    let rmax = this.findMax(node.right);

    if (lmax > max) max = lmax;
    if (rmax > max) max = rmax;
    return max;
  }

  // Find minimum element in the binary tree in O(n)
  findmin(node = this.root) {
    if (node == null) return Number.MAX_VALUE;
    let min = node.data;
    let lmin = this.findmin(node.left);
    let rmin = this.findmin(node.right);

    if (min > lmin) min = lmin;
    if (min > rmin) min = rmin;

    return min;
  }
  // Tree traversal methods
  // preorder traversal => DLR
  // INRODER Traversl => LDR
  // Postorder traversal => LRD
  preorder(node = this.root) {
    if (node == null) return null;
    else {
      preOrderStr += node.data + " ";
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  // inorder traversal
  inOrder(node = this.root) {
    if (node == null) return null;
    this.inOrder(node.left);
    inOrderStr += node.data + " ";
    this.inOrder(node.right);
  }
  //postorder
  postorder(node = this.root) {
    if (node == null) return null;
    this.postorder(node.left);
    this.postorder(node.right);
    postOrderStr += node.data + " ";
  }
}

// creating a binary tree
const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(13);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(11);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(-100);
console.log("Size of the binary tree", tree.size());
console.log("max element in a binary tree", tree.findMax());
console.log("min element in a binary tree", tree.findmin());
tree.preorder();
console.log("PreOrder traversal of binary tree", preOrderStr);
tree.inOrder();
console.log("InOrder traversal of binary tree", inOrderStr);
tree.postorder();
console.log("PostOrder traversal of binary tree", postOrderStr);
