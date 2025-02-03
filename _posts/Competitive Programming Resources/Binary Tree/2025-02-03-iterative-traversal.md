---
title: Iterative Traversal - Without Recursion
date: 2025-02-03
categories: [Competitive Programming Resources, Binary Tree]
tags: [binary tree, dsa]
---

## Traversing a binary tree iteratively using different methods (preorder, inorder, and postorder) without recursion.

---

### Iterative Preorder Traversal

##### 🔹 Steps:

1. Push the root node into the stack.
2. Pop a node, process it (store its value).
3. Push the right child first, then the left child.
4. Repeat until the stack is empty.

```cpp
vector<int> preorderTraversal(TreeNode* root)
{
    vector<int> preorder;
    if (!root) return preorder;  

    stack<TreeNode*> st;
    st.push(root);

    while (!st.empty())
    {
        TreeNode* node = st.top();  
        st.pop();
        preorder.push_back(node->val);

        // Push right first, then left (to maintain order: root -> left -> right)
        if (node->right) st.push(node->right);
        if (node->left) st.push(node->left);
    }

    return preorder;
}
```

---

### Iterative Inorder Traversal

##### 🔹 Steps:

1. Go to the leftmost node, pushing all nodes to a stack.
2. Pop the top node, process it.
3. Move to the right child.
4. Repeat until the stack is empty.

```cpp
vector<int> inorderTraversal(TreeNode* root)
{
    vector<int> inorder;
    stack<TreeNode*> st;
    TreeNode* node = root;

    while (node || !st.empty())  
    {
        while (node) 
        {
            st.push(node);
            node = node->left;
        }

        node = st.top();
        st.pop();
        inorder.push_back(node->val);

        node = node->right;  
    }

    return inorder;
}
```

---

### Iterative Postorder Traversal - Using 2 stacks

##### 🔹 Steps:

1. Push the root into stack1.
2. Pop from stack1, push it into stack2.
3. Push left and right children into stack1.
4. Once stack1 is empty, pop all elements from stack2 for postorder traversal.

```cpp
vector<int> postorderTraversal(TreeNode* root)
{
    vector<int> postorder;
    if (!root) return postorder;  

    stack<TreeNode*> st1, st2;
    st1.push(root);

    while (!st1.empty())  
    {
        TreeNode* node = st1.top();
        st1.pop();
        st2.push(node);

        if (node->left) st1.push(node->left);
        if (node->right) st1.push(node->right);
    }

    while (!st2.empty())
    {
        postorder.push_back(st2.top()->val);
        st2.pop();
    }

    return postorder;
}
```

---

### Iterative Postorder Traversal - Using 1 stack

##### 🔹 Steps:

1. Push nodes while moving left.
2. If there is no right child, process the node.
3. If there is a right child, move to it.
4. This ensures Left → Right → Root order.

```cpp
vector<int> postorderTraversal(TreeNode* root)
{
    vector<int> postorder;
    if (!root) return postorder;

    stack<TreeNode*> st;
    TreeNode* cur = root;
    TreeNode* temp;

    while (cur || !st.empty())
    {
        if (cur)
        {
            st.push(cur);
            cur = cur->left;
        }
        else
        {
            temp = st.top()->right;
            if (!temp) 
            {
                temp = st.top();
                st.pop();
                postorder.push_back(temp->val);

                while (!st.empty() && temp == st.top()->right)
                {
                    temp = st.top();
                    st.pop();
                    postorder.push_back(temp->val);
                }
            }
            else
                cur = temp;
        }
    }

    return postorder;
}
```
