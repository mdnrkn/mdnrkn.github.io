---
title: Introduction to Binary Tree
date: 2025-01-12
categories: [Competitive Programming Resources, Binary Search Tree]
tags: [binary search tree, dsa]
---

**Tree Data Structure**\
A tree is a hierarchical data structure consisting of nodes, where one node is the root, and all other nodes are connected by edges.

**Binary Tree**\
A binary tree is a type of tree in which each node has at most two children, known as the left child and right child.

**Key Terms:**\
**Node:** A basic unit of the tree containing data.\
**Root:** The topmost node of the tree.\
**Parent:** A node that has children.\
**Child:** Nodes that are the descendants of a parent node.\
**Leaf:** A node with no children.\
**Height:** The length of the longest path from the root to a leaf.
subtree.\
**Subtree:** A portion of a tree that itself is a tree.

**Structure of a Binary Tree:**\
Each node in a binary tree contains the following components:

- **Data:** The value stored in the node.
- **Left pointer:** A reference to the left child.
- **Right pointer:** A reference to the right child.

```text
        1
       / \
      2   3
     / \   \
    4   5   6
```

Here,\
Root = `1`\
Left child of 1 = `2`\
Right child of 1 = `3`\
Left child of 2 = `4`\
Right child of 2 = `5`\
Right child of 3 = `6`\
Leaf nodes = `4, 5, 6`

#### Types of Binary Trees

There are five common types of binary trees:

- Full Binary Tree
- Complete Binary Tree
- Perfect Binary Tree
- Balanced Binary Tree
- Degenerate Tree

---

**Full Binary Tree**\
A full binary tree is a tree where every node has either 0 or 2 children.

```text
    o
   / \
  o   o
     / \
    o   o

       o
     /   \
    o     o
   / \   / \
  o   o o   o
```

Both examples above represent full binary trees.

---

**Complete Binary Tree**\
A complete binary tree is a binary tree where:

- All levels are completely filled except possibly the last level.
- The last level has all nodes as left as possible.

```text
Example 1:

L1       o
       /   \
L2    o     o
     / \   / \
L3  o   o o   o

All levels are completely filled.  

Example 2:

L1       o
       /   \
L2    o     o
     / \  
L3  o   o  

All levels are filled, and the last level is left-aligned.  

Example 3 (Not a complete binary tree):

L1       o
       /   \
L2    o     o
     / \     \
L3  o   o     o  

Here, the last level is not left-aligned.  

Example 4 (Complete binary tree):

L1       o
       /   \
L2    o     o
     / \   / 
L3  o   o o   
```

---

**Perfect Binary Tree**\
A perfect binary tree is a binary tree in which all internal nodes have two children, and all leaf nodes are at the same level.

```text
Example 1:

L1       o
       /   \
L2    o     o
     / \   / \
L3  o   o o   o  

All leaf nodes are at the same level.  

Example 2 (Not a perfect binary tree):

L1       o
       /   \
L2    o     o
     / \  
L3  o   o  

Here, all leaf nodes are not at the same level.  
```

---

**Balanced Binary Tree**\
A balanced binary tree is a tree where the height is at most log(N), where N is the number of nodes.

---

**Degenerate Tree**\
A degenerate tree (or pathological tree) is a binary tree in which every node has only one child, resembling a linked list.

```text
    o
     \
      o
       \
        o
         \
          o
```

#### Below is a visual and structural representation of a binary tree.

```text
         5
       /   \
      6     7
    /   \
   8     4
       /
      1    

                 [5]
              /       \
           [6]         [7]
         /    \      /     \
      [8]     [4]  Null   Null
     /   \    /  \
  Null  Null [1] Null
             /  \
           Null Null
```

- Here, `[` indicates left pointer and `]` indicates right pointer.

```cpp
Struct Node
{
    int data;
    Struct Node* left;
    Struct Node* right;

    Node(int val)
    {
        data = val;
        left = right = NULL;
    }
};

int main()
{
    struct Node* root = new Node(5);      
    
    root->left = new Node(6);             
    root->right = new Node(7);            
    root->left->left = new Node(8);       
    root->left->right = new Node(4);      
    root->left->right->left = new Node(1);

    return 0;
}

//          5
//        /  \
//       6    7
//     /  \
//    8    4
//        /
//       1
```