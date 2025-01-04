---
title: Prefix Infix and Postfix Conversion
date: 2025-01-04
categories: [Competitive Programming Resources, Stack and Queue]
tags: [stack and queue, dsa]
---
### Operator Priority and Expression Conversions

- **Operators**: `+`, `-`, `*`, `/`, `^`
- **Operands**: `A-Z`, `a-z`, `0-9`

**Decreasing Order of Priority** : Assume the levels of priority -

| Operator      | Priority |
|---------------|----------|
| `^`           | 3        |
| `* /`         | 2        |
| `+ -`         | 1        |
| Anything else | -1       |

### Expression Types

1. **Infix**
    - **Format**: Operators are placed between operands.
    - **Example**: `(p + q) * (m - n)`

2. **Prefix**
    - **Format**: Operators are placed before operands.
    - **Example**: `* + pq - mn`

3. **Postfix**
    - **Format**: Operators are placed after operands.
    - **Example**: `pq + mn - *`

### Uses

- **Infix**: Used in most programming languages.
- **Postfix**: Used in stack-based calculators.
- **Prefix**: Used in Lisp programming and tree data structures.

---

### Infix to Postfix Conversion

Example : Convert the Infix expression `a + b * (c ^ d - e)`

| Index | Stack       | Answer       | Note                                                                |
|-------|-------------|--------------|---------------------------------------------------------------------|
| a     |             | `a`          | Add operand `a` directly to the answer.                             |
| +     | `+`         | `a`          | Push operator `+` onto the stack.                                   |
| b     | `+`         | `ab`         | Add operand `b` directly to the answer.                             |
| *     | `+ *`       | `ab`         | Push operator `*` onto the stack (higher priority than `+`).        |
| (     | `+ * (`     | `ab`         | Push opening parenthesis `(` onto the stack.                        |
| c     | `+ * (`     | `abc`        | Add operand `c` directly to the answer.                             |
| ^     | `+ * ( ^`   | `abc`        | Push operator `^` onto the stack (highest priority).                |
| d     | `+ * ( ^`   | `abcd`       | Add operand `d` directly to the answer.                             |
| -     | `+ * ( -`   | `abcd^`      | Pop `^` from the stack to the answer as `-` has lower priority.     |
| e     | `+ * ( -`   | `abcd^e`     | Add operand `e` directly to the answer.                             |
| )     | `+ *`       | `abcd^e-`    | Pop operators from the stack to the answer until `(` is found.      |
|       |             | `abcd^e-*+`  | Pop remaining operators `*` and `+` from the stack to the answer.   |

- **Note**: When a closing bracket `)` is found, pop all operators from the stack until an opening bracket `(` is found.

```cpp
int priority(char ch) 
{
    if (ch == '^') return 3;
    else if (ch == '*' || ch == '/') return 2;
    else if (ch == '+' || ch == '-') return 1;
    else return -1;
}

string infixToPostfix(string s) 
{
    stack<char> st;
    string ans;

    for (int i = 0; i < s.length(); i++) 
    {
        // If the character is an operand, add it to the answer
        if ((s[i] >= 'A' && s[i] <= 'Z') || 
            (s[i] >= 'a' && s[i] <= 'z') || 
            (s[i] >= '0' && s[i] <= '9')) {
            ans += s[i];
        } 

        // If the character is '(', push it onto the stack
        else if (s[i] == '(') 
        {
            st.push(s[i]);
        } 

        // If the character is ')', pop and append until '(' is found
        else if (s[i] == ')') 
        {
            while (!st.empty() && st.top() != '(') 
            {
                ans += st.top();
                st.pop();
            }
            st.pop(); // Remove '(' from the stack
        } 

        // For operators
        else 
        {
            while (!st.empty() && priority(s[i]) <= priority(st.top())) 
            {
                ans += st.top();
                st.pop();
            }
            st.push(s[i]);
        }
    }

    // Append remaining operators in the stack to the answer
    while (!st.empty()) 
    {
        ans += st.top();
        st.pop();
    }

    return ans;
}
```

### 🚩 Other conversions will be added soon :) 