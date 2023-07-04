const { encode, decode } = require('./encodeDecode.js');

describe('Exercicio 3', () => {
  it('Teste se encode e decode são funções.', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });

  it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente.', () => {
    expect(encode('a')).toEqual('1');
    expect(encode('e')).toEqual('2');
    expect(encode('i')).toEqual('3');
    expect(encode('o')).toEqual('4');
    expect(encode('u')).toEqual('5');
  });

  it('Para a função decode, teste se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente.', () => {
    expect(decode('1')).toEqual('a');
    expect(decode('2')).toEqual('e');
    expect(decode('3')).toEqual('i');
    expect(decode('4')).toEqual('o');
    expect(decode('5')).toEqual('u');
  });

  it('Teste se as demais letras e os demais números não são convertidos para cada caso. ', () => {
    expect(decode('6')).toEqual('6');
    expect(decode('7')).toEqual('7');
    expect(encode('q')).toEqual('q');
    expect(encode('w')).toEqual('w');
  });

  it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('Thiago').length).toEqual(6);
    expect(decode('123456').length).toEqual(6);
  });
});
