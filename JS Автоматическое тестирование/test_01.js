if (capitalize('hello') !== 'Hello') {
  // Если результат функции не равен ожидаемому значению
  // Выбрасываем исключение и завершаем выполнение теста
  throw new Error('Функция работает неверно!');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает неверно!');
}

// для примера
import assert from 'assert';
assert.equal(capitalize('hello'), 'Hello');
assert.deepEqual({}, {}); // всё ок
assert.notEqual(actual, expected);
assert.notDeepEqual(actual, expected);

assert.deepEqual(take([1, 2, 3]), [1]);
assert.deepEqual(take([1, 2, 3], 2), [1, 2]);
assert.deepEqual(take([], 2), []);
assert.deepEqual(take([4, 3], 9), [4, 3]);

import assert from 'power-assert';

// Весь код остаётся тем же самым
const user = {
  name: 'Madonna',
  friends: ['Kate', 'Michel'],
  email: 'madonna@example.com'
};

// Интерфейс библиотеки power-assert на 100% совместим со встроенным модулем assert.
assert(user.name === 'Michel');

assert(indexOf([1, 2, 1, 2], 2) === 1);
assert(indexOf([2, 'one', 'cat', false], 8) === -1);
assert(indexOf([1, 2, 1, 2], 2, 2) === 3);

test('without', () => {
  expect(without([2, 1, 2, 3], 1, 2)).toStrictEqual([3]);
  expect(without([2, 1, 2, 3])).toStrictEqual([2, 1, 2, 3]);
  expect(without([], 1, 2)).toStrictEqual([]);
});

test('gt', () => {
  expect(gt(3, 1)).toBeTruthy();
  expect(gt(3, 3)).not.toBeTruthy();
  expect(gt(1, 3)).not.toBeTruthy();
});

import makeStack from '../src/stack';

test("stack's main flow", () => {
  const stack = makeStack();
  // Добавляем два элемента в стек и затем извлекаем их
  stack.push('one');
  stack.push('two');
  expect(stack.pop()).toEqual('two');
  expect(stack.pop()).toEqual('one');
});

test('isEmpty', () => {
  const stack = makeStack();
  expect(stack.isEmpty()).toBe(true);
  stack.push('two');
  expect(stack.isEmpty()).toBe(false);
  stack.pop();
  expect(stack.isEmpty()).toBe(true);
});

test('pop in empty stack', () => {
  const stack = makeStack();
  // Вызов метода pop обёрнут в функцию, иначе матчер не сможет перехватить исключение
  expect(() => stack.pop()).toThrow();
});

// *************************************************************************************
let now;
let counter = 0;

// Запускается перед каждым тестом
beforeEach(() => {
  now = new Date();
  counter += 1;
});

test('first example', () => console.log(now, counter));
test('second example', () => console.log(now, counter));
// *************************************************************************************
