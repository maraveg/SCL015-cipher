// [Español]
// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
import cipher from '../src/cipher';

describe('cipher', () => {

  it('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    it('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      expect(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

  });

  describe('cipher.decode', () => {

    it('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('should return "DECODIFICAR" for "ZAYKZEBEYWN" with offset 22', () => {
      expect(cipher.decode(22, "ZAYKZEBEYWN")).toBe("DECODIFICAR");
    });

  });


});

