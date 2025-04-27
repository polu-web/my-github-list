// 1. All the even numbers below 50
var arr = [];
for (var i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//-or--

for (var i = 0; i <= 50; i += 2) {
    console.log(i);
}

// 2. All the odd numbers below 40:

for (var i = 1; i <= 40; i += 2) {
    console.log(i)
}

// 3. All the even numbers below 40 (inclusive 40) in reverse order

console.log("All the even numbers below 40 (inclusive 40) in reverse order: \n");
for (var i = 40; i >= 0; i -= 2) {
    console.log(i);
}

// 4. Enter a number n and print all the odd numbers up to n

var n = parseInt(prompt("enter any number :"));
for (var i = 1; i <= n; i += 2) {
    console.log(i)
}

// 5. Enter a number n and print all even numbers below n in reverse

var n = parseInt(prompt("enter any number :"));
for (var i = n; i >= 0; i -= 2) {
    console.log(i);
}


//6. 2, 5, 8, 11, 14, .... <100

console.log("2, 5, 8, 11, 14, .... <100 : ");
for (var i = 2; i < 100; i += 3) {
    console.log(i);
}


//  2, 5, 8, 11, 14,.... up to 10 terms

var num = 2;
for (var i = 1; i <= 10; i++) {
    console.log(num);
    num += 3;
}

//---or---

var num = 2;
var result = [];

for (var i = 1; i <= 10; i++) {
    result.push(num);
    num += 3;
}

console.log(result);


// 8. 1, 2, 4, 8, 16, ..... < 100

var result = [];

for (var i = 1; i < 100; i = i * 2) {
    result.push(i);
}
console.log(result);

//9. 1, 2, 4, 8, 16, ..... up to 10 terms

var num = 1;

for (var i = 1; i <= 10; i++) {
    console.log(num);
    num = num * 2;
}

// 10. 5, 10, 15, 20, 25, .... up to 10 terms

for (var i = 1; i <= 10; i++) {
    console.log(i * 5);
}

//  11. 1, -2, 3, -4, 5, -6.... up to 10 terms
var arr = [];
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        arr.push(-i);
    } else {
        arr.push(i);
    }
}
console.log(arr);


// 12. -1, 2, -3, 4, -5.... up to 10 terms

var arr = [];
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        arr.push(i);
    } else {
        arr.push(-i);
    }
}
console.log(arr);

//13. 3, -7, 11, -15.... below 50

var arr = [];

for (var i = 3; i < 50; i += 4) {
    if (((arr.length + 1) % 2) === 0) {
        arr.push(-i);
    } else {
        arr.push(i)
    }
}
console.log(arr);

// 14. -4, 7, -10, 13.... up to 20 terms
var result = [];
var num = -4;

for (var i = 1; i <= 20; i++) {
    result.push(num);

    if (num < 0) {
        num = Math.abs(num) + 3;
    } else {
        num = -(num + 3);
    }
}

console.log(result);


//// 15. 3, 6, -9, 12, 15, -18... below 50

var arr = [];
for (var i = 3; i < 50; i += 3) {
    if (i % 9 === 0) {
        arr.push(-i);
    } else {
        arr.push(i)
    }
}
console.log(arr);

//16. -4, -8, 12, -16, -20, 24.... 20 terms



// 17. 1, 0, 1, 0, 1, 0, .... 20 terms

var arr = [];

for (var i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        arr.push(0);
    } else {
        arr.push(1);
    }
}
console.log(arr);

// 18. 0, 1, 0, 1, 0, 1, .... 20 terms

var arr = [];

for (var i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        arr.push(0);
    } else {
        arr.push(1);
    }
}
console.log(arr);

//----or-----

var arr = [];
for (var i = 0; i < 20; i++) {
    arr.push(i % 2 === 0 ? 0 : 1);
}
console.log(arr);

// 19. 1, 1, 0, 0, 1, 1,.... 20 terms


var result = [];
for (var i = 0; i < 20; i++) {
    if (i % 4 === 0 || i % 4 === 1) {
        result.push(1);
    } else {
        result.push(0);
    }
}
console.log(result);

// 20. 5, 8, -11, 14, 17, -20, .... 15 terms

// 21. -11, -16, 21, -26, -31.... 15 terms

var result = [];
var num = -11;
for (var i = 0; i < 15; i++) {
    result.push(num);
    if (i % 3 === 0 || i % 3 === 2) {
        num = -(Math.abs(num) + 5);
    } else {
        num = Math.abs(num) + 5;
    }
}
console.log(result);

// 22. 2, 4, 7, 11, 16, .... 10 terms
var result = [];
var num = 2;
for (var i = 0; i < 10; i++) {
    result.push(num);
    num = num + (i + 2);
}
console.log(result);

// 23. 1, 5, 10, 16, 23.... 10 terms

var result = [];
var num = 1;
for (var i = 0; i < 10; i++) {
    result.push(num);
    num = num + (i + 4);
}
console.log(result);

// 24. 1, 4, 9, 16, ... 15 terms
var result = [];
for (var i = 1; i < 15; i++) {
    result.push(i * i);
}
console.log(result);

// 25. 0, 3, 10, 17... 15 terms



// 26. 5, 7, 11, 17... 10 terms

var arr = [];
var num = 5;
var inc = 2;

for (var i = 0; i < 10; i++) {
    arr.push(num);
    num += inc;
    inc += 2;
}
console.log(arr);

// 27. 0, 1, 1, 2, 3, 5, 8,... 10 terms (Fibonacci series)

var arr = [0, 1];
for (var i = 2; i < 10; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
}
console.log(arr);

// 28. 1, 11, 111, ... upto 5 terms

var arr = [];
var num = 1;

for (var i = 0; i < 5; i++) {
    arr.push(num);
    num = num * 10 + 1;
}
console.log(arr);

// 29. 1, 12, 123, ... upto 5 terms

var arr = [];
var num = 1;

for (var i = 0; i < 5; i++) {
    arr.push(num);
    num = num * 10 + (i + 2);
}
console.log(arr);

// 30. 1, 13, 135, ... upto 4 terms

var arr = [];
var num = 1;
var add = 3;

for (var i = 0; i <= 4; i++) {
    arr.push(num);
    num = num * 10 + add;
    add += 2;
}
console.log(arr);

// 31. 1, 22, 333... upto 5 terms

// 32. 9, 99, 999, ... upto 5 terms

var arr = [];
var num = 9;

for (var i = 0; i < 5; i++) {
    arr.push(num);
    num = num * 10 + 9;
}
console.log(arr);

//34. Input a term say x and then print: 1, x, x², x³, .... upto 5 terms

var arr = []
var x = parseInt(prompt("enter a value for x : "));

for (var i = 0; i < 5; i++) {
    arr.push(x**i);

}
console.log(arr);

// 35. Print the sum of the series: 6, 7, 16, 17, 22, 25, 27, 28

var series = [6, 7, 16, 17, 22, 25, 27, 28];
sum=0;
for(var i=0;i<series.length;i++){
    sum+=series[i];
}
console.log("Sum of the series is:", sum);

// 37. Sum of the series: 1 + 1/2 + 1/3 + ... + 1/n

var n = parseInt(prompt("Enter the value of n:"));
var sum = 0;

for (var i = 1; i <= n; i++) {
console.log("1 / ",i,"+");
  sum += 1 / i;
}

console.log("Sum of the series is:", sum);

// 42. Series: 1×2 + 2×3 + 3×4 + ... up to n terms

var n = parseInt(prompt("Enter number of terms:"));
var sum = 0;
var series = "";

for (var i = 1; i <= n; i++) {
  series += i + "×" + (i + 1);
  sum += i * (i + 1);
  if (i < n) {
    series += " + ";
  }
}

console.log("Series:", series);
console.log("Sum of the series is:", sum);

    