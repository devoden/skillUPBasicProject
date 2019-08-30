function plus(){
  var n1, n2;
  n1 = document.getElementById('num1').value;
  n2 = document.getElementById('num2').value;
  n1 = Number(n1);
  n2 = Number(n2);
var result = n1 + n2;
document.getElementById('res').innerHTML = result;
}

function minus(){
  var n1, n2;
  n1 = document.getElementById('num1').value;
  n2 = document.getElementById('num2').value;
  n1 = Number(n1);
  n2 = Number(n2);
var result = n1 - n2;
document.getElementById('res').innerHTML = result;
}

function multi(){
  var n1, n2;
  n1 = document.getElementById('num1').value;
  n2 = document.getElementById('num2').value;
  n1 = Number(n1);
  n2 = Number(n2);
var result = n1 * n2;
document.getElementById('res').innerHTML = result;
}

function divide(){
  var n1, n2;
  n1 = document.getElementById('num1').value;
  n2 = document.getElementById('num2').value;
  n1 = Number(n1);
  n2 = Number(n2);
var result = n1 / n2;
document.getElementById('res').innerHTML = result;
}
