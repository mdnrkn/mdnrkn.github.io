---
title: All in One Traversal
date: 2025-02-03
categories: [Competitive Programming Resources, Binary Tree]
tags: [binary tree, dsa]
---

### Preorder, Inorder, and Postorder Traversals in One Traversal

```cpp
vector<vector<int>> preInPostTraversal(TreeNode* root)
{
    stack<pair<TreeNode*, int>> st;
    st.push({root, 1});

    vector<int> pre, in, post;
    {% raw %}
    // Return empty vectors if the root is NULL 
    if (root == NULL) return {{}, {}, {}};  
    {% endraw %}
    while (!st.empty())
    {
        auto it = st.top();
        st.pop();

        // Preorder: Increment 1 to 2, and push left side of the tree
        if (it.second == 1)
        {
            pre.push_back(it.first->val);
            it.second++;
            st.push(it);

            if (it.first->left != NULL)
            {
                st.push({it.first->left, 1});
            }
        }

        // Inorder: Increment 2 to 3, and push right
        else if (it.second == 2)
        {
            in.push_back(it.first->val);
            it.second++;
            st.push(it);

            if (it.first->right != NULL)
            {
                st.push({it.first->right, 1});
            }
        }

        // Postorder: Don't push it back again if it.second == 3
        else
        {
            post.push_back(it.first->val);
        }
    }
    
    // Return preorder, inorder, and postorder separately as a vector of vectors
    return {pre, in, post};  
}
```