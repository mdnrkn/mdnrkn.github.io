---
title: Cover in Water
date: 2025-02-08
categories: [Solution Hub, TLE CP-31 Sheet, Rating_800]
tags: [TLE CP-31 Sheet, solution hub]
---

#### 🔰Problem Link

🔗[Cover in Water](https://codeforces.com/problemset/problem/1900/A)

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
#define pb(x) push_back(x)
#define endl '\n'
#define mem(a,b) memset(a, b, sizeof(a))
#define setpre(x) cout << fixed << setprecision(x)
#define optimize() ios_base::sync_with_stdio(0); cin.tie(0); cout.tie(0);

ll gcd(ll a, ll b) { return __gcd(a, b); }
ll lcm(ll a, ll b) { return a * (b / gcd(a, b)); }

void solve()
{
    int n;
    string str;
    cin >> n >> str;

    int cnt = 0;
    for (int i = 0; i < n; i++)
    {
        if (str[i] == '.') cnt++;
    }

    string x = "...";

    if (str.find(x) != -1) cout << 2 << endl;
    else cout << cnt << endl;
}

int32_t main()
{
    optimize();

    int testCases = 1;
    cin >> testCases;
    while (testCases--) solve();

    return 0;
}
```