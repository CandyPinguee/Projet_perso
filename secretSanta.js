//Je créer un tableau vide pour stocker les noms qui seront rentrés dans l'input
let usersName= [];
let nameGame= [];
//Je créer une fonction qui génère de nouveau input pour entrer des participants
function ajoutName() {

  //Je créer des variables qui ont pour valeur l'ID des boutons sur la page HTML
  let button = document.getElementById('valid');
  let buttonTwo= document.getElementById("suppName");
  let yourName;

  //Je créer un évènement avec mon bouton, qui ajoute un nouvelle input à chaque click
  button.addEventListener('click', event => {
    yourName= document.getElementById("in").value;
    usersName.push(yourName);
    nameGame.push(yourName);
    displayName();
    console.log(usersName);
    console.log(nameGame);
  });
  
  //Je créer un évènement avec mon bouton qui supprime le dernier nom de la page et du tableau
  buttonTwo.addEventListener('click', event => {
    usersName.pop();
    nameGame.pop();
    displayName();
  });
  
  return usersName;
} 

ajoutName();

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

      document.getElementById("result").innerHTML+= usersName[i] + "  --->  " + nameGame[randomName] + "<br><br>";
      nameGame.splice(randomName, 1);
      console.log(nameGame);
      
    }
  });
}

secretName();