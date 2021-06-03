//1er formulaire
const q1 = document.querySelector('#formulaire1')
const q2 = document.querySelector('#formulaire2')
let log = document.querySelector('#log')



//recupère tous les boutons et mets dans une liste
const boutons = document.getElementsByTagName('button')
const button_valider = boutons[0]



//quand on valide questionnaire
button_valider.onclick= function ajouter(){
	alert("Réponse accepté")

    let data = new FormData(q1)
    let output = ""
    for (const entry of data) {
      output = entry[0] + "=" + entry[1] + "\r"
    }
    log.innerText = output

    let data2 = new FormData(q2)
    let output2 = ""
    for (const entry of data2) {
      output2 = entry[0] + "=" + entry[1] + "\r"
    }
    log.innerText = output+ output2
    
    event.preventDefault()

}
