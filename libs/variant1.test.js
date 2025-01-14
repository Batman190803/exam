const {
    isNumber,
    isBigNumber,
    isComplex,
    isFraction,
    isUnit,
    isString,
    isArray,
    isMatrix,
    isCollection,
    isDenseMatrix,
    isSparseMatrix,
  } = require('./variant1');
  
  
  describe('variant1.js utility functions', () => {
    test('isNumber correctly identifies numbers', () => {
      expect(isNumber(42)).toBe(true);
      expect(isNumber('42')).toBe(false);
      expect(isNumber(null)).toBe(false);
    });
  
    // test('isBigNumber correctly identifies BigNumber-like objects', () => {
    //   const bigNumberMock = { isBigNumber: true, constructor: { prototype: { isBigNumber: true } } };
    //   expect(isBigNumber(bigNumberMock)).toBe(true);
    //   expect(isBigNumber({})).toBe(false);
    //   expect(isBigNumber(null)).toBe(false);
    // });
  
    test('isComplex correctly identifies Complex-like objects', () => {
      const complexMock = Object.create({ isComplex: true });
      expect(isComplex(complexMock)).toBe(true);
      expect(isComplex({})).toBe(false);
      expect(isComplex(null)).toBe(false);
    });
  
    test('isFraction correctly identifies Fraction-like objects', () => {
      const fractionMock = Object.create({ isFraction: true });
      expect(isFraction(fractionMock)).toBe(true);
      expect(isFraction({})).toBe(false);
      expect(isFraction(null)).toBe(false);
    });
  
    test('isUnit correctly identifies Unit-like objects', () => {
      const unitMock = { constructor: { prototype: { isUnit: true } } };
      expect(isUnit(unitMock)).toBe(true);
      expect(isUnit({})).toBe(false);
      expect(isUnit(null)).toBe(false);
    });
  
    test('isString correctly identifies strings', () => {
      expect(isString('hello')).toBe(true);
      expect(isString(123)).toBe(false);
      expect(isString(null)).toBe(false);
    });
  
    test('isArray correctly identifies arrays', () => {
      expect(isArray([])).toBe(true);
      expect(isArray({})).toBe(false);
      expect(isArray(null)).toBe(false);
    });
  
    test('isMatrix correctly identifies Matrix-like objects', () => {
      const matrixMock = { constructor: { prototype: { isMatrix: true } } };
      expect(isMatrix(matrixMock)).toBe(true);
      expect(isMatrix({})).toBe(false);
      expect(isMatrix(null)).toBe(false);
    });
  
    test('isCollection correctly identifies collections', () => {
      const matrixMock = { constructor: { prototype: { isMatrix: true } } };
      expect(isCollection([])).toBe(true);
      expect(isCollection(matrixMock)).toBe(true);
      expect(isCollection({})).toBe(false);
    });
  
    test('isDenseMatrix correctly identifies DenseMatrix-like objects', () => {
      const denseMatrixMock = { isDenseMatrix: true, constructor: { prototype: { isMatrix: true } } };
      expect(isDenseMatrix(denseMatrixMock)).toBe(true);
      expect(isDenseMatrix({})).toBe(false);
      expect(isDenseMatrix(null)).toBe(false);
    });
  
    test('isSparseMatrix correctly identifies SparseMatrix-like objects', () => {
      const sparseMatrixMock = { isSparseMatrix: true, constructor: { prototype: { isMatrix: true } } };
      expect(isSparseMatrix(sparseMatrixMock)).toBe(true);
      expect(isSparseMatrix({})).toBe(false);
      expect(isSparseMatrix(null)).toBe(false);
    });
  });
  