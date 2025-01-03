---
title: Longest Subarray with sum K [positives]
date: 2025-01-03
categories: [Competitive Programming Resources, Array]
tags: [array, dsa]
---

#### **📝 Note**

> Subarray means contiguous part of the array\
> For an example : arr[] = { 1, 2, 3, 4, 5, 6 }\
> Here, Subarrays are { 1, 2, 3}, { 4, 5, 6 }, { 3, 4, 5 }\
> But { 1, 2, 5}, { 2, 5, 6 }, { 1, 4, 5 } are Subsequences

---

Given an array containing all positive elements and an integer K, we need to find the Longest Subarray with sum K.

For example,
`arr[] = { 1, 2, 3, 1, 1, 1, 1, 4, 2, 3 }` and `k = 3`

Here subarrays are -\
`{ 3 }` length of the subarray is 1\
`{ 1, 2 }` length of the subarray is 2\
`{ 1, 1, 1 }` length of the subarray is 3

As we need to find the longest subarray with sum k, so the answer is `{ 1, 1, 1 }`.

### Brute Force Approach

Simply generate all the subarrays and find the sum of all subarrays.\
Now the question is, how can we generate all the subarrays? We need to observe a pattern:

`arr[] = { 1, 2, 3, 1, 1, 1, 1, 4, 2, 3 }`\
For this array, all the subarrays are -

```text
{ 1 } 
{ 1, 2 }
{ 1, 2, 3 }
{ 1, 2, 3, 1 }
{ 1, 2, 3, 1, 1 }
{ 1, 2, 3, 1, 1, 1 }
{ 1, 2, 3, 1, 1, 1, 1 }
{ 1, 2, 3, 1, 1, 1, 1, 4 }
{ 1, 2, 3, 1, 1, 1, 1, 4, 2 }
{ 1, 2, 3, 1, 1, 1, 1, 4, 2, 3 }

similarly, 

{ 2 }
{ 2, 3 }
{ 2, 3, 1 }
{ 2, 3, 1, 1 }
{ 2, 3, 1, 1, 1 }
{ 2, 3, 1, 1, 1, 1 }
{ 2, 3, 1, 1, 1, 1, 4 }
{ 2, 3, 1, 1, 1, 1, 4, 2 }
{ 2, 3, 1, 1, 1, 1, 4, 2, 3 }

similarly, 

{ 3 }
{ 3, 1 }
{ 3, 1, 1 }
{ 3, 1, 1, 1 }
{ 3, 1, 1, 1, 1 }
{ 3, 1, 1, 1, 1, 4 }
{ 3, 1, 1, 1, 1, 4, 2 }
{ 3, 1, 1, 1, 1, 4, 2, 3 }

similarly, 

{ 1 }
{ 1, 1 }
{ 1, 1, 1 }
{ 1, 1, 1, 1 }
{ 1, 1, 1, 1, 4 }
{ 1, 1, 1, 1, 4, 2 }
{ 1, 1, 1, 1, 4, 2, 3 }

similarly, 

{ 1 }
{ 1, 1 }
{ 1, 1, 1 }
{ 1, 1, 1, 4 }
{ 1, 1, 1, 4, 2 }
{ 1, 1, 1, 4, 2, 3 }

similarly, 

{ 1 }
{ 1, 1 }
{ 1, 1, 4 }
{ 1, 1, 4, 2 }
{ 1, 1, 4, 2, 3 }

similarly, 

{ 1 }
{ 1, 4 }
{ 1, 4, 2 }
{ 1, 4, 2, 3 }

similarly, 

{ 4 }
{ 4, 2 }
{ 4, 2, 3 }

similarly, 

{ 2 }
{ 2, 3 }

similarly, 

{ 3 }
```

We can use the two-pointer technique, where we have two pointers, i and j, to mark the edges of a subarray. Pointer j is used to make the subarray bigger, while pointer i is used to make it smaller when necessary. This way, we can check all possible subarrays without recalculating their sums over and over again, making the process more efficient.

```cpp
int length = 0;
for(int i = 0; i < n; i++)
{
    for(int j = i; j < n; j++)
    {
        int sum = 0;
        for(int k = i; k < j; k++)
        {
            sum += arr[k];
            if(sum == k) length = max(length, j - i + 1);
        }
    }
}
return length;
```

**Time Complexity**\
O(n * n * n) : Due to Nested loops.

**Space Complexity**\
O(1) : No extra space is used.

If we observe more -

We don't need a third loop to calculate the sum, we can simplify:

- Accumulate the sum for j in an inner loop.
- Check directly if the sum equals K.

```cpp
int length = 0;
for(int i = 0; i < n; i++)
{
    int sum = 0;
    for(int j = i; j < n; j++)
    {
        sum += arr[j];
        if(sum == k) length = max(length, j - i + 1);
    }
}
return length;
```

Now this time, the time and space complexity is -

**Time Complexity** : O(n * n)\
**Space Complexity** : O(1)

### Better Solution

We can use a hash map to optimize the process of finding the longest subarray with a sum equal to K. 
By keeping track of prefix sums and their first occurrences, we can efficiently calculate the length of potential subarrays.

```cpp
int longestSubarrayWithSumK(vector<int> arr, long long k) 
{
    map<long long, int> preSumMap; // To store prefix sums and their indices
    long long sum = 0;             // Initialize the prefix sum
    int maxLen = 0;                // Variable to store the maximum subarray length

    for (int i = 0; i < arr.size(); i++) 
    {
        sum += arr[i];             // Update the prefix sum

        // Check if the entire subarray from the start to the current index has sum K
        if (sum == k) maxLen = max(maxLen, i + 1);

        // Check if the remainder (sum - K) exists in the map
        long long rem = sum - k;

        if (preSumMap.find(rem) != preSumMap.end()) 
        {
            int len = i - preSumMap[rem]; // Calculate the length of the subarray
            maxLen = max(maxLen, len);    // Update the maximum length
        }

        preSumMap[sum] = i;
    }

    return maxLen; // Return the length of the longest subarray
}
```

The code works well for arrays with only positive numbers, but it can have problems if the array contains zeros.\
For example, if the array is `arr[] = { 2, 0, 0, 3 }`, the prefix sum might repeat because of the zeros. This can confuse the program about where the subarray starts.\
To fix this, we make sure to store only the first time each prefix sum appears in the hash map.\
This way, the code always uses the correct starting point for finding subarrays, even if there are zeros in the array.

```cpp
int longestSubarrayWithSumK(vector<int> arr, long long k) 
{
    map<long long, int> preSumMap; // To store prefix sums and their indices
    long long sum = 0;             // Initialize the prefix sum
    int maxLen = 0;                // Variable to store the maximum subarray length

    for (int i = 0; i < arr.size(); i++) 
    {
        sum += arr[i];             // Update the prefix sum

        // Check if the entire subarray from the start to the current index has sum K
        if (sum == k) maxLen = max(maxLen, i + 1);

        // Check if the remainder (sum - K) exists in the map
        long long rem = sum - k;
        if (preSumMap.find(rem) != preSumMap.end()) 
        {
            int len = i - preSumMap[rem]; // Calculate the length of the subarray
            maxLen = max(maxLen, len);    // Update the maximum length
        }

        // Insert the current prefix sum into the map only if it's not already present
        if (preSumMap.find(sum) == preSumMap.end()) preSumMap[sum] = i;
    }

    return maxLen; // Return the length of the longest subarray
}
```

**Time Complexity**\
O(N log N), where N is the size of the array and the ordered map operations (insertion and lookup) taking O(log N) time.

**Space Complexity**\
O(N), for storing prefix sums in the map.

### Optimal Approach

To find the longest subarray with a sum equal to K, we can use the two-pointer (or sliding window) approach for optimal performance:

- Two Pointers:
  - Use two pointers, `left` and `right`, to represent the current subarray.
  - The `right` pointer moves forward to expand the subarray.
  - If the sum becomes larger than K, move the `left` pointer forward to shrink the subarray.
- Sliding Window:
  - While the subarray sum is greater than K, remove elements from the left to reduce the sum.
  - If the sum equals K, calculate the length of the subarray and update the maximum length.
- Iterative Adjustment:
  - Keep moving the `right` pointer to explore new elements.
  - Add the value of the new element to the current sum.

This method efficiently finds the longest subarray with a sum equal to K, and it only works for arrays with positive numbers.


```cpp
int longestSubarrayWithSumK(vector<int> arr, long long k) 
{
    int left = 0, right = 0;  // Two pointers to define the window
    long long sum = arr[0];   // Current sum of the window
    int maxLen = 0;           // To store the maximum length of subarray
    int n = arr.size();

    // Traverse the array using the right pointer
    while(right < n)
    {
        // Shrink the window from the left until the sum is <= k
        while(left <= right && sum > k)
        {
            sum -= arr[left];  // Remove the leftmost element from the sum
            left++;            // Move the left pointer forward
        }

        // If the sum matches k, update the maximum length
        if(sum == k) 
        {
            maxLen = max(maxLen, right - left + 1);
        }

        // Expand the window by moving the right pointer
        right++;
        if(right < n) 
        {
            sum += arr[right];  // Add the next element to the sum
        }
    }

    return maxLen;
}
```

**Time Complexity**\
O(2N) : The left and right pointers traverse the array at most twice.

**Space Complexity**\
O(1) : No extra space is used.

#### **🎯 Practice**

🔗 [Longest Subarray with sum K [positives]](https://www.naukri.com/code360/problems/longest-subarray-with-sum-k_6682399)