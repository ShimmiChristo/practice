// ! this is how Object.create() works
function objectCreate(proto) {
  const obj = {};
  Object.setPrototypeOf(obj, proto);
  return obj;
}
