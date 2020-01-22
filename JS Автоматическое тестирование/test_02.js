// import { cloneDeep } from 'lodash';
// import { _ } from 'lodash';
const _ = require('lodash');

const object = { a: [{ b: { c: 3 } }] };

const deep = _.clone(object);
deep.a[0].b.c = 4;

_.set(object, 'a[0].b.c', 4);

console.log(object.a[0].b.c);
console.log(deep.a[0].b.c);
// deep[a[0].b.c] = 4;

// BEGIN (write your solution here)
test('isEmpty', () => {
  const object = { a: [{ b: { c: 3 } }] };
  const deep = cloneDeep(object);
  deep.a[0].b.c = 4;

  set(object, 'a[0].b.c', 4);
  expect(object).toEqual(deep);
  // set(object, ['x', '0', 'y', 'z'], 5);
  // expect(object.x[0].y.z).toEqual(5);
});
// END

// В Jest покрытие меряется крайне просто.
// npx jest --coverage
