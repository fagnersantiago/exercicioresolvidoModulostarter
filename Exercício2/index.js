
// this fuction retruns all pair number between x y 
function returnAllParNumbers(x, y) {

  for (var i = x; i < y; i++) {

    if (i % 2 === 0)

      console.log(`Esse são todos os números pares entre os intervalos x e y ${i}`)
  }

}

returnAllParNumbers(31, 231)