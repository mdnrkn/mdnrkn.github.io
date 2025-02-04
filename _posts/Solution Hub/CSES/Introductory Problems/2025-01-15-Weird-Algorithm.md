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
        ll n;
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
    }

    return 0;
}
```