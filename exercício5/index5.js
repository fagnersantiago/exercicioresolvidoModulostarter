function returnUserSkills(){

    var users = [
        {
            name: "Fagner Santiago",
            skills: ["JavaScript" , "Node Js"]
        },

        {
            name: "Diego Fernandes",
            skills: ["React Native","Node JS", "React Native"]
        }
    ]
    
    
     for(let value of users){
        
     console.log("O", (value.name), "possui as habilidades :", (value.skills.join(' ')))
     
     }
  
}

returnUserSkills();