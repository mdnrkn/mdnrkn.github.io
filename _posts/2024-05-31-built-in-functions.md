---
title: "Built-in Functions"
date: 2024-05-31
categories: [Built-in Functions]
tags: [Built-in Functions]
---

In the competitive programming community, C++ is extremely popular. Most competitive programmers prefer using C++ over Java or Python due to its faster execution speed and widespread usage, among other reasons. Today, we'll discuss some of the built-in functions available in C++.

Firstly, we replace `#include <iostream>` with `#include <bits/stdc++.h>`. This single header file includes all the necessary libraries, so we no longer need to include them individually.\
Now let's explore some commonly used built-in functions often used in competitive programming.

### min( )

To find the minimum value, we can use `min()` function.

```cpp
int a = 2, b = 5;
int tmp = min(a, b);
// tmp = 2
```

### max( )

Similarly to find the maximum value, we can use `max()` function.

```cpp
int a = 2, b = 5;
int tmp = max(a, b);
// tmp = 5
```

### floor( )

To get the floor value, we can use `floor()` function.

```cpp
double a = 3.8;
double tmp = floor(a);
// tmp = 3
```

### ceil( )

Similarly to get the ceiling value, we can use `ceil()` function.

```cpp
double a = 3.1;
double tmp = ceil(a);
// tmp = 4
```

### tolower( )

To convert a character to lowercase, we can use `tolower()` function.

```cpp
char ch = 'A';
char tmp = tolower(ch);
// tmp = a
```

### toupper( )

Similarly to convert a character to uppercase, we can use `toupper()` function.

```cpp
char ch = 'a';
char tmp = toupper(ch);
// tmp = A
```

### sqrt( )

To find the square root of any number, we can use `sqrt()` function.

```cpp
double a = 16;
double tmp = sqrt(a);
// tmp = 4
```

### pow( )

To calculate the exponentiation of any number, we can use `pow()` function.\
The result of this function will be a<sup>b</sup>.

```cpp
int a = 2, b = 3;
int tmp = pow(a, b);
// tmp = 8
```

### swap( )

For swapping the values of two variables, we can use `swap()` function.

```cpp
int a = 5, b = 10;
swap(a, b);
// a = 10, b = 5
```

### sort( )

To sort an array in ascending order, we can use `sort()` function.

```cpp
int n = 5;
int arr[n] = { 5,3,4,1,2 };
sort(arr, arr + n);
// arr[n] = { 1,2,3,4,5 }
```

### gcd( )

To find the Greatest Common Divisor (GCD) of two numbers, we can use `__gcd()` function.

```cpp
int a = 6, b = 20;
int gcd = __gcd(a, b);
// gcd = 2
```

- In addition, to find the Least Common Multiple (LCM) of two numbers, we can use the following method.

```cpp
int a = 6, b = 20;
int lcm = (a / __gcd(a, b)) * b;
// lcm = 60
```