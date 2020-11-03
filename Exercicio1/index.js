function returnAdressUser() {
    
  var userAdressData = {
    street: "Rua 66",
    number: "111",
    neighborhood: "cidade universitária",
    city: "Maceio",
    state: "AL",
  };

  var result = `O usuário mora em ${userAdressData.city}/${userAdressData.state},no bairro ${userAdressData.neighborhood}, na rua ${userAdressData.street}, com o número ${userAdressData.number} `;

  console.log(result);
}

returnAdressUser();
