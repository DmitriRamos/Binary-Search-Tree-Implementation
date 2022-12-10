//console.log("testing");
const { bubbleSort } = require("./funcs/sortfunc.cjs");
let sortArr = new bubbleSort();
class TreeNode {
    constructor(data, leftNode = null, rightNode = null) {
        this.data = data;
        this.left = leftNode;
        this.right = rightNode;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    buildTree(arr) {
        const sortedArr = bubbleSort(arr);
    }
    add(data) {
        const TreeNode = this.root;
    }
    prettyPrint(node, prefix = "", isLeft = true) {
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }
}
let arr = bubbleSort([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(arr);
//# sourceMappingURL=index.js.map