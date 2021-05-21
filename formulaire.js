

const prenom = document.querySelector('#name') // selectionne le champ prénom
const nom = document.querySelector('#surname')
const email = document.querySelector('#email')
const role = document.querySelector('#role')
let table = document.querySelector('#table_inscription')
let champ_table = document.querySelector('#table_inscription tbody')

let formulaire = document.querySelector('#formulaire')


//recupère tous les boutons et mets dans une liste
const boutons = document.getElementsByTagName('button')
const button_ajouter = boutons[0]
const button_supprimer = boutons[1]
const time10 =  1000 // les 10 secondes
const time1 = 1000 // 1 sec
let compteur = 1

// crée l'attente des 10 secondes au début du formulaire
let intervalle_ouverture_form = setTimeout (clique_bouton, time10 )

let page = 0
function clique_bouton (){
	button_ajouter.onclick= function ajouter(){
		//permet de savoir si le bouton a été utilisé il y a moins de 10 sec
		if (page === 10 ){
			alert("Attendez les 10 secondes !!")
		}
		alert("Ajout ligne")
		button_ajouter.style.backgroundColor= "#545254"
		compteur = 10
		let i1 = null
		let i2 = null
		let i3 = null
		start()

		page = 10
		let i4 = setTimeout(function () {page =0}, time10)
	}
}

// fct qui ajoute la ligne du tab
function ajout (){
	console.log(prenom.value)
	//console.log(table1.innerHTML) - affiche le code html associé à la table
	//console.log(table1.value) - renvoie undefined
	//console.log(table1) - affiche tout ce qui est lié à la table

	// ajoute le prénom rentré
	let tr = document.createElement("tr")
	let td1 = document.createElement('td')
	td1.textContent = prenom.value
	tr.appendChild(td1)

	// ajoute le nom rentré
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
		champ_table.appendChild(tr)
	}
	else {
		alert("Un champ est vide ! ") //pop up
	}
}

function finish() {
  clearInterval(i2)
  button_ajouter.innerHTML = "Ajouter"
}

function compte() {
    compteur--
    if(compteur === 0){
		finish()
	}
    else {
		//affiche sur le bouton le nb de sec restants
        button_ajouter.innerHTML = "Ajouter (" + compteur + " secondes restantes)"
    }
}

function changement_couleur(){
	//change le bouton de couleur pour dire qu'on ne doit pas appuyer dessus
	button_ajouter.style.backgroundColor= "#d6d3d6"
}

function start(){
	button_ajouter.style.backgroundColor= "#545254"
	// ajoute la ligne du tableau au bout de 10 sec
	i1 = setTimeout(ajout, time10)
	//change l'apparence du bouton
	i3 = setTimeout(changement_couleur, time10)
	//fait le compte à rebours de 10 sec
	i2 = setInterval(compte, time1)
}


button_supprimer.onclick= function supprimer(){
	alert("On supprime ") //pop up
	while (table.firstChild) {
  		champ_table.removeChild(champ_table.firstChild)
	}
}
