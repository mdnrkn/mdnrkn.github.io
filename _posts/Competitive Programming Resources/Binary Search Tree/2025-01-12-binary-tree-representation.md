---
title: Binary Tree Representation
date: 2025-01-12
categories: [Competitive Programming Resources, Binary Search Tree]
tags: [binary search tree, dsa]
---

Below is a visual and structural representation of a binary tree.

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