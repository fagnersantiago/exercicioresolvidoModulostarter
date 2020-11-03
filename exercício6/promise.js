function checkAge(age) {
  return new Promise((resolve, reject) => {
    age >= 18
      ? resolve(`Você é maior de idade, você tem: ${age} anos`)
      : reject(`Você é menor de idade, você tem: ${age} anos`);
  });
}
checkAge(20)
  .then(function (ofAge) {
    setTimeout(() => {

      console.log(ofAge);
    }, 2000);
  })
  .catch(function (underAge) {
    console.log(underAge);
  });