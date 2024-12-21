---
title: Union of Two Sorted Arrays
date: 2024-12-21
categories: [Competitive Programming Resources, Array]
tags: [array, dsa]
---

#### **📝 Note**

> Whenever we need to work with unique elements, we should use a set or a map.
> A set ensures that only unique elements are stored and maintains them in sorted order.

> The term 'Sorted Array' is very important, if we want to go for optimal solution.

---

Given two arrays:\
`arr1[] = { 1, 1, 2, 3, 4, 5 }`\
`arr2[] = { 2, 3, 4, 4, 5, 6 }`

Both arrays are sorted but may contain duplicate elements. We need to find the union of these arrays, ensuring:

- The union array contains only unique elements.
- The elements in the union array are sorted in ascending order.

The resulting union array will be: `unionArray[] = { 1, 2, 3, 4, 5, 6 }`

### Brute Force Approach:

We can use a set data structure to store the unique elements.\
By traversing the arrays and inserting their elements into the set, it will automatically retain only the unique elements from both arrays and keep them in sorted order.\
We avoid using an unordered set because it does not maintain the order of elements, making it unsuitable for cases where sorted order is required. Therefore, we use a set.

```cpp
vector<int> sortedArray(vector<int> arr1, vector<int> arr2) 
{
    // Step 1: Initialize a set to store unique elements
    set<int> st;

    int size1 = arr1.size();
    int size2 = arr2.size();

    // Step 2: Insert all elements from the first array into the set
    for (int i = 0; i < size1; i++) st.insert(arr1[i]);

    // Step 3: Insert all elements from the second array into the set
    for (int i = 0; i < size2; i++) st.insert(arr2[i]);

    // Step 4: Transfer elements from the set to a vector
    vector<int> unionArray;
    for (auto it : st) unionArray.push_back(it);

    return unionArray;
}
```

**Time Complexity:**

Inserting an element into a set takes O(log n), where n is the current size of the set.

- For arr1 (size = size1): O(size1 log(size1 + size2))
- For arr2 (size = size2): O(size2 log(size1 + size2))

Total: O((size1 + size2) log (size1 + size2))

**Space Complexity:**

The set and result vector together require O(size1 + size2) space to store unique elements.

### Optimize Approach:

Since both arrays are sorted, we can use the two-pointer technique to efficiently find their union.

- Pointer i starts at the first element of arr1.
- Pointer j starts at the first element of arr2.

The goal is to traverse both arrays simultaneously, comparing elements, and adding unique values to the union array.

```cpp
vector<int> sortedArray(vector<int> arr1, vector<int> arr2) {
    int size1 = arr1.size();
    int size2 = arr2.size();
    int i = 0, j = 0;
    vector<int> unionArray;

    // Traverse both arrays
    while (i < size1 && j < size2) {
        if (arr1[i] < arr2[j]) 
        {
            // Add unique element from arr1
            if (unionArray.empty() || unionArray.back() != arr1[i]) 
            {
                unionArray.push_back(arr1[i]);
            }
            i++;
        } 
        else if (arr2[j] < arr1[i]) 
        {
            // Add unique element from arr2
            if (unionArray.empty() || unionArray.back() != arr2[j]) 
            {
                unionArray.push_back(arr2[j]);
            }
            j++;
        } 
        else 
        {
            // Both elements are equal, add only one to avoid duplicates
            if (unionArray.empty() || unionArray.back() != arr1[i]) 
            {
                unionArray.push_back(arr1[i]);
            }
            i++;
            j++;
        }
    }

    // Add remaining elements from arr1
    while (i < size1) 
    {
        if (unionArray.empty() || unionArray.back() != arr1[i]) 
        {
            unionArray.push_back(arr1[i]);
        }
        i++;
    }

    // Add remaining elements from arr2
    while (j < size2) 
    {
        if (unionArray.empty() || unionArray.back() != arr2[j]) 
        {
            unionArray.push_back(arr2[j]);
        }
        j++;
    }

    return unionArray;
}
```

**Time Complexity:**

We traverse each array once using the two pointers.\
Total operations: O(size1 + size2).

**Space Complexity:**

The union array stores the unique elements.\
At worst, all elements are unique, so space required is O(size1 + size2).

#### **🎯 Practice** 

🔗 [Merge 2 Sorted Array](https://www.naukri.com/code360/problems/sorted-array_6613259)