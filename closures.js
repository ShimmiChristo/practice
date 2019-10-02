function countWrapper() {
  var counter = 0;
  function updateClickCount() {
    ++counter;
  }
  updateClickCount();
  return counter;
}

var closure = function() {
  var counter = 0;
  return updateClickCount() {}
}