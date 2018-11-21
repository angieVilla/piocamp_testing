// Import test
let test = require('assert');
var codebreaker = require('../codebreaker');

describe('Test pass', function () {
  it('is true', function () {
    let saludo = "Hola";
    test.equal(saludo, "Hola", "Saludo no es igual a Hola");
  })
})

describe('Codebreaker Test', function () {

  beforeEach(function () {
    codebreaker.setNumber('5612')
  })

  /**** Solo números ****/
  it('Números', function () {
    let result = codebreaker.guess("sfsfsf");
    test.equal(result,'Debe ingresar Solo números','No se ingresaron números');
  })

  /**** Longitud del número ****/
  it('Longitud', function () {
    let result = codebreaker.guess("12345667");
    test.equal(result,'El número debe ser de 4 digitos','No se ingreso un número de 4 digitos');
  })

  /**** Número Vacío ****/
  it('Vacío', function () {
    let result = codebreaker.guess("");
    test.equal(result,'Debe digitar el número (no puede estar vacío)','Se ingreso un vacío');
  })

   /**** Numeros repetidos ****/   
   it('No debe evaluar números repetidos', function () {
    let result = codebreaker.guess("2234");
    test.equal(result, "El número no debe tener digitos repetidos", "Hay números repetidos");
   })

   /**** Contiene un número en la posición equivocada ****/
  it('Debe retornar un O', function () {
    let result = codebreaker.guess("0971");
    test.equal(result, "O", "Tiene al menos un numero correcto en la posicion equivocada");
  })

  /**** Contiene dos números en la posición equivocada ****/
  it('Debe retornar un OO', function () {
    let result = codebreaker.guess("0921");
    test.equal(result, "OO", "Tiene dos números correctos en la posicion equivocada");
  })

  /**** Contiene tres números en la posición equivocada ****/
  it('Debe retornar un OOO', function () {
    let result = codebreaker.guess("2571");
    test.equal(result, "OOO", "Tiene tres números correctos en la posicion equivocada");
  })

  /**** Contiene todos los números en la posición equivocada ****/
  it('Debe retornar un OOOO', function () {
    let result = codebreaker.guess("6521");
    test.equal(result, "OOOO", "Tiene todos los números correctos en la posicion equivocada");
  })

  /**** Contiene un número en la posición correcta y uno en la equivocada ****/
  it('Debe retornar un OX', function () {
    let result = codebreaker.guess("1982");
    test.equal(result, "OX", "Una posición correcta y la otra esta equivocada");
  })

  /**** Contiene dos números en la posición correcta y uno en la equivocada ****/
  it('Debe retornar un OXX', function () {
    let result = codebreaker.guess("5182");
    test.equal(result, "OXX", "Dos en posición correcta y una esta equivocada");
  })

  /**** Contiene dos números en la posición correcta y dos en la equivocada ****/
  it('Debe retornar un OOXX', function () {
    let result = codebreaker.guess("5162");
    test.equal(result, "OOXX", "Dos en posición correcta y dos esta equivocada");
  })

  /**** Contiene tres números en la posición correcta ****/
  it('Debe retornar un XXX', function () {
    let result = codebreaker.guess("5912");
    test.equal(result, "XXX", "Tres en posición correcta");
  })

  /**** Contiene todos los números en la posición correcta ****/
  it('Debe retornar un XXXX', function () {
    let result = codebreaker.guess("5612");
    test.equal(result, "XXXX", "Todos en la posición correcta (GANÖ)");
  })
  
})