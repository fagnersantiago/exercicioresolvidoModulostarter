var inpuName = document.getElementById("user");
var list = document.querySelector("ul");

//function bellow get users

function getUser() {
  var userName = inpuName.value;

  if (!userName) {
    return alert("Preencha o campo para efetuar a busca");
  }

  loading();

  axios
    .get(`https://api.github.com/users/${userName}/repos`)

    .then((response) => {
      getListRepositories(response.data);
    })

    .catch((error) => {
      loadingError(error);
    });

  inpuName.value = "";
}

//function bellow show error if it not find user's repositorie

function loadingError() {
  list.innerHTML = "";
  var userName = inpuName.value;
  var statusError = !userName
    ? "ERRO [404] não foi possível encontrar o usuário"
    : "Sucesso";

  var inputElement = document.createElement("li");
  var inputText = document.createTextNode(statusError);

  inputElement.appendChild(inputText);
  list.appendChild(inputElement);

  
}

// The function bellow render <li> carregando

function loading() {
  list.innerHTML = "";
  var createLoadingElement = document.getElementById("li");
  var createLoadingText = document.createTextNode("...carregando...");

  createLoadingElement = document
    .getElementById("my content")
    .appendChild(createLoadingText);
  list.appendChild(createLoadingElement);
}

// function bellow get all user's repositories
function getListRepositories(repositorios) {
  list.innerHTML = "";

  for (repo of repositorios) {
    var repoElment = document.createElement("li");
    var repoItem = document.createTextNode(repo.name);

    repoElment.appendChild(repoItem);
    list.appendChild(repoElment);
  }
}
