---
title: Basic Math
date: 2024-11-02
categories: [Competitive Programming Resources, Math]
tags: [math, dsa]
---

### **📝 Note**

> If the number of iteration is based on division, 
    then the time complexity will be in logarithmic.

> The numbers those has exactly two factors / divisors, 
    1 and the number itself are called prime number. 

---

### Extraction of Digits
TC = O(log10(n))

if n = 1234\
output : 1 2 3 4

```cpp
vector<int> v;
while (n)
{
    v.push_back(n % 10);
    n /= 10;
}
sort(v.begin(), v.end());
for (int i = 0; i < v.size(); i++) cout << v[i] << " ";
```

---

### Reverse a Number
TC = O(log10(n))

if n = 1234\
output : 4321

```cpp
int revNum = 0;
while (n)
{
    int lastDigit = n % 10;
    n /= 10;
    revNum = (revNum * 10) + lastDigit;
}
cout << revNum;
```
---

### Check Palindrome
TC = O(log10(n))

if n = 121, then revNum = 121, and this is a palindrome.\
but if n = 123, then revNum = 321, and this is not a palindrome.

```cpp
int tmp = n;
int revNum = 0;
while (n)
{
    int lastDigit = n % 10;
    n /= 10;
    revNum = (revNum * 10) + lastDigit;
}
if (revNum == tmp) cout << "Palindrome";
else cout << "Not a Palindrome";
```

---

### Armstrong Number
TC = O(log10(n))

if n = 371, then 371 = 3^3 + 7^3 + 1^3\
but if n = 35, then 35 != 3^3 + 5^3

```cpp
int tmp = n;
int sum = 0;
while (n)
{
    int last = n % 10;
    n /= 10;
    sum = sum + (last * last * last);
}
if (sum == tmp) cout << "Armstrong Number";
else cout << "Not a Armstrong Number";
```

---

### Print all divisors / factors

if n = 36, then divisors are 1, 2, 3, 4, 6, 9, 12, 18, 36

Bruteforce Approach:\
TC = o(n)

```cpp
for(int i = 1; i <= n ; i++)
{
    if(n % i == 0) cout << i << " ";
}
```

Optimal Approach:

```cpp
vector<int> v;
// O(sqrt(n))
for (int i = 1; i * i <= n; i++)
{
    if (n % i == 0)
    {
        v.push_back(i);
        if (n / i != i) v.push_back(n / i);
    }
}
// O(nlog(n))
// O(number of factors * log(number of factors))
sort(v.begin(), v.end());
// O(number of factors)
for (int i = 0; i < v.size(); i++) cout << v[i] << " ";
```

---

### Prime Number
TC = O(sqrt(n))

```cpp
bool isPrime = false;
if (n < 2) isPrime = false;
else
{
    int cnt = 0;
    for (int i = 2; i * i <= n; i++)
    {
        if (n % i == 0) cnt++;
    }
    if (cnt == 0) isPrime = true;
}
if (isPrime) cout << "Prime Number";
else cout << "Not a Prime Number";
```

Another Approach:

```cpp
int cnt = 0;
for (int i = 1; i * i <= n; i++)
{
    if (n % i == 0)
    {
        cnt++;
        if (n / i != i) cnt++;
    }
}
if (cnt == 2) cout << "Prime Number";
else cout << "Not a Prime Number";
```
