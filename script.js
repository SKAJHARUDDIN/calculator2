// calculator


var a = parseInt(prompt("Enter First Number : "));
var b = parseInt(prompt("Enter Second Number : "));

var sum = a + b;
var sub = a - b;
var mult = a * b;
var div = a / b;
var rem = a % b;


document.write('First Number is = ' +a+ ' and Second Number is = ' +b+ '<br/>');
document.write('<h3>Answers are given below:</h3>');
document.write('<b>Addition</b> of <i>First number</i> and <i>Second number</i> is ' + sum + '.<br/>');
document.write('<b>Subtraction</b> of <i>First number</i> and <i>Second number</i> is ' + sub + '.<br/>');
document.write('<b>Multiplication</b> of <i>First number</i> and <i>Second number</i> is ' + mult + '.<br/>');
document.write('<b>Division</b> of <i>First number</i> and <i>Second number</i> is ' + div + '.<br/>');
document.write('<b>Remainder</b> of <i>First number</i> and <i>Second number</i> is ' + rem + '.<br/>');
