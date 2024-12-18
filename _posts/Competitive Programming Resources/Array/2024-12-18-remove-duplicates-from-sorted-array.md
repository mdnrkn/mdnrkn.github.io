---
title: Remove Duplicates from Sorted Array
date: 2024-12-18
categories: [Competitive Programming Resources, Array]
tags: [array, dsa]
---

Given a sorted array `arr[] = { 1, 1, 2, 2, 2, 3, 3 }`, we need to remove duplicate elements from the array while keeping only the unique elements.\
The modified array should contain these unique elements, and we return their count.

#### Brute Force Approach:

We know that the set data structure automatically removes duplicates and keeps only unique elements.  
Let's create a `set<int>` and iterate through the array to insert all its elements.  
Since the set only allows unique values, it will store only `{ 1, 2, 3 }` after one iteration.  
Copy the elements from the set back into the array.


```cpp
set<int> st;
for (int i = 0; i < n; i++) 
    st.insert(arr[i]); // Insert elements into the set

int index = 0;
for (auto it : st) 
{
    arr[index] = it; // Copy elements from the set to the array
    index++;
}
return index; // Return the count of unique elements
```

Time Complexity:

O(N log N): Inserting N elements into the set.\
O(N): Copying the unique elements back into the array.\
Total: O(N log N)

Space Complexity:

O(N): For the set storing unique elements.

#### Optimal Approach:

We can solve this in O(N) time using the two-pointer approach since the array is sorted.

Use two pointers:

- i keeps track of the position of the last unique element in the array.
- j iterates through the array to find the next unique element.
- If `arr[j] != arr[i]`, update `arr[i + 1]` to `arr[j]` and increment i.
- After the loop, the first `i + 1` elements of the array will contain the unique elements.


```cpp
int i = 0; // Pointer for unique elements
for (int j = 1; j < n; j++) 
{
    if (arr[j] != arr[i]) // Check for unique elements
    { 
        arr[i + 1] = arr[j]; // Update the array
        i++;
    }
}
return i + 1; // Return the count of unique elements
```

Time Complexity:

O(N): Single traversal of the array.

Space Complexity:

O(1): No additional space used.

#### Summary

| Approach         | Time Complexity | Space Complexity | Notes                              |
|------------------|-----------------|------------------|------------------------------------|
| Brute Force      | O(N log N)      | O(N)             | Uses a set to handle duplicates.   |
| Optimal Approach | O(N)            | O(1)             | Directly modifies the input array. |

For sorted arrays, the **two-pointer approach** is optimal in both time and space.


#### **🎯 Practice** 

🔗 [Remove Duplicates from Sorted Array](https://www.naukri.com/code360/problems/remove-duplicates-from-sorted-array_1102307)