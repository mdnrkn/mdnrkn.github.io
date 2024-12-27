---
title: Maximum Consecutive Ones
date: 2024-12-27
categories: [Competitive Programming Resources, Array]
tags: [array, dsa]
---

Given an array `arr[] = { 1, 1, 0, 1, 1, 1, 0, 1, 1 }`, We need to find the length of the longest sequence of consecutive 1s.\
For example, in this case, the maximum consecutive ones are 3.

### Optimal Approach:

- Initialize cnt = 0 and maxx = 0.
- Traverse the array:
  - If the current element is 1, increment cnt and update maxx if maxx < cnt.
  - If the current element is 0, reset cnt to 0.
- After traversal, maxx will keep the length of the maximum sequence of consecutive 1s.

```cpp
int findMaxConsecutiveOnes(vector<int> &nums)
{
    int maxx = 0;
    int cnt = 0;
    for(int i = 0; i < nums.size(); i++)
    {
        if(nums[i] == 1)
        {
            cnt++;
            maxx = max(maxx, cnt); 
        }
        else cnt = 0;
    }
    return maxx;
}
```

**Time Complexity**\
O(n): We traverse the array once.

**Space Complexity**\
O(1): No extra space is used apart from a few integer variables (maxx, cnt), making it a constant space solution.

#### **🎯 Practice** 

🔗 [Maximum Consecutive Ones](https://www.naukri.com/code360/problems/maximum-consecutive-ones_3843993)