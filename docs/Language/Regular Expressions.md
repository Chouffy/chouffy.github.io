---
aliases:
  - RegEx
---
Is a [[programming language]] used to search pattern inside a text
## References
- [RegExr](https://regexr.com/) to visually build and test expressions.
- [Search flags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags)
## Cheatsheet
From [RegExr](https://regexr.com/)

| Character                     | Meaning                            |
| ----------------------------- | ---------------------------------- |
| **Character classes**         |                                    |
| `.`                           | any character except newline       |
| `\w\d\s`                      | word, digit, whitespace            |
| `\W\D\S`                      | not word, digit, whitespace        |
| `[abc]`                       | any of a, b, or c                  |
| `[^abc]`                      | not a, b, or c                     |
| `[a-g]`                       | character between a & g            |
| Anchors                       |                                    |
| `^abc$`                       | start / end of the string          |
| `\b\B`                        | word, not-word boundary            |
| **Escaped characters**        |                                    |
| `\.\*\\`                      | escaped special characters         |
| `\t\n\r`                      | tab, linefeed, carriage return     |
| **Groups & Lookaround**       |                                    |
| `(abc)`                       | capture group                      |
| `\1`                          | backreference to group #1          |
| `(?:abc)`                     | non-capturing group                |
| `(?=abc)`                     | positive lookahead                 |
| `(?!abc)`                     | negative lookahead                 |
| **Quantifiers & Alternation** |                                    |
| `a*a+a?`                      | 0 or more, 1 or more, 0 or 1       |
| `a{5}a{2,}`                   | exactly five, two or more          |
| `a{1,3}`                      | between one & three                |
| `a+?a{2,}?`                   | match as few as possible           |
| `ab\|cd`                      | match ab or cd   (without the `\`) |
| **Other**                     |                                    |
| `\n\n`                        | Empty line                         |
 