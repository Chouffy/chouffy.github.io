Is a human-friendly data serialization language.
Used in [[Obsidian]] or [[Home Assistant]]
## General
* In [[Markdown]] [[Front Matter]]: starts and end with `---`
* Syntax: `key: value`
* Whitespace (2 spaces) indentation is used to denote structure, but number of space is irrelevant
* Tabs are not indentation
* Lists members are denoted in `-`

```yaml
# This is a comment
simple_key: value
```
## Lists
```yaml
list_inline: [apple, pears, oranges]
list_indented:
  - apples
  - pears
  - oranges
women:
  - Mary Smith
    age: 28
    height: 180
  - Susan Williams
```
## References
* [Tutorialsoint YAML](https://www.tutorialspoint.com/yaml/)
