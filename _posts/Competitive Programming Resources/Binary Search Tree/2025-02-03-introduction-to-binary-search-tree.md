---
title: Introduction to Binary Search Tree
date: 2025-02-03
categories: [Competitive Programming Resources, Binary Search Tree]
tags: [binary search tree, dsa]
---

A Binary Search Tree is a type of binary tree that satisfies the following rules:

- **Node Value Rule :** For every node in the tree -
  - All the values in the left subtree must be less than the node's value.
  - All the values in the right subtree must be greater than the node's value.

This can be written as : `L < N < R`, where `N` is the current node, `L` represents nodes in the left subtree, and `R` represents nodes in the right subtree.

```text
        N
        o 
       / \
    L o   o R
```

- Subtree Property :
  - The left subtree must also be a Binary Search Tree.
  - The right subtree must also be a Binary Search Tree.

Example of a Binary Search Tree

```text
       8
      / \
     3   10
    / \    \
   1   6    14
      / \    /
     4   7  13
```

### Why Binary Search Tree?

**Efficient Searching :**

- BST enables O(log N) time complexity for search, insert, and delete operations in a balanced tree.
- A regular binary tree may require O(N) time in the worst case.