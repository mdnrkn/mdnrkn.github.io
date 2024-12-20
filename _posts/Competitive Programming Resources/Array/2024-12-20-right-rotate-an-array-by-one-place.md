---
title: Right Rotate an Array by One place
date: 2024-12-20
categories: [Competitive Programming Resources, Array]
tags: [array, dsa]
---

Given an array `arr[] = { 1, 2, 3, 4, 5 }`, we have to right rotate the array by one place.\
To rotate the array to the right by one position, we can directly modify the given array without using extra space.\
For example, if the input array is: `arr[] = { 1, 2, 3, 4, 5 }`,\
After rotating right by one position, it becomes: `{ 5, 1, 2, 3, 4 }`.

Here, the last element of the array moves to the first position, while all other elements shift one position to the right.\
Approach:

- We have to store the last element in a temporary variable.
- Then shift all the elements one position to the right.
- Finally, place the stored value (tmp) at the first position.

```cpp
int tmp = arr[n - 1]; // Store the last element
for (int i = n - 1; i > 0; i--) 
{
    arr[i] = arr[i - 1]; // Shift elements to the right
}
arr[0] = tmp; // Place the last element at the first
```

Time Complexity:

O(N) – We traverse the array once.

Space Complexity:

O(1) – No extra array is used, only a single temporary variable.

***Note:** While no additional space is allocated, we are modifying the input array, which effectively operates within O(N) space for the array itself.*