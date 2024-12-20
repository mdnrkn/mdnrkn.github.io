---
title: Right Rotate an Array by K places
date: 2024-12-20
categories: [Competitive Programming Resources, Array]
tags: [array, dsa]
---

We are given an array `arr[] = { 1, 2, 3, 4, 5, 6, 7 }` and need to right rotate it by k positions.\
In right rotation, we take elements from the end of the array and move them to the first, one by one.\
For example:

- If k = 2, the last two elements `{ 6, 7 }` move to the first.\
Result: `{ 6, 7, 1, 2, 3, 4, 5 }`.
- If k = 3, the last three elements `{ 5, 6, 7 }` move to the first.\
Result: `{ 5, 6, 7, 1, 2, 3, 4 }`.

#### Brute Force Approach:

When k is greater than or equal to the array size n, we only need to perform the effective rotations:

**Effective Rotations:** `k = k % n`.

This is because a rotation of n places brings the array back to its original configuration.\
For example:

- If k = 8 and n = 7, then `k = 8 % 7 = 1`. Perform 1 effective rotation.
- If k = 20 and n = 7, then `k = 20 % 7 = 6`. Perform 6 effective rotations.

Explanation for Large k Values:

- If k = 8, it is equivalent to 7 + 1 (one effective rotation).
- If k = 15, it is equivalent to 7 + 7 + 1 (one effective rotation).
- Multiple rotations of size n (7 in this case) always bring the array back to its original form.

Algorithm:

- Save the last k elements: Store the last k elements in a temporary array.
- Shift the remaining elements: Move the remaining elements of the array to the right.
- Copy back the saved elements: Place the saved elements at the beginning of the array.


```cpp
void rightRotate(int arr[], int n, int k) 
{
    k = k % n; // Handle cases where k >= n

    int tmp[k]; // Temporary array to store the last k elements

    // Step 1: Store the last k elements in tmp
    for (int i = n - k; i < n; i++) tmp[i - (n - k)] = arr[i];

    // Step 2: Shift the remaining elements to the right
    for (int i = n - k - 1; i >= 0; i--) arr[i + k] = arr[i];

    // Step 3: Copy the elements from tmp to the beginning of the array
    for (int i = 0; i < k; i++) arr[i] = tmp[i];
}

int main()
{
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];

    int k;
    cin >> k;

    rightRotate(arr, n, k);

    for (int i = 0; i < n; i++) cout << arr[i] << " ";
}
```

Steps for `arr[] = { 1, 2, 3, 4, 5, 6, 7 }` and k = 3:

- Identify the elements to be rotated:
  Elements to be moved: `tmp[] = { 5, 6, 7 }`.

- Shift the remaining elements to the right:
  Initial array: `arr[] = { 1, 2, 3, 4, 5, 6, 7 }`.

  Steps to shift elements:
  1. Shift element at index 3 to index 6: `arr[] = { 1, 2, 3, 4, 5, 6, 4 }`
  2. Shift element at index 2 to index 5: `arr[] = { 1, 2, 3, 4, 5, 3, 4 }`
  3. Shift element at index 1 to index 4: `arr[] = { 1, 2, 3, 4, 2, 3, 4 }`
  4. Shift element at index 0 to index 3: `arr[] = { 1, 2, 3, 1, 2, 3, 4 }`

- Place the saved elements at the beginning:
  Final array: `arr[] = { 5, 6, 7, 1, 2, 3, 4 }`.

#### Time Complexity:

For the brute force approach, the time complexity is derived as follows:

- Copy the last k elements to a temporary array:

*This operation involves iterating over the last k elements, so the time complexity is O(k).*

- Shift the remaining (n − k) elements to the right:

*We iterate over the remaining elements of the array and shift them right. This requires O(n − k) operations.*

- Place the saved elements from the temporary array back into the array:

*We iterate over the k saved elements in the temporary array and place them at the beginning of the original array. This requires another O(k) operations.*

**Total Time Complexity:** O(k) + O(n − k) + O(k) = O(n + k)

*In the worst case, when k is close to n, this can approach O(2n). However, the dominant term here is O(n), making it linear for practical purposes.*

#### Space Complexity:

For the brute force approach, the space complexity depends on the temporary array used to store the last k elements.

- Temporary Array:

*The array requires extra space to store the last k elements. Thus, the space complexity is proportional to O(k).*

- In-Place Operations:

*All the remaining operations (shifting and placing elements back) are performed in-place, so no additional space is used.*

Total Space Complexity: O(k)

*This is not optimal in cases where k is large compared to n.*

#### Optimal Approach:

To reduce space complexity to O(1), we can use the reversal algorithm.

Key Idea: To rotate the array, reverse parts of the array and then reverse the whole array.

Steps:

- Reverse the last k elements.
- Reverse the remaining (n − k) elements.
- Reverse the entire array.

For example:
Given `arr[] = { 1, 2, 3, 4, 5, 6, 7 }` and k = 3:

- Reverse the last k elements `{ 5, 6, 7 }` → `{ 7, 6, 5 }`.
Result: `{ 1, 2, 3, 4, 7, 6, 5 }`.
- Reverse the remaining (n − k) elements `{ 1, 2, 3, 4 }` → `{ 4, 3, 2, 1 }`.
Result: `{ 4, 3, 2, 1, 7, 6, 5 }`.
- Reverse the entire array → `{ 5, 6, 7, 1, 2, 3, 4 }`.

```cpp
// In case we need to write the reverse function manually
void reverse(int arr[], int start, int end)
{
    while (start <= end)
    {
        int tmp = arr[start];
        arr[start] = arr[end];
        arr[end] = tmp;
        start++;
        end--;
    }
}

void rightRotate(int arr[], int n, int k)
{
    k = k % n; // Handle cases where k >= n

    // Step 1: Reverse the last k elements
    reverse(arr, n - k, n - 1);

    // Step 2: Reverse the remaining elements
    reverse(arr, 0, n - k - 1);

    // Step 3: Reverse the entire array
    reverse(arr, 0, n - 1);
}

int main()
{
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];

    int k;
    cin >> k;

    rightRotate(arr, n, k);

    for (int i = 0; i < n; i++) cout << arr[i] << " ";
}
```

Steps for `arr[] = { 1, 2, 3, 4, 5, 6, 7 }` and k = 3:

- Reverse `{ 5, 6, 7 }` → `{ 7, 6, 5 }` → `arr[] = { 1, 2, 3, 4, 7, 6, 5 }`.
- Reverse `{ 1, 2, 3, 4 }` → `{ 4, 3, 2, 1 }` → `arr[] = { 4, 3, 2, 1, 7, 6, 5 }`.
- Reverse the entire array → `{ 5, 6, 7, 1, 2, 3, 4 }`.

#### Time Complexity:

- Reverse last k elements: O(k).
- Reverse first (n − k) elements: O(n − k).
- Reverse the entire array: O(n).

Total: O(2n)

#### Space Complexity: 

O(1), as no extra space is used.

*This approach is efficient and optimal for large arrays.*