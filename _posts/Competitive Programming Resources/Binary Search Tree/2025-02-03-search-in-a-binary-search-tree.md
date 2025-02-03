---
title: Search in a Binary Search Tree
date: 2025-02-03
categories: [Competitive Programming Resources, Binary Search Tree]
tags: [binary search tree, dsa]
---

Given a Binary Search Tree (BST) and a target value 10, we need to return the entire node that contains this value. If the value does not exist in the tree, return `nullptr`.

```text
            8
          /   \
         5     12
       /  \    /  \
      4   7   10   14
         /         /
        6         13
```

Approach :

In a binary search tree (BST), the height is approximately log₂(n), which makes searching efficient. The fundamental property of a BST is : `L < N < R`
Where `L` is the left subtree, `N` is the current node, and `R` is the right subtree.

To search for the value 10, we start at the root:

- At the root node 8, since 8 < 10, the value we are looking for must be in the right subtree. So, we move to the right child.
- Now at node 12, since 12 > 10, the value we are searching for must be in the left subtree. So, we move to the left child of 12.
- At node 10, the value matches our target. Therefore, we return the node containing 10.

If the left child of 12 had been `null` instead, it would mean the value 10 does not exist in the tree, and we would return `null`.

```cpp
Node* searchBST(Node* root, int value) 
{
    // Traverse the tree
    while (root != nullptr) 
    {
        if (root->data == value) return root;

        // Move to the left subtree
        else if (value < root->data) root = root->left; 

        // Move to the right subtree
        else root = root->right; 
    }
    return nullptr; 
}
```