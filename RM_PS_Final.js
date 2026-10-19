// Ans 1
var solveMeFirst = function (a, b) {
  return a + b;
};

// Ans 2
var multiply = function (a, b) {
  return a * b;
};

// Ans 3
var evenOrOdd = function (number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

// Ans 4
var makeNegative = function (number) {
  return -Math.abs(number);
};

// Ans 5
var opposite = function (number) {
  return -number;
};

// Ans 6
var simpleArraySum = function (ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
};

// Ans 7
var sleepIn = function (weekday, vacation) {
  return !weekday || vacation;
};

// Ans 8
var monkeyTrouble = function (aSmile, bSmile) {
  return aSmile && bSmile;
};

// Ans 9
var sumDouble = function (a, b) {
  sum = a + b;
  return sum * 2;
};

// Ans 10

var diff21 = function (n) {
  let diff = n - 21;
  if (n > 21) {
    return diff * 2;
  } else {
    return diff;
  }
};

// Ans 11
var parrotTrouble = function (talking, hour) {
  return talking && (hour < 7 || hour > 20);
};

// Ans 12
var makes10 = function (a, b) {
  return a === 10 || b === 10 || a + b === 10;
};

// Ans 13
var nearHundred = function (n) {
  return Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= 10;
};

// Ans 14
var posNeg = function (a, b, negative) {
  if (!negative) {
    return (a < 0 && b > 0) || (a > 0 && b < 0);
  } else {
    return a < 0 && b < 0;
  }
};

// Ans 15
var notString = function (str) {
  if (str.startsWith("not")) {
    return str;
  } else {
    return "not " + str;
  }
};

// Ans 16
var compareTriplets = function (a, b) {
  let scoreA = 0;
  let scoreB = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      scoreA++;
    } else if (a[i] < b[i]) {
      scoreB++;
    }
  }
  return [scoreA, scoreB];
};

// Ans 17
var aVeryBigSum = function (ar) {
  return ar.reduce((sum, num) => sum + num, 0);
};

// Ans18
var staircase = function (n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let hashes = "#".repeat(i);
    result.push(spaces + hashes);
  }
  return result.join("\n");
};

// Ans 19

var gradingStudents = function (grades) {
  return grades.map((grade) => {
    if (grade < 38) {
      return grade;
    }

    let remainder = grade % 5;
    let diff = 5 - remainder;

    if (diff < 3) {
      return grade + diff;
    }

    return grade;
  });
};

// Ans 20
var timeConversion = function (s) {
  let period = s.slice(-2);
  let hours = parseInt(s.slice(0, 2), 10);
  let minSec = s.slice(2, 8);

  if (period === "PM") {
    if (hours !== 12) {
      hours += 12;
    }
  } else {
    if (hours === 12) {
      hours = 0;
    }
  }

  let formattedHours = hours < 10 ? "0" + hours : "" + hours;

  return formattedHours + minSec;
};

// Ans 21
var repeatStr = function (n, s) {
  return s.repeat(n);
};

// Ans 22
var solution = function (str) {
  return str.split("").reverse().join("");
};

// Ans 23
var positiveSum = function (arr) {
  return arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
};

// Ans 24
var summation = function (num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += i;
  }
  return sum;
};

// Ans 25
var booleanToString = function (b) {
  return b.toString();
};
