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
## Challenge 3
### Question


Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

Ex:

```javascript
dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
```



### My Solution

```javascript
function dashatize(num) {
    if (!isNaN(num)) {
        num = num > 0 ? num : num *= -1;
        var output = num.toString().split('');
        for (var i = 0, j = output.length; i < j; i++) {
            console.log(i);
            if (((output[i]) % 2 != 0) && (i != j - 1)) {
                output[i] = (output[i] + "-");
            }
            if (((output[i]) % 2 != 0) && ((output[i - 1]) % 2 == 0)) {
                output[i] = ("-" + output[i]);
            }
        }
        return output.join('');
    }
    return num.toString();
}
```

## Challenge 4
### Question


You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

Examples:

```
Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
```

Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

Output

The middle character(s) of the word represented as a string.

### My Solution

```javascript
function getMiddle(s) {
    const a = s.split('');
    for (var i = 0, j = a.length; i < j; i++) {
        return (j % 2 == 0) ? (a[(j / 2) - 1]) + (a[(j / 2)]) : (a[Math.floor(j / 2)]);
    }
}
```

## Challenge 5
### Question


In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

```javascript
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```

### My Solution

```javascript
highAndLow = (n) => {
    return Math.max.apply(null, n.split(' ')) + " " + Math.min.apply(null, n.split(' '));
};
```
## Challenge 6
### Question


Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

```
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
```

### My Solution

```javascript
String.prototype.toJadenCase = function () {
    var a = this.split(' ');
    for (var i = 0; i < a.length; i++) {
        a[i] = a[i].replace(a[i].charAt(0), a[i].charAt(0).toUpperCase());
    }
    return a.join(' ');
};
```