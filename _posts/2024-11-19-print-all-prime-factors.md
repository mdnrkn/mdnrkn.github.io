---
title: Print All Prime Factors
date: 2024-11-19
categories: [Competitive Programming Resources, Math]
tags: [math]
---

Given a number 'n', we need to find all of its prime factors.\
The Brute Force Approach: 

```cpp
for(int i = 1; i <= n; i++)
{
    if(n % i == 0)
    {
        if(prime(i)) v.push_back(i);
    }
}
```

The time complexity of the above code is  ```O(n * sqrt(n))```. To optimize it, we can use a different approach.\
The Optimized Approach:

```cpp
for(int i = 1; i * i <= n; i++)
{
    if(n % i == 0)
    {
        if(prime(i)) v.push_back(i);
        if(n / i != i) 
        {
            if(prime(n / i)) v.push_back(n / i);
        }
    }
}
```

The time complexity of this approach is ```O(sqrt(n) * 2 * sqrt(n))```.

_The exact time complexity cannot be precisely determined because only the numbers that are factors of n will undergo the primality check. This makes it dependent on the input integer. Therefore, this is an approximate time complexity._

The Most Optimal Approach:

```cpp
for(int i = 2; i * i <= n; i++)
{
    if(n % i == 0)
    {
        v.push_back(i);
        while(n % i == 0) n /= i;
    }
}
if(n > i) v.push_back(n);
```

The time complexity of this approach is ```O(sqrt(n) * log(n))```.