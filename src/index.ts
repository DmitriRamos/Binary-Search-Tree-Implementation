//console.log("testing");
const { bubbleSort } = require("./funcs/sortfunc.cjs");
let sortArr = new bubbleSort();

class TreeNode {
  data: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(data, leftNode = null, rightNode = null) {
    this.data = data;
    this.left = leftNode;
    this.right = rightNode;
  }
}

class BST {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  buildTree(arr: number[]) {
    const sortedArr = bubbleSort(arr);
  }

  add(data: number) {
    const TreeNode = this.root;
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}

let arr = bubbleSort([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(arr);
