---
title: Linear Search
date: 2024-12-21
categories: [Competitive Programming Resources, Array]
tags: [array, dsa]
---

Given an array `arr[] = { 6, 7, 8, 4, 1 }` and num = 4, We need to find the first occurrence of num in the array. If num is found, return its index. Otherwise, return -1.

Approach:

- The function iterates through the array with n elements.
- For each index, it checks if the element matches num.
- The search stops as soon as num value is found, or the end of the array is reached.

```cpp
// Function to find the first occurrence of a number in an array
int findFirstOccurrence(int arr[], int n, int num) {
    for (int i = 0; i < n; ++i) {
        // Return the index if the number is found
        if (arr[i] == num) return i;
    }
    // If the number is not found, return -1
    return -1;
}
```

Time Complexity:

Best Case: O(1), if num is found at the first index.\
Worst Case: O(n), if num is not present or is at the last index.

#### **🎯 Practice** 

🔗 [Linear Search](https://www.naukri.com/code360/problems/linear-search_6922070)