import f from './main';

test('show "Hello World!"', () => {
	expect(f()).toBe('Hello World!');
});