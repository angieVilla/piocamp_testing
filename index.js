var buttonGuess = document.getElementById("guess");
var number = document.getElementById("number");
var list = document.getElementById("list");

var rta ="";

buttonGuess.addEventListener("click", function () {
  newNumber = number.value;
  result = guess(newNumber);

  console.log(newNumber);
  rta=result;
  list.innerHTML += `
  <tr>
    <td>${newNumber}</td>
    <td>${result}</td>
  </tr>
  `;

  
  

  $( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000,
        height : 400,
        width : 600
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
    $( "#dialog" ).dialog( "option", "width", 500 );
 
    if(rta == 'XXXX') {
      $("#dialog").dialog( "open" );      
    };
    
  });

  // if ($("#dialog").parent().length > 0 ) {
  //   $("#dialog").parent().css("width","500px");
  //   }
});

