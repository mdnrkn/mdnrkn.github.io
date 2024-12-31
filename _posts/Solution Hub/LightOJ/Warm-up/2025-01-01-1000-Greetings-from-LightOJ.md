---
title: Greetings from LightOJ
date: 2025-01-01
categories: [Solution Hub, LightOJ, Warm-up]
tags: [lightoj, solution hub]
---

#### 🔰Problem Link

🔗[Greetings from LightOJ](https://lightoj.com/problem/greetings-from-lightoj)

#### 💡Solution

```cpp
#include <bits/stdc++.h>
using namespace std;

int sum(int a, int b)
{
    return a + b;
}

int main()
{
    int testCases;
    cin >> testCases;
    
    for(int i = 1; i <= testCases; i++)
    {
        int a, b;
        cin >> a >> b;
        cout << "Case " << i << ": " << sum(a, b) << endl;
    }

    return 0;
}
```