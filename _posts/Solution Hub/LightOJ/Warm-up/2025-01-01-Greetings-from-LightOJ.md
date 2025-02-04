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

int sum(int a, int b)
{
    return a + b;
}

int main()
{
    optimize();
 
    int test = 1;
    // cin >> test;
    while (test--)
    {
        // code
        int testCases;
        cin >> testCases;
        
        for(int i = 1; i <= testCases; i++)
        {
            int a, b;
            cin >> a >> b;
            cout << "Case " << i << ": " << sum(a, b) << endl;
        }
    }
    
    return 0;
}
```