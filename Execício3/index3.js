
// this function show all usersSkills
function userHasSkills(skills, findSkills){

    if(skills.indexOf(findSkills)  != -1){

        return true;
    } else {
        return false;
    }
}

var skills = ["Java", "JavaScript"]

var result  = userHasSkills(skills, "JavaScript");

console.log(result);