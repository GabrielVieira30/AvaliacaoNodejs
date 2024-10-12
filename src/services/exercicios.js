class ServicoExercicio {
    Calcular(num1, num2) {
      if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Favor informar números");
      }
      return num1 + num2;
    }
  
    Subtrair(num1, num2) {
      if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Favor informar números");
      }
      return num1 - num2;
    }
  
    Dividir(num1, num2) {
      if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Favor informar números");
      }
      if (num2 === 0) {
        throw new Error("Divisão por zero não é permitida");
      }
      return num1 / num2;
    }
  
    Radiciar(num) {
      if (isNaN(num)) {
        throw new Error("Favor informar um número");
      }
      return Math.sqrt(num);
    }
  
    Potencia(num1, num2) {
      if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Favor informar números");
      }
      return Math.pow(num1, num2);
    }
  }
  
  module.exports = ServicoExercicio;