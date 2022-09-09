class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    // console.log(val,'zzzzz, inside node class')
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */



  insert(val, current=this.root) {

    
      if(current == null) {
        this.root = new Node(val)
        return this
      }

      if(current.val > val){
        if(current.left == null){
          current.left = new Node(val)
          return this
        }
        return this.insert(val, current.left)
   
      }

      if(current.val < val){
        if(current.right == null){
          current.right = new Node(val)
          return this
        }
        return this.insert(val, current.right)
   
      }
  }
  // insert(val) {

  //   function chiki(node, val){
  //     console.log(this.root,1, val, '%%%%')
  //     if(this.root == null) {
  //       console.log('magarita')
  //       this.root = new Node(val)
  //       console.log(node, 'NOOOOOODDDEEEEE')
  //       return this
  //     }
  //     console.log(2)
  //     if(node.val > val){
  //       // this.root.left = new Node(val)
  //       chiki(node.left, val)
  //     }else{
  //       // this.root.right = new Node(val)
  //       chiki(node.right, val)
  //     }
  //   }
  //   chiki(this.root, val)
  // }
 

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    
    let current = this.root

    console.log(current.val, val, 'inside find')

    

    while(current){
      console.log('VISITING', current.val)
      if(current.val === val) {
        console.log(current.val, val, 'hee hee')
        return current
      }

      if (current.val > val){
        console.log(current.val,1)
        current = current.left
      }else{
        console.log(current.val, 2)
        current = current.right
      }
    }

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

let tree = new BinarySearchTree()

// console.log(tree)
tree.insert(55)
tree.insert(20)
tree.insert(100)
tree.insert(33)

console.log(tree, 'tree')
tree.find(33)

module.exports = BinarySearchTree;
