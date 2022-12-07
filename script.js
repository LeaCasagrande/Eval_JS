let space = " ";
let tabUser = [];
let list = document.getElementById('listUsers');

function add(){
    //1. et 2. Créer et afficher des utilisateurs 
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let age = document.getElementById('age').value;

    let eachUser = document.createElement('li');
    eachUser.textContent = nom + space + prenom + space + age;
    list.appendChild(eachUser);
    
    //3. Enregistrer les utilisateurs affichés dans une liste
    tabUser.push("Nom : "+nom+", Prénom : "+prenom+", Age : "+age);
    console.log(tabUser);

    //8. Ajouter un bouton sur chaque ligne 
    let btn = document.createElement('button');
    btn.setAttribute('class','suppr');
    btn.textContent = 'X';
    eachUser.appendChild(btn);
}

//4. Supprimer tous les utilisateurs
function removeAll(){
    while(tabUser.length>0){
        list.lastChild.remove();
        tabUser.pop();
    }
}

//5. Trier la liste en fonction du nom 
function sortName(){
    tabUser.sort();
    console.log(tabUser);
}

//6. Afficher la liste triée

//7. Trier par prénom et âge

//9. Créer un événement sur le bouton
let supprBtn = document.getElementsByClassName('suppr');
console.log(supprBtn);

for(let i=0; i<supprBtn.length; i++){
    supprBtn[i].onclick = function(){
        this.target.parentNode.remove();
    }
}