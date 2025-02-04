---
title: Permutations
date: 2025-02-04
categories: [Solution Hub, CSES, Introductory Problems]
tags: [cses, solution hub]
---

#### 🔰Problem Link

🔗[Permutations](https://cses.fi/problemset/task/1070)

#### 💡Solution

```cpp
/**
 * In the Name of Allah
 * Author: mdnrkn
**/
 
#include <bits/stdc++.h>
using namespace std;
 
typedef long long ll;
 
#define MOD 1e9+7
#define PI 2*acos( 0.0 )
#define endl '\n'
#define mem(a,b) memset(a, b, sizeof(a))
#define setpre(x) cout << fixed << setprecision(x)
#define optimize() ios_base::sync_with_stdio(0); cin.tie(0); cout.tie(0);
 
ll gcd(ll a, ll b) { return __gcd(a, b); }
ll lcm(ll a, ll b) { return a * (b / gcd(a, b)); }

int main()
{
    optimize();
 
    int test = 1;
    // cin >> test;
    while (test--)
    {
        // code
        int n;
        cin >> n;
    
        if (n == 1) cout << "1";
        else if (n > 1 && n < 4) cout << "NO SOLUTION";
        else
        {
            for (int i = 1; i <= n; i++)
            {
                if (i % 2 == 0) cout << i << " ";
            }
    
            for (int i = 1; i <= n; i++)
            {
                if (i % 2 != 0) cout << i << " ";
            }
        }
    }
    
    return 0;
}
```