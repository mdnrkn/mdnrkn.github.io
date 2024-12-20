---
title: Left Rotate an Array by One place
date: 2024-12-19
categories: [Competitive Programming Resources, Array]
tags: [array, dsa]
---

Given an array `arr[] = { 1, 2, 3, 4, 5 }`, we have to left rotate the array by one place.\
To rotate the array to the left by one position, we can directly modify the given array without using extra space.\
For example, if the input array is: `arr[] = { 1, 2, 3, 4, 5 }`,\
After rotating left by one position, it becomes: `{ 2, 3, 4, 5, 1 }`.

Here, the first element of the array moves to the last position, while all other elements shift one position to the left.\
Approach:

- We have to store the first element in a temporary variable.
- Then shift all the elements one position to the left.
- Finally, place the stored value (tmp) at the last position.

```cpp
int tmp = arr[0]; // Store the first element
for (int i = 1; i < n; i++) 
{
    arr[i - 1] = arr[i]; // Shift elements to the left
}
arr[n - 1] = tmp; // Place the first element at the end
```

Time Complexity:

O(N) – We traverse the array once.

Space Complexity:

O(1) – No extra array is used, only a single temporary variable.

***Note:** While no additional space is allocated, we are modifying the input array, which effectively operates within O(N) space for the array itself.*

#### **🎯 Practice** 

🔗 [Left Rotate an Array by One](https://www.naukri.com/code360/problems/left-rotate-an-array-by-one_5026278)