---
title: Find the number that appears once, and the other numbers twice
date: 2024-12-31
categories: [Competitive Programming Resources, Array]
tags: [array, dsa]
---

#### **📝 Note**

> If we XOR the same numbers (a ^ a), the result is always 0.

> The maximum size of the array can be defined as (10^8) globally, and up to (10^7) inside the main function.

---

Given an array where every number appears twice except one number. We need to find the number that appears only once.

For example:\
Input: `arr[] = { 1, 1, 2, 3, 3, 4, 4 }`\
Output: 2 (since it appears only once while all others appear twice).

### Brute Force Approach

To find the number that appears once, we can use a simple linear search.

```cpp
for(int i = 0; i < n; i++)
{
    int num = arr[i];
    int cnt = 0;
    for(int j = 0; j < n; j++)
    {
        if(arr[j] == num) cnt++;
    }
    if(cnt == 1) return num;
}
```

**Time Complexity**\
O(n * n) : Checking each element one by one and counting its occurrences using a linear search.

**Space Complexity**\
O(1) : No extra space is used.

**Limitations** : This approach is slow for large arrays because of the nested loops.

### Better Solution: Using Hashing

We can improve efficiency -

- By using a hashing technique to store how many times each number appears.
- After counting, find the number that appears exactly once.

But we need to think which data structure we should use for hashing - 

- Using Array for Hashing:
  - Works well when the numbers in the array are non-negative and not very large.
- Using Map for Hashing:
  - Works for negative numbers, large numbers, or when the range of numbers is not fixed.

**Variant A: Using Array for Hashing**\
If we use an array for hashing, we first initialize all elements in the hash array to 0. Then, we traverse the entire input array, updating the count for each number by incrementing its corresponding index in the hash array. In the end, the element with a hash value of 1 will be the number that appears only once.

Now, the question arises: what should be the size of the hash array? The answer is that it should be equal to the maximum value in the input array plus one, `hash[maxx + 1]`.

```cpp
int maxx = arr[0];
for(int i = 0; i < n; i++) maxx = max(maxx, arr[i]);

int hash[maxx + 1] = {0};
for(int i = 0; i < n; i++) hash[arr[i]]++;

for(int i = 0; i < n; i++)
{
    if(hash[arr[i]] == 1) return arr[i];
}
```

**Time Complexity**\
O(n) : For traverse the array once.

**Space Complexity**\
O(maxx) : Depends on the largest element in the array, we cannot specifically say.

**Limitations:**

- Only works for non-negative numbers.
- Inefficient if the array contains large numbers (such as 10^7, 10^12...)

**Variant B: Using Map for Hashing**\
We cannot use the hash array every time, especially when the array contains negative numbers or very large values. A hash array does not handle negative numbers efficiently, and for large values, it becomes impractical due to memory constraints. In such cases, a better option is to use a more flexible data structure like a map.

Using a map allows us to handle both negative and large numbers effectively. The time complexity for this solution depends on the type of map used:

- For an ordered map, the complexity is O(N log M), where N is the length of the array and M is the number of unique elements.
- For an unordered map, the average case complexity is O(N), but in the worst case, it can go up to O(N * N).

```cpp
unordered_map<long long, int> mpp;
for(int i = 0; i < n; i++) mpp[arr[i]]++; 

for(auto it : mpp)
{
    if(it.second == 1) return it.first;
}
```

**Time Complexity**\
O(n) : For traverse the array once.

**Space Complexity**\
O(n) : The map stores up to n unique elements.

### Optimal Approach

Here, every number appears twice except one. If we XOR all the numbers, the ones that appear twice will cancel out, and we will be left with the number that appears only once.

```cpp
int getSingleElement(vector<int> &arr, int n)
{
    int xorr = 0;
    for(int i = 0; i < n; i++) xorr ^= arr[i];
    return xorr;
}
```

**Time Complexity**\
O(n): For traverse the array once.

**Space Complexity**\
O(1): No extra space is used.

#### **🎯 Practice**

🔗 [Find The Single Element](https://www.naukri.com/code360/problems/find-the-single-element_6680465)