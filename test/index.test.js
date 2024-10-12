describe('Testes do primeiro exercício', () => {
   // ...
 
   it('Should subtract two numbers', () => {
     const result = servico.Subtrair(2, 1);
     expect(result).toBe(1);
   });
 
   it('Should divide two numbers', () => {
     const result = servico.Dividir(4, 2);
     expect(result).toBe(2);
   });
 
   it('Should throw an error when dividing by zero', () => {
     const result = () => servico.Dividir(4, 0);
     expect(result).toThrow('Divisão por zero não é permitida');
   });
 
   it('Should calculate the square root of a number', () => {
     const result = servico.Radiciar(4);
     expect(result).toBe(2);
   });
 
   it('Should calculate the power of two numbers', () => {
     const result = servico.Potencia(2, 3);
     expect(result).toBe(8);
   });
 });