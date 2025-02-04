---
title: Repetitions
date: 2025-02-04
categories: [Solution Hub, CSES, Introductory Problems]
tags: [cses, solution hub]
---

#### 🔰Problem Link

🔗[Permutations](https://cses.fi/problemset/task/1069)

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
        string s;
        cin >> s;
    
        vector<int> v;
        int cnt = 0;
    
        for (int i = 0; i < s.size(); i++)
        {
            if (s[i] == s[i + 1]) cnt++;
            else
            {
                v.push_back(cnt);
                cnt = 0;
            }
        }
    
        int maxx = *max_element(v.begin(), v.end());
        cout << maxx + 1;
    }

    return 0;
}
```