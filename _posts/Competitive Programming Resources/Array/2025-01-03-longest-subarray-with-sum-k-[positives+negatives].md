---
title: Longest Subarray with sum K [positives + negatives]
date: 2025-01-03
categories: [Competitive Programming Resources, Array]
tags: [array, dsa]
---

Given an array may contains positive and negative both elements and an integer K, we need to find the Longest Subarray with sum K.

The code below is the optimal solution for this problem. Detailed explanations are available in the linked blog, where we previously focused on finding the longest subarray with a sum of K for arrays containing only positive numbers.\
[Read more here...](https://mdnrkn.github.io/posts/longest-subarray-with-sum-k-[positives])

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

#### **🎯 Practice**

🔗 [Longest Subarray with sum K [positives + negatives]](https://www.naukri.com/code360/problems/longest-subarray-with-sum-k_5713505)