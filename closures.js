function countWrapper() {
  var counter = 0;
  function updateClickCount() {
    ++counter;
  }
  updateClickCount();
  return counter;
}
