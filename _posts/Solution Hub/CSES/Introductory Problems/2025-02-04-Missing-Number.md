---
title: Missing Number
date: 2025-02-04
categories: [Solution Hub, CSES, Introductory Problems]
tags: [cses, solution hub]
---

#### 🔰Problem Link

🔗[Permutations](https://cses.fi/problemset/task/1083)

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
    
        int arr[n - 1];
        for (int i = 0; i < n - 1; i++) cin >> arr[i];
        
        int sum = 0;
        for (int i = 1; i <= n; i++) sum += i;
        
        int total = 0;
        for (int i = 0; i < n - 1; i++) total += arr[i];
        
        int find = sum - total;
        cout << find;
    }
    
    return 0;
}
```