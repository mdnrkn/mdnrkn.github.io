---
title: Intersection of Two Sorted Arrays
date: 2024-12-21
categories: [Competitive Programming Resources, Array]
tags: [array, dsa]
---

#### **📝 Note**

> The term 'Sorted Array' is very important, if we want to go for optimal solution.

---

We are given two sorted arrays that may contain duplicate elements.\
We need to find their intersection — *the elements that appear in both arrays.*\
The resulting array will contain only those elements that are common to both arrays.

For example, given:

`arr1[] = { 1, 1, 2, 3, 4, 5 }`\
`arr2[] = { 2, 3, 4, 4, 5, 6 }`

The intersection of these arrays is:\
`intersectionArray[] = { 2, 3, 4, 5 }`

### Brute Force Approach:

In this approach, we'll compare each element of the first array with every element of the second array.\
To keep track of which elements we’ve already considered from the second array, we'll use a visited array.

Steps:

- Visited Array: This array keeps track of which elements of arr2 have already been matched.
  - Initially, all values in the visited array are set to 0.
- For each element in arr1, we check all elements of arr2:
  - If the element in arr1 matches an element in arr2 that hasn’t been visited yet, we add it to the result array (ans) and mark that element in arr2 as visited.
  - If an element in arr2 is greater than the element in arr1, we break out of the inner loop because both arrays are sorted, and no further matches are possible.

```cpp
vector<int> findArrayIntersection(vector<int> &arr1, vector<int> &arr2, int n, int m) 
{
    vector<int> ans;
    int visited[n] = {0};  // Visited array to track matched elements in arr2

    // Loop through each element of arr1
    for (int i = 0; i < n; i++) 
    {
        // Loop through each element of arr2
        for (int j = 0; j < m; j++) 
        {
            // If elements match and arr2[j] has not been visited yet
            if (arr1[i] == arr2[j] && visited[j] == 0) 
            {
                ans.push_back(arr1[i]);  // Add to the result
                visited[j] = 1;  // Mark arr2[j] as visited
                break;  // Break out of the inner loop once a match is found
            }
            // If arr2[j] is greater than arr1[i], no match is possible
            if (arr2[j] > arr1[i]) break;
        }
    }
    return ans;
}
```

**Time Complexity:**

- The outer loop iterates through all elements of arr1 (of size n).
- The inner loop iterates through all elements of arr2 (of size m).
- In the worst case, the time complexity will be O(n * m) because we check each element of arr1 against each element of arr2.

So, overall the time complexity will be O(n * m)

**Space Complexity:**

The visited array is used to mark which elements of arr2 have been visited, and it takes O(m) space because it is of size m.

So, the overall space complexity will be O(m).

### Optimize Approach:

Since both arrays are sorted, we can efficiently find their intersection using the two-pointer technique.\
This method avoids the need for nested loops, which improves performance significantly.

Steps:

1. Pointers Initialization:
   - We initialize two pointers: i for arr1 and j for arr2, both starting at index 0.
2. Iterate Through Both Arrays:
   - Compare the elements at arr1[i] and arr2[j]:
     - If arr1[i] < arr2[j], move pointer i forward (since arr1[i] is smaller).
     - If arr1[i] > arr2[j], move pointer j forward (since arr2[j] is smaller).
     - If arr1[i] == arr2[j], add arr1[i] to the result array (ans) and move both pointers forward (since the element is common to both arrays).
3. Stop when either array is fully traversed:
   - The process stops when either i or j reaches the end of its respective array.



```cpp
vector<int> findArrayIntersection(vector<int> &arr1, vector<int> &arr2, int n, int m) 
{
    int i = 0, j = 0;
    vector<int> ans;

    // Loop through both arrays until we reach the end of one array
    while (i < n && j < m) 
    {
        // Move i forward if arr1[i] is smaller
        if (arr1[i] < arr2[j]) i++;
        // Move j forward if arr2[j] is smaller
        else if (arr1[i] > arr2[j]) j++;
        else 
        {
            // Add to result if both elements are equal
            ans.push_back(arr1[i]);
            i++;
            j++;
        }
    }

    return ans;
}
```

**Time Complexity:**

Each pointer traverses its respective array only once, making the process linear.\
So, overall time complexity will be O(n + m)

**Space Complexity:**

Only a constant amount of extra space is used for the pointers (i and j), so the space complexity is O(1).

**Why This Is Efficient:**

- The two-pointer approach avoids nested loops, significantly reducing the number of comparisons.
- Unlike the brute force approach O(n * m), this method leverages the fact that both arrays are sorted, making it much faster O(n + m).
- By directly comparing elements in sorted order, we skip unnecessary checks and only focus on potential matches.

#### **🎯 Practice** 

🔗 [Intersection Of Two Sorted Arrays](https://www.naukri.com/code360/problems/intersection-of-2-arrays_1082149)