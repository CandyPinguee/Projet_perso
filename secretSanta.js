//Je créer un tableau vide pour stocker les noms qui seront rentrés dans l'input et un dictionnaire pour stocker les paires attribuées
let usersName= [];
let nameGame= [];
let resultFinal= {};

//Je créer une fonction qui génère de nouveau input pour entrer des participants
function addName() {

let button = document.getElementById('valid');
let buttonTwo= document.getElementById("suppName");
let yourName;

button.addEventListener('click', event => {

  yourName= document.getElementById("in").value;
  usersName.push(yourName);
  nameGame.push(yourName);
  displayName();
  console.log(usersName);
  console.log(nameGame);
});
  
buttonTwo.addEventListener('click', event => {

  usersName.pop();
  nameGame.pop();
  displayName();
  console.log(usersName);
  console.log(nameGame);
});
  
} 

//Je créer une fonction qui me permet d'afficher les noms de mon tableau dans la page
function displayName() {
  
  document.getElementById("inputList").innerHTML= "";

  for (i=0; i < usersName.length; i++) {

    document.getElementById("inputList").innerHTML+= usersName[i] + '<br>';
  }
}

//Je créer une fonction qui permet d'attribuer à chaque nom de la liste, un autre nom de la liste de façon aléatoire
function secretName() {

  let gamebutton= document.getElementById("finish");
  
  gamebutton.addEventListener('click', event => {
    
    for (i=0; i < usersName.length; i++) {

      let randomName= Math.floor(Math.random()*nameGame.length);

      while (usersName[i] == nameGame[randomName]) {

        randomName= Math.floor(Math.random()*nameGame.length); 
      }
      
      resultFinal[usersName[i]]= nameGame[randomName];
      nameGame.splice(randomName, 1);
      console.log(nameGame);
      console.log(resultFinal);
    }
    
    winName(resultFinal);
  });
}

//Je créer une fonction qui me permet de lancer un alert, quand je rentre le nom d'un participant, pour qu'il affiche de qui il est le secret santa
function winName(dict) {

  let displaySanta= document.getElementById("displayResult");
  
  displaySanta.addEventListener('click', event => {

    let myName= document.getElementById("selectName").value;
    console.log(dict[myName]);

    if (dict[myName]) {

      alert(dict[myName]);
      console.log(dict);
    } else {
      
      alert("nom inexistant !");
    }
  })
}

addName();
secretName();