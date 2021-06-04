const prenom = document.querySelector('#name')
const nom = document.querySelector('#surname')
const email = document.querySelector('#email')
const role = document.querySelector('#role')
let table = document.querySelector('#tableInscription')
let champ_table_i = document.querySelector('#tableInscription tbody')
let formulaire1 = document.querySelector('#formulaire1')

//2ème formulaire
const nom_mouton = document.querySelector('#nom_mouton')
const taille = document.querySelector('#taille')
const date_jour = document.querySelector('#date_jour')
const date_mois = document.querySelector('#date_mois')
const date_annee = document.querySelector('#date_annee')
let table2 = document.querySelector('#table_moutons')
let champ_table_m = document.querySelector('#table_moutons tbody')
let formulaire2 = document.querySelector('#formulaire2')

//recupère tous les boutons et mets dans une liste
const boutons = document.getElementsByTagName('button')
const button_changer = boutons[0]
const button_ajouter_inscription = boutons[1]
const button_supprimer_inscription = boutons[2]
const button_ajouter_moutons = boutons[3]
const button_supprimer_moutons = boutons[4]

let changement = 1
debut ()

//on cache le formulaire mouton
function debut (){
    table2.style.display = "none"
    formulaire2.style.display = "none"
}

// on change de formulaire à afficher
button_changer.onclick= function changer(){
    if (changement%2 === 1){
        //affiichage formulaire mouton
        table.style.display = "none"
        formulaire1.style.display = "none"
        table2.style.display = "inherit"
        formulaire2.style.display = "inherit"
        formulaire2.style.backgroundColor= "#808080"
        table2.style.backgroundColor= "#808080"
        changement = changement +1
    }
    else {
        //affichage formulaire unicef
        table.style.display = "inherit"
        formulaire1.style.display = "inherit"
        table2.style.display = "none"
        formulaire2.style.display = "none"
        formulaire1.style.backgroundColor= "#6633FF"
        table.style.backgroundColor= "#6633FF"
        changement = changement +1
    }
}

//on ajoute une ligne dans inscritpion
button_ajouter_inscription.onclick= function ajouter(){
    alert("Ajout ligne")
    //console.log(table1.innerHTML) - affiche le code html associé à la table
    //console.log(table1.value) - renvoie undefined
    //console.log(table1) - affiche tout ce qui est lié à la table

    // ajoute le prénom rentré
    let tr = document.createElement("tr")
    let td1 = document.createElement('td')
    td1.textContent = prenom.value
    tr.appendChild(td1)

    // ajoute taile rentré
    let td2 = document.createElement('td')
    td2.textContent = nom.value
    tr.appendChild(td2)

    // ajoute l'email rentré
    let td3 = document.createElement('td')
    td3.textContent = email.value
    tr.appendChild(td3)

    // ajoute le role rentré
    let td4 = document.createElement('td')
    td4.textContent = role.value
    tr.appendChild(td4)

    // vérifie qu'aucun champ n'est vide
    if (prenom.value !== "" && nom.value !== "" && email.value !== ""){
        champ_table_i.appendChild(tr)
    }
    else {
        alert("Un champ est vide ! ") //pop up
    }
}


//on supprime les lignes du tableau inscirption
button_supprimer_inscription.onclick= function supprimer(){
    alert("On supprime ") //pop up
    while (table.firstChild) {
        champ_table_i.removeChild(champ_table_i.firstChild)
    }
}

function description(){
    // descriptionpar rapport à l'année
    let des1
    let des_date
    let date_now = new Date ()
    let jour_auj = date_now.getDate() // jour
    let mois_auj = date_now.getMonth()+1 // mois
    let annee_auj = date_now.getFullYear() // annee
    // si la date saisie est après aujourd'hui
    if ((date_jour.valueAsNumber>jour_auj && date_mois.valueAsNumber===mois_auj && date_annee.valueAsNumber===annee_auj) ||
        (date_mois.valueAsNumber>mois_auj && date_annee.valueAsNumber===annee_auj) ||
        date_annee.valueAsNumber>annee_auj){
        des_date = ", tout droit sorti de Cyberpunk,"
    }
    else {
        // si il est là depuis plus d'1 an
        if (annee_auj +1 > date_annee){
            des_date = ", tout droit sorti de Red dead Redemption 2,"
        }
        else {
            des_date = ", votre collocataire,"
        }
    }

    // description par rapport à la taille
    let des_taille
    if (taille.valueAsNumber > 200){
        des_taille = " est obèse, pensez à lui faire faire du sport"
    }
    else {
        des_taille = " est un peu maigre, n'héistez pas à perdre vos cheveux pour la faire grossir"
    }

    des1 = nom_mouton.value + des_date + des_taille

    if (taille.valueAsNumber > 400){
        des1 = "On ne vous dit pas de vous débérassaez de " +nom_mouton.value+ "mais"
    }
    return des1
}

//on ajoute une ligne dans tableau mouton
button_ajouter_moutons.onclick= function ajout_mouton(){
    alert("Ajout ligne")

    // ajoute le prénom rentré
    let tr = document.createElement("tr")
    let td1 = document.createElement('td')
    td1.textContent = nom_mouton.value
    tr.appendChild(td1)

    // ajoute le nom rentré
    let td2 = document.createElement('td')
    td2.textContent = taille.value
    tr.appendChild(td2)

    // ajoute date rentré
    let td3 = document.createElement('td')
    td3.textContent = date_jour.value + "." + date_mois.value + "." + date_annee.value
    tr.appendChild(td3)

    // ajout description
    let td4 = document.createElement('td')
    let des = description()
    td4.textContent = des
    tr.appendChild(td4)

    let td5 = document.createElement('td')
    td5.innerHTML= "<a href='https://www.amazon.fr/s?k=apsirateur&__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss_2'>nous aimons "+ nom_mouton.value+ " mais bon...</a>"
    tr.appendChild(td5)

    // vérifie qu'aucun champ n'est vide
    if (nom_mouton.value !== "" && taille.value !== "" && date_jour.value !== ""
        && date_mois.value !== ""&&date_annee.value !== ""){
        champ_table_m.appendChild(tr)
    }
    else {
        alert("Un champ est vide ! ") //pop up
    }
}

//on supprime les lignes du tableau moutons
button_supprimer_moutons.onclick= function supp_mouton(){
    alert("On supprime ")
    while (table2.firstChild) {
        champ_table_m.removeChild(champ_table_m.firstChild)
    }
}
