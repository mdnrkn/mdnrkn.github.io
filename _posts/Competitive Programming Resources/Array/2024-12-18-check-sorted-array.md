---
title: Check Sorted Array
date: 2024-12-18
categories: [Competitive Programming Resources, Array]
tags: [array, dsa]
---

We are given two arrays:\
arr1[ ] = { 1, 2, 2, 3, 3, 4 };\
arr2[ ] = { 1, 2, 1, 3, 4 };

We have to check whether the arrays are sorted in non-decreasing order or not.

**Analysis of Arrays:**

- In the first array arr1, every element satisfies the condition arr[i] >= arr[i - 1]. Hence, it is sorted.
- In the second array arr2, every element doesn't satisfies the condition arr[i] >= arr[i - 1]. Hence, it is not sorted.

**Approach:**

This is a straight-forward problem, where we simply traverse the array and compare each element with its previous one.\
If we find any instance where arr[i] < arr[i - 1], the array is not sorted, and we return false.\
Otherwise, if the entire array satisfies the condition, we return true.

```cpp
bool isSorted(int arr[], int n) 
{
    for (int i = 1; i < n; i++) 
    {
        if (arr[i] >= arr[i - 1]) 
        {
            // Condition satisfied, continue checking
        } 
        else return false; // Array is not sorted
    }
    return true; // Array is sorted
}
```

Time Complexity:

Since we traverse the array once, the time complexity is O(N).

Space Complexity:

O(1): No additional space is used.

#### **🎯 Practice** 

🔗 [Check Sorted Array](https://www.naukri.com/code360/problems/ninja-and-the-sorted-check_6581957)