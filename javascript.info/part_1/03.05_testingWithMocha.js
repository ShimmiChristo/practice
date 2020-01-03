/* 
- Behavior Driven Development (BDD)
- Testing Specs


*/

// * testing spec
/* 
  1. what functionality we're describing. 
    * describe("title", function() { ... }) * 
  2. the title of `it` block and a function that tests it
    * it("use case description", function() { ... }) *
  3. the code inside `it` block
    * assert.equal(value1, value2) *
*/
describe('pow', function() {
  it('raises to n-th power', function() {
    assert.equal(pow(2, 3), 8);
  });
});
