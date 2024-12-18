---
title: Largest Element in the Array
date: 2024-12-17
categories: [Competitive Programming Resources, Array]
tags: [array, dsa]
---

#### **📝 Note**

> ##### What is the maximum size of an array we can define?
> If an array is declared inside the main function, its maximum size is approximately **10<sup>6</sup>**.\
> However, If the array is declared globally, its maximum size increases to approximately **10<sup>7</sup>**.

> ##### How does the sort( ) function work?
> The sort( ) function is implemented using the IntroSort Algorithm.\
> IntroSort combines three standard sorting algorithms: Insertion Sort, Quick Sort, and Heap Sort.\
> The time complexity of sort( ) is O(N log N).

---

Suppose, we have the array `arr[] = { 3, 2, 1, 5, 2 }`. We have to find the largest element in the array.

#### Brute Force Approach:

We can sort the array and use the last element of the sorted array as the largest element.

```cpp
int n = 5;
int arr[n] = { 3, 2, 1, 5, 2 };

sort(arr, arr + n);

cout << "Largest element: " << arr[n - 1];
```

Time Complexity:

Sorting takes O(N log N), so the overall complexity is O(N log N).

#### Optimal Approach:

We can solve this problem in O(N) time by iterating through the array once.

Assume the first element is the largest. Then traverse the array. If any element is larger than the current largest element, update the largest.

```cpp
int n = 5;
int arr[n] = { 3, 2, 1, 5, 2 };

int largest = arr[0];

for (int i = 1; i < n; i++) 
{
    if (arr[i] > largest) largest = arr[i];
}

cout << "Largest element: " << largest;
```

Time Complexity:

Traversing the array once takes O(N), which is much better than the O(N log N) time complexity.

#### **🎯 Practice** 

🔗 [Largest Element in the Array](https://www.naukri.com/code360/problems/largest-element-in-the-array-largest-element-in-the-array_5026279)