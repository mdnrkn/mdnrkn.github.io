---
title: Missing Number
date: 2024-12-23
categories: [Competitive Programming Resources, Array]
tags: [array, dsa]
---

#### **📝 Note**

> If we XOR the same numbers (a ^ a), the result is always 0.

---

Given an integer `n = 5` and an array `arr[] = { 1, 2, 4, 5 }` of size `n - 1`, where the array contains elements ranging from 1 to n with one number missing, We need to find the missing number.

For the above example, the missing number is 3.

### Brute Force Approach:

We can use a linear search to compare each number from 1 to n with the elements in the array.

```cpp
for (int i = 1; i <= n; i++) 
{
    bool found = false;
    for (int j = 0; j < n - 1; j++) 
    {
        if (arr[j] == i) 
        {
            found = true;
            break;
        }
    }
    if (!found) return i;
}
```

**Time Complexity:**

- Outer loop: O(n)
- Inner loop: O(n - 1)
- Overall: O(n * n)

**Space Complexity:** O(1)

### Better Solution:

We can use hashing for the better solution.

```cpp
int hash[n + 1] = {0};  
for (int i = 0; i < n - 1; i++) hash[arr[i]] = 1;  
for (int i = 1; i <= n; i++) 
{  
    if (hash[i] == 0) return i;  
}
```

**Time Complexity:**

- Marking elements: O(n - 1)
- Checking for missing number: O(n)
- Overall: O(2n)

**Space Complexity:**

O(n) - because we use a hash array to mark the elements that are present, which helps us to find the missing number.

### Optimal Approach: Summation Technique

To reduce space complexity, we can use the formula for the sum of the first n natural numbers.

```cpp
int sum1 = (n * (n + 1)) / 2;
int sum2 = 0;
for(int i = 0; i < n - 1; i++) sum2 += arr[i];
return (sum1 - sum2);
```

**Time Complexity:** O(n)\
**Space Complexity:** O(1)

That's a best solution, but still we can do better using XOR

### Most Efficient Approach: XOR

By using XOR properties, we can achieve the same result in linear time with constant space.

```cpp
int xor1 = 0;
int xor2 = 0;
for(int 0; i < n - 1; i++) 
{
    xor1 ^= (i + 1);
    xor2 ^= arr[i];
}
xor1 ^= n;
return (xor1 ^ xor2);
```

**Explanation:**

- XOR-ing all numbers from 1 to n gives the cumulative XOR.
- XOR-ing all elements in the array gives the cumulative XOR of the present elements.
- The missing number is found by XOR-ing these two results `(xor1 ^ xor2)`.

**Time Complexity:** O(n)\
**Space Complexity:** O(1)

#### **🎯 Practice** 

🔗 [Missing Number](https://www.naukri.com/code360/problems/missing-number_6680467)