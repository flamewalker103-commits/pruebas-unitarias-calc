const Calculadora = require('../src/calculadora');

describe('Calculadora', () => {
    let calculadora;

    beforeEach(() => {
        calculadora = new Calculadora();
    });

    test('suma 1 + 2 para igualar 3', () => {
        expect(calculadora.sumar(1, 2)).toBe(3);
    });

    test('resta 5 - 2 para igualar 3', () => {
        expect(calculadora.restar(5, 2)).toBe(3);
    });

    test('multiplica 2 * 3 para igualar 6', () => {
        expect(calculadora.multiplicar(2, 3)).toBe(6);
    });

    test('divide 6 / 2 para igualar 3', () => {
        expect(calculadora.dividir(6, 2)).toBe(3);
    });

    test('dividir por cero lanza un error', () => {
        expect(() => calculadora.dividir(6, 0)).toThrow('No se puede dividir por cero.');
    });
});
