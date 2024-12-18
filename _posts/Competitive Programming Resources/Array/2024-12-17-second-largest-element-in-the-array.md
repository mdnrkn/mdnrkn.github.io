---
title: Second Largest Element in the Array
date: 2024-12-17
categories: [Competitive Programming Resources, Array]
tags: [array, dsa]
---

Given an array `arr[] = { 1, 2, 4, 7, 7, 5 }`, we have to find the second largest element.

#### Brute Force Approach:

We can sort the array. After sorting, the largest element will be at the last position, `arr[n - 1]`.\
However, we can't directly assume that `arr[n - 2]` is the second largest element because duplicate largest elements might exist.\
For example, in `arr[] = { 1, 2, 4, 5, 7, 7 }`, we must traverse the array in reverse to find the second largest element that is different from the largest.

```cpp
int n = 6;
int arr[n] = { 1, 2, 4, 7, 7, 5 };

sort(arr, arr + n);
int second_largest = 0;

for(int i = n - 2; i >= 0; i--)
{
    if(arr[i] != largest)
    {
        second_largest = arr[i];
        break;
    }
}

cout << "Second Largest Element: " << second_largest;
```

Time Complexity:

Sorting the array takes O(N log N).\
Traversing the array in reverse takes O(N) in the worst case.\
(When all elements are the same, such as `arr[] = { 7, 7, 7, 7, 7, 7 }`).

Total Worst-Case Time Complexity: O(N log N + N)\
Here:\
O(N log N) is for sorting.\
O(N) is for reverse traversal.

#### Better Solution Approach:

We can solve this problem in two passes -\
**First pass:** Find the largest element in the array.\
**Second pass:** Traverse the array again to find the second largest element.


```cpp
int n = 6;
int arr[n] = { 1, 2, 4, 7, 7, 5 };

// First pass: Find the largest element
int largest = arr[0];

for(int i = 0; i < n; i++)
{
    if(arr[i] > largest) largest = arr[i];
}

// Second pass: Find the second largest element
int second_largest = INT_MIN; // To handle negative numbers
for(int i = 0; i < n; i++)
{
    if(arr[i] > second_largest && arr[i] != largest) 
        second_largest = arr[i];
}

cout << "Second Largest Element: " << second_largest;
```

Time Complexity:

First pass takes O(N) time.\
Second pass takes O(N) time.\
Total time complexity: O(2N), which simplifies to O(N).


#### Optimal Approach:

To optimize further, we can find both the largest and second largest elements in a single pass.\
Assume `largest = arr[0]` and `second_largest = INT_MIN`.\
Traverse the array:\
If the current element is greater than largest, update second_largest to largest and then update largest.\
If the current element is smaller than largest but greater than second_largest, update second_largest.


```cpp
int n = 6;
int arr[n] = { 1, 2, 4, 7, 7, 5 };

int largest = arr[0];
int second_largest = INT_MIN;

for(int i = 1; i < n; i++)
{
    if(arr[i] > largest) 
    {
        second_largest = largest;
        largest = arr[i];
    }
    else if(arr[i] < largest && arr[i] > second_largest) 
        second_largest = arr[i];
}

cout << "Second Largest Element: " << second_largest;
```

Time Complexity:

Single pass through the array: O(N)

#### Finding the Second Smallest Element

We can apply a similar approach to find the second smallest element.

```cpp
int n = 6;
int arr[n] = { 1, 2, 4, 7, 7, 5 };

int smallest = arr[0];
int second_smallest = INT_MAX;

for(int i = 1; i < n; i++)
{
    if(arr[i] < smallest) 
    {
        second_smallest = smallest;
        smallest = arr[i];
    }
    else if(arr[i] != smallest && arr[i] < second_smallest) 
        second_smallest = arr[i];
}

cout << "Second Smallest Element: " << second_smallest;
```

Time Complexity:

Traversing the array once: O(N).

#### Summary

| Approach          | Time Complexity | Notes                                                 |
|-------------------|-----------------|-------------------------------------------------------|
| Brute Force       | O(N log N + N)  | Sort the array and traverse in reverse.               |
| Better Solution   | O(2N) = O(N)    | Two passes: one for largest, one for second largest.  |
| Optimal Solution  | O(N)            | Single pass to find both largest and second largest.  |


#### **🎯 Practice** 

🔗 [Second Largest Number](https://www.naukri.com/code360/problems/ninja-and-the-second-order-elements_6581960)