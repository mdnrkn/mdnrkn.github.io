---
title: Stress Testing
date: 2024-11-29
categories: [ResourceX]
tags: [misc]
---

### Introduction

Stress testing checks if our code works under extreme conditions. A Bash script creates test cases and compares outputs, while C++ code generates random inputs. Together, they help find and fix bugs, making the code more reliable.

#### Bash Script

```bash
for((i = 1; ; ++i)); do
    echo $i
    # Generate test case using the generator program and save it to tmp.txt
    ./generator $i > tmp.txt
    # Compare the output of original_file and dummy_file using the generated test case
    # If there is a difference, break the loop
    diff -w <(./original_file < tmp.txt) <(./dummy_file < tmp.txt) || break
done
```

#### Generator Code

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

#define endl '\n' 
#define optimize() ios_base::sync_with_stdio(0);cin.tie(0);cout.tie(0);

mt19937_64 rng(chrono::steady_clock::now().time_since_epoch().count());

// Random Integer Number Generator:
inline ll gen_random(ll l, ll r) {
    return uniform_int_distribution<ll>(l, r)(rng);
} 

// Random Real Number Generator:
// inline double gen_random(double l, double r) {
//     return uniform_real_distribution<double>(l, r)(rng);
// }

int main()
{
    optimize();

    // Write output to "tmp.txt"
    freopen("tmp.txt", "w", stdout);

    // Generate a random number of test cases between the range
    int n = gen_random(1, 5);
    cout << n << endl;

    // Generate 'n' random integers between the range
    for (int i = 0; i < n; i++)
    {
        cout << gen_random(-20, 20) << " ";
    }
    cout << endl;
    
    return 0;
}
```