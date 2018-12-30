const sum = require('../sum');
const diff = require('../diff');

test('Проверяем функцию сложения', () => {
	for(let a = 1; a <= 10; a++) {
		for (let b = 1; b <= 10; b++) {
			expect(sum(a, b)).toBe(a + b);
		}
	}
})

test('присваивание объекту', () => {
  const data = {один: 1};
  data['два'] = 2;
  expect(data).toEqual({один: 1, два: 2});
});

test('Проверяем функцию вычитания', () => {
	for(let a = 10; a <= 20; a++) {
		for (let b = 0; b <= 9; b++) {
			expect(diff(a, b)).toBe(a - b);
		}
	}
})

test('сложение положительных чисел не равно 20', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(200);
    }
  }
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('ноль', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});


test('один умножить на два', () => {
  const value = 1 * 2;
  expect(value).toBeGreaterThan(1);
  expect(value).toBeGreaterThanOrEqual(1.5);
  expect(value).toBeLessThan(4);
  expect(value).toBeLessThanOrEqual(2.5);
  expect(value).toBe(2);
  expect(value).toEqual(2);
});


test('adding floating point numbers', () => {
  const value = 0.5 + 0.31;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.81); // This works.
});


test('на окне растёт цветок', () => {
  expect('на окне растёт').not.toMatch(/цветок/);
});

test('но есть "кот" в слове скот', () => {
  expect('скот').toMatch(/кот/);
});


const листПокупок = [
  'диарея',
  'изжога',
  'икота',
  'колики',
  'метеоризм',
];

test('есть ли в листеПокупок икота', () => {
  expect(листПокупок).toContain('икота');
});