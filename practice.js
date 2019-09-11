// Classes vs Prototypal Inheritance

class TestClass {
  constructor(foo, bar) {
    this.foo = foo;
    this.bar = bar;
  }

  getFoo() {
    return this.foo;
  }
}

const varTestClass = new TestClass('foo param', 'bar param');
console.log(varTestClass.getFoo);
