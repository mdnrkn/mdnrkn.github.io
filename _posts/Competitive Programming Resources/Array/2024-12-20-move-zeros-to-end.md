---
title: Move Zeros to End
date: 2024-12-20
categories: [Competitive Programming Resources, Array]
tags: [array, dsa]
---

Given an array `arr[] = { 1, 0, 2, 3, 2, 0, 0, 4, 5, 1}`, We need to move all the zeros to the end of the array.

After moving all the zeros, the array will be: `{ 1, 2, 3, 2, 4, 5, 1, 0, 0, 0 }`

#### Brute Force Approach:

- Traverse the array and collect all non-zero numbers into a temporary array.
- Copy the non-zero elements back to the original array.
- Fill the rest of the array with zeros.

```cpp
vector<int> moveZeros(int n, vector<int> arr)
{
    // Step 1: Collect non-zero elements in a temporary array
    vector<int> tmp;
    for (int i = 0; i < n; i++)
    {
        if (arr[i] != 0)
            tmp.push_back(arr[i]);
    }

    // Step 2: Copy non-zero elements back to the original array
    for (int i = 0; i < tmp.size(); i++)
    {
        arr[i] = tmp[i];
    }

    // Step 3: Fill the rest of the array with zeros
    int nonZeroElements = tmp.size();
    for (int i = nonZeroElements; i < n; i++)
    {
        arr[i] = 0;
    }

    return arr;
}
```

**Time Complexity:**

- Collecting non-zero elements: O(n)
- Copying non-zero elements: O(x) where x is the number of non-zero elements.
- Filling zeros: O(n − x).

Overall: O(2n) = O(n).

**Space Complexity:**

Extra space used is O(x), which can go up to O(n) in the worst case.

#### Optimal Approach:

We can optimize the code by moving the elements during iteration using the two-pointer approach.

Key Idea: Whenever a non-zero element is found at index i, it is swapped with the element at index j. This places all non-zero elements at the front of the array while maintaining their relative order.

Here,\
**Pointer j:** Tracks the position of the first zero in the array.\
**Pointer i:** Iterates through the array to find non-zero elements.

Steps:

1. Initialize j:
    - Find the index of the first zero in the array and assign it to j.
    - If no zeros are found, the array is already in the desired state, and we can return it as is.
    
2. Iterate with i:
    - Start traversing from i = j + 1.
    - If a non-zero element is found at i:
        - Swap it with the element at j.
        - Increment j to point to the next zero position.

This process ensures all non-zero elements are moved to the front of the array, and zeros naturally shift to the end.

```cpp
vector<int> moveZeros(int n, vector<int> arr)
{
    // Step 1: Find the first zero
    int j = -1;
    for (int i = 0; i < n; i++)
    {
        if (arr[i] == 0)
        {
            j = i;
            break;
        }
    }

    // If no zero is found, return the array as is
    if (j == -1) return arr;

    // Step 2: Swap non-zero elements with zeros
    for (int i = j + 1; i < n; i++)
    {
        if (arr[i] != 0)
        {
            swap(arr[i], arr[j]);
            j++;
        }
    }

    return arr;
}
```

Time Complexity:

- Step 1: O(x), where x is the position of the first zero.
- Step 2: O(n − x).

Overall: O(n).

Space Complexity:

O(1), since no extra space is used, and operations are done in-place.

#### **🎯 Practice** 

🔗 [Move Zeros to End](https://www.naukri.com/code360/problems/ninja-and-the-zero-s_6581958)