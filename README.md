# Code Challanges
### Why show solutions to code?
These challenges are to display an ongoing investment in understand a code language and tackling challenges. These show the skills to common problems I have and can show you where I am on a variety of concepts.

## Challenge 1
### Question
[Link to Challenge](https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions/javascript)


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

## Challenge 2
### Question
[Link to Challenge](https://www.codewars.com/kata/5432fd1c913a65b28f000342/solutions/javascript)

Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

Example:

multiplication_table(3,3)

1 2 3
2 4 6
3 6 9

-->[[1,2,3],[2,4,6],[3,6,9]]

Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column.



### My Solution

```javascript
function multiplicationTable(row,col){
  var array = [];
  for (var i = 1; i <= row; i++){
    var array2 = [];
     for (var j = 1; j <= col; j++){
          array2.push(j * i);
        }
    array.push(array2);
  }
  return array;
}

```