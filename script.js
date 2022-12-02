let space = " ";
let tabUser = [];

function getInfo(){
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let age = document.getElementById('age').value;

    let list = document.getElementById('listUsers');
    let eachUser = document.createElement('li');
    eachUser.setAttribute('class','suppr')
    eachUser.textContent = nom + space + prenom + space + age;
    list.appendChild(eachUser);
    tabUser.push("Nom : "+nom+"Prénom : "+prenom+"Age : "+age);
    console.log(tabUser)
}

function supprimer(){
    let suppr = document.getElementsByClassName('suppr');
    for(let i = 0; i<suppr.length; i++){
        suppr[i].remove();
    }
}