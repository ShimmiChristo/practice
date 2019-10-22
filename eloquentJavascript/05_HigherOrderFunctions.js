function testFn(val, test) {
  if (test(val) == true) {
    return true;
  } else {
    return false;
  }
}

function loop(value, test, body, update) {
  for (var i = 0; i < value; i++) {
    console.log(testFn(value, test));
  }
}
loop(3, n => n > 0, n => n - 1, console.log);
