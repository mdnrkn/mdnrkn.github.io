---
title: Binary Tree Traversal
date: 2025-01-12
categories: [Competitive Programming Resources, Binary Search Tree]
tags: [binary search tree, dsa]
---

#### **📝 Note**

> Breadth First Search (BFS) traverses the tree level by level.\
> Depth First Search (DFS) explores as far down a subtree as possible before backtracking.

---

### Binary Search Traversal Techniques

- Breadth First Search (BFS)
- Depth First Search (DFS)
  - Inorder Traversal (Left > Root > Right)
  - Pre-order Traversal (Root > Left > Right)
  - Post-order Traversal (Left > Right > Root)

---

Assume the following is our binary tree:

```text
           1
        /     \
       2        3
     /   \    /   \
    4     5  6     7
        /        /   \
      8         9     10
```

#### DFS Traversals

- **Inorder Traversal (Left > Root > Right)**\
    Output: `4 2 8 5 1 6 3 9 7 10`\
  - Start at the leftmost subtree and move inward.

```cpp
void inorder(node)
{
  if(node == NULL) return;
  inorder(node->left);
  cout << node->data << endl;
  inorder(node->right);
}
```

- **Pre-order Traversal (Root > Left > Right)**\
    Output: `1 2 4 5 8 3 6 7 9 10`
  - Start with the root, then explore the left and right subtrees.

```cpp
void preorder(node)
{
  if(node == NULL) return;
  cout << node->data << endl;
  preorder(node->left);
  preorder(node->right);
}
```

- **Post-order Traversal (Left > Right > Root)**\
    Output: `4 8 5 2 6 9 10 7 3 1`
  - Traverse the subtrees completely before visiting the root.

```cpp
void postorder(node)
{
  if(node == NULL) return;
  postorder(node->left);
  postorder(node->right);
  cout << node->data << endl;
}
```

#### Technique to Memorize DFS Orders

- **In**order Traversal = Root in the **middle** (Left > Root > Right)\
- **Pre**-order Traversal = Root at **first** (Root > Left > Right)\
- **Post**-order Traversal = Root at the **last** (Left > Right > Root)

#### BFS Traversal (Level-wise)

```text
L1           1
          /     \
L2       2        3
       /   \    /   \
L3    4     5  6     7
          /        /   \
L4      8         9     10
```

Output: `1 2 3 4 5 6 7 8 9 10`

- Note: BFS visits nodes level by level, from top to bottom.

```cpp
vector<vector<int>> levelOrder(TreeNode* root)
{
    if (!root) return {};

    vector<vector<int>> ans;
    queue<TreeNode*> q;
    q.push(root);

    while (!q.empty())
    {
        vector<int> level;
        for (int i = q.size(); i > 0; i--)
        {
            TreeNode* node = q.front(); 
            q.pop();
            level.push_back(node->val);
            
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
        ans.push_back(level);
    }
    return ans;
}
```