---
title: Weird Algorithm
date: 2025-01-15
categories: [Solution Hub, CSES, Introductory Problems]
tags: [cses, solution hub]
---

#### 🔰Problem Link

🔗[Weird Algorithm](https://cses.fi/problemset/task/1068/)

#### 💡Solution

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    long long int n;
    cin >> n;
    cout << n << " ";

    while(n != 1)
    {
        if(n % 2 != 0)
        {
            n *= 3;
            n++;
        }

        else if(n % 2 == 0)
        {
            n /= 2;
        }

        cout << n << " ";
    }

    return 0;
}
```