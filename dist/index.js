class TreeNode {
    constructor(data, leftNode = null, rightNode = null) {
        this.data = data;
        this.left = leftNode;
        this.right = rightNode;
    }
}
class BST {
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
    insert(data) {
        const newNode = new TreeNode(data);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }
    delete(value, node) {
        if (node.data === value) {
            if (node.left === null && node.right != null) {
                node.data = node.right.data;
                node.right = null;
            }
            if (node.left != null && node.right === null) {
                node.data = node.left.data;
                node.left = null;
            }
            if (node.left != null && node.right != null) {
                if (node.right != null) {
                    node.data = node.right.data;
                    node.right = node.right.right;
                }
                else {
                    node.data = node.left.data;
                    node.left = null;
                }
            }
        }
        else if (node.data > value) {
            this.delete(value, node.left);
        }
        else if (node.data < value) {
            this.delete(value, node.right);
        }
    }
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else if (newNode.data > node.data) {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
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
const newTree = new BST([1, 7, 8, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
newTree.buildTree();
newTree.insert(65);
newTree.insert(66);
newTree.insert(64);
newTree.insert(22);
newTree.delete(67, newTree.root);
newTree.prettyPrint(newTree.root);
//# sourceMappingURL=index.js.map