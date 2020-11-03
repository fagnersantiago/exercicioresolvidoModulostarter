
function experience(years) {
  if (years >= 0 && years <= 1) {
    console.log("De 0-1 ano: Iniciante");
  } else if (years >= 1 && years <= 3) {
    console.log("De 1-3 anos: Intermediário");
  } else if (years >= 3 && years <= 6) {
    console.log("De 3-6 anos: Avançado");
  } else if (years >= 7) {
    console.log("De 7 anos acima: Nível Master");
  }
}
var yearsExperience = 10;
experience(yearsExperience);
