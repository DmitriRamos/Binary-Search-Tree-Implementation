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
  root;
  arr: number[];

  constructor(arr) {
    this.root;
    this.arr = arr;
  }

  buildTree() {
    const sortedArr = this.arr.sort(function (a, b) {
      return a - b;
    });
    const finalArr = [...new Set(sortedArr)];
    const start = 0;
    const end = finalArr.length - 1;
    const mid = start + (end - start) / 2;
    const rootNode = new TreeNode(finalArr[mid]);
    this.root = rootNode;
    for (let i = mid - 1; i >= 0; i--) {
      this.insert(finalArr[i]);
    }
    for (let i = mid + 1; i < finalArr.length; i++) {
      this.insert(finalArr[i]);
    }

    return this.root;
  }

  insert(data: number) {
    const newNode = new TreeNode(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node: TreeNode, newNode: TreeNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

function prettyPrint(node: TreeNode, prefix = "", isLeft = true) {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}
const newTree = new BST([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
newTree.buildTree();
newTree.insert(6);
newTree.insert(320);
newTree.insert(4);
prettyPrint(newTree.root);
