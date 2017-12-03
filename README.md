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

## Challenge 7
### Question


You're laying out a rad pixel art mural to paint on your living room wall in homage to Paul Robertson, your favorite pixel artist.

You want your work to be perfect down to the millimeter. You haven't decided on the dimensions of your piece, how large you want your pixels to be, or which wall you want to use. You just know that you want to fit an exact number of pixels.

To help decide those things you've decided to write a function, is_divisible() that will tell you whether a wall of a certain length can exactly fit an integer number of pixels of a certain length.

Your function should take two arguments: the size of the wall in millimeters and the size of a pixel in millimeters. It should return True if you can fit an exact number of pixels on the wall, otherwise it should return False. For example is_divisible(4050, 27) should return True, but is_divisible(4066, 27) should return False.

Note: you don't need to use an if statement here. Remember that in Python an expression using the == comparison operator will evaluate to either True or False:

```
>>> def equals_three(num):
>>>     return num == 3
>>> equals_three(5)
False
>>> equals_three(3)
True
```

### My Solution

```javascript
function isDivisible(wallLength, pixelSize){
  return wallLength % pixelSize == 0 ? true : false;
}
```

## Challenge 8
### Question


It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, except in C, where, to keep the difficulty at the level of the kata, you are given two parameters, the first a buffer with length exactly the same as the second parameter, the original string. You don't have to worry with strings with less than two characters.

### My Solution

```javascript
removeChar = (str) => {
    str = str.slice(0);
    str = str.slice(1, (str.length - 1));
    return str;
};
```

## Challenge 9
### Question
To find the volume (centimeters cubed) of a cuboid you use the formula:

`volume = Length * Width * Height`

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: the sides must be integers

### My Solution

```javascript
var cubeChecker = function (volume, side) {
    return (volume === (side * side * side) && (volume > 0)) ? true : false;
};

```
## Challenge 10
### Question
Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

For Example:

```
  usdcny(15) // => '101.25 Chinese Yuan'
  usdcny(465) // => '3138.75 Chinese Yuan'
```
The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers shold be reounded to the nearest hundreth (e.g. 21.00 NOT 21.0 or 21) (HINT: google toFixed)

### My Solution

```javascript
function usdcny(usd) {
    return (usd * 6.75).toFixed(2) + " Chinese Yuan";
}

```
## Challenge 11
### Question
You are given two angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

### My Solution

```javascript
otherAngle = (a, b) => {
    return (180 - (a + b));
};

```
## Challenge 12
### Question
Get the number n to return the reversed sequence from n to 1.

Example : n=5 >> [5,4,3,2,1]

### My Solution

```javascript
const reverseSeq = n => {
    var AArray = [];
    for (var i = n; i > 0; i--) {
        let j = i;
        BArray = AArray.push(j);
    }
    return AArray;
};

```
## Challenge 13
### Question
The aspect ratio of an image describes the proportional relationship between its width and its height. Most video shown on the internet uses a 16:9 aspect ratio, which means that for every pixel in the Y, there are roughly 1.77 pixels in the X (where 1.77 ~= 16/9). As an example, 1080p video with an aspect ratio of 16:9 would have an X resolution of 1920, however 1080p video with an aspect ratio of 4:3 would have an X resolution of 1440.

Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer.

### My Solution

```javascript
aspectRatio = (x, y) => {
    return [Math.ceil(y * 1.77777), y];
}

```
## Challenge 14
### Question
You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

### My Solution

```javascript
check = (a, x) => {
    return a.includes(x);
}

```
## Challenge 15
### Question
Given a non-negative integer `n`, write a function `toBinary/ToBinary` which returns that number in a binary format.

### My Solution

```javascript
toBinary = (n) => {
    return parseInt(((n >>> 0).toString(2)));
}

```
## Challenge 16
### Question
The function takes in 2 inputs x and y, and should return x to the power of y

Simple, right? But you're NOT allowed to use Math.pow();

Obs: x and y will be naturals, so DON'T take fractions into consideration;

### My Solution

```javascript
function power(x, y) {
    var num = x;
    if (y > 0) {
        for (var i = 1; i < y; i++) {
            num *= x;
        }
    } else if (y === 0) {
        return 1;
    }
    return num;
}
```
## Challenge 17
### Question
Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.


### My Solution

```javascript
spEng = (s) => {
    return (s.toUpperCase().includes('ENGLISH')) ? true : false;
}

```
## Challenge 18
### Question


### My Solution

```javascript


```