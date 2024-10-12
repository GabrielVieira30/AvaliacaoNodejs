class ControllerExercicio {
  Calcular(req, res) {
    try {
      const num1 = req.body.num1;
      const num2 = req.body.num2;
      const result = servico.Calcular(num1, num2);
      res.status(201).json({ message: `Resultado: ${result}` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  Subtrair(req, res) {
    try {
      const num1 = req.body.num1;
      const num2 = req.body.num2;
      const result = servico.Subtrair(num1, num2);
      res.status(201).json({ message: `Resultado: ${result}` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  Dividir(req, res) {
    try {
      const num1 = req.body.num1;
      const num2 = req.body.num2;
      const result = servico.Dividir(num1, num2);
      res.status(201).json({ message: `Resultado: ${result}` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  Radiciar(req, res) {
    try {
      const num = req.body.num;
      const result = servico.Radiciar(num);
      res.status(201).json({ message: `Resultado: ${result}` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  Potencia(req, res) {
    try {
      const num1 = req.body.num1;
      const num2 = req.body.num2;
      const result = servico.Potencia(num1, num2);
      res.status(201).json({ message: `Resultado: ${result}` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = ControllerExercicio;