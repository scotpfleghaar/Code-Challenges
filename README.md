# Code Challanges
### Why show solutions to code?
These challenges are to display an ongoing investment in understand a code language and tackling challenges. These show the skills to common problems I have and can show you where I am on a variety of concepts.

## Challenge 1
### Question
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

Examples input/output:

```
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

```

### My Solution

```javascript
function XO(str) {
     return (((str.match(/x/g)|| []).length + (str.match(/X/g) || []).length) == ((str.match(/o/g)|| []).length + (str.match(/O/g) || []).length)) ? true : false;
}
```