var realNumber = "8752";

//Función que valida si un digito esta repetido
function Repeat(N) {
  return (/([0-9]).*?\1/).test(N)
} 

const guess = function(number1) {
  // TODO: Logic Here
  let result = "";
  console.log(realNumber);

  //Se valida si es un número
  if(parseInt(number1))
  {
    //Se valida la longitud del número
    if(number1.length == 4)
    {
      //Valida si tiene números repetidos
        if(!(Repeat(number1))){        
            let real = realNumber.split("");
            let actual = number1.split("");
            let picas = 0;
            let fijas = 0;
            //actual.forEach(element => 
            for(var x in actual){
              // TODO: Si element esta en real entonces agregue una O o una X a result
              //real.forEach(Element =>
              //for (var y in real)
                //{
                  //Se compara la posición del digito del número actual con la del número real
                  let posAct = real.indexOf(actual[x]);
                  if(posAct >= 0){
                    if(posAct == x)
                    {
                      fijas++;
                    }
                    else{
                      picas++;
                    }
                  }
              // }

                //Si tiene picas y fijas
                if(fijas> 0 && picas > 0){
                  //Recorro las picas para saber cuantas O devolver en result
                  result = '';
                  for(var i = 0; i < picas; i++){
                      result = result + 'O';
                  }

                  //Recorro las fijas para saber cuantas X devolver en result        
                  for(var i = 0; i < fijas; i++){
                      result = result + 'X';
                  }
                }

                  //Si tiene solo fijas
                  if(fijas>0 && picas == 0){
                    /* if(fijas >0 && fijas< 2){
                      result = 'O---';
                    }
                    else if (fijas > 1 && fijas < 3)
                    {
                      result = 'OO--';
                    }
                    else if(fijas > 2 && fijas < 4){
                      result = 'OOO-';
                    }
                    else if(fijas > 3){
                      result = 'OOOO';
                    }
                    else{
                      result='----';
                    } */
                        result = '';
                        //Recorro las picas para saber cuantas O devolver en result
                        for(var i = 0; i < fijas; i++){
                            result = result + 'X';
                        }
                  }

                    //Si tiene solo picas
                    if(fijas == 0 && picas > 0){
                      result = '';
                      for(var i = 0; i < picas; i++){
                        result = result + 'O';
                    }
                    }  
            };
        }
        else{
            result='El número no debe tener digitos repetidos';
        }
    }
    else{
      result = 'El número debe ser de 4 digitos';
    }
  }
  else{
    //Valida si el número viene vacío
    if(number1 == ""){
      result ='Debe digitar el número (no puede estar vacío)';
    }else{
      result ='Debe ingresar Solo números';
    }
    
  }
  return result;
}

const setNumber = function (number1) {
  realNumber = number1;
}

// const ValidNumber = function(number1){
//   if(!(parseInt(number1))){
//     return 'Debe ingresar solo números';
//   }  
//}

module.exports.guess = guess;
module.exports.setNumber = setNumber;