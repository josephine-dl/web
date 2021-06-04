//les formulaires
const q1 = document.querySelector('#formulaire1')
const q2 = document.querySelector('#formulaire2')
const q3 = document.querySelector('#formulaire3')
const q4 = document.querySelector('#formulaire4')
const q5 = document.querySelector('#formulaire5')
let resultat = document.querySelector('#resultat')
let photo = document.querySelector('#photo')



//recupère tous les boutons et mets dans une liste
const boutons = document.getElementsByTagName('button')
const button_valider = boutons[0]


//quand on valide le questionnaire
button_valider.onclick= function ajouter(){
    alert("Réponse accepté")

    let data = new FormData(q1)
    let output = ""
    for (const entry of data) {
        // entry[0] : nom de la réponse selectionné
        // entry[1] : valeur de la réponnse selectionné
        output = entry[1]
    }

    let data2 = new FormData(q2)
    let output2 = ""
    for (const entry of data2) {
        output2 = entry[1]
    }

    let data3 = new FormData(q3)
    let output3 = ""
    for (const entry of data3) {
        output3 = entry[1]
    }

    let data4 = new FormData(q4)
    let output4 = ""
    for (const entry of data4) {
        output4 = entry[1]
    }

    let data5 = new FormData(q5)
    let output5 = ""
    for (const entry of data5) {
        output5 = entry[1]
    }


    let res = 0
    if (output ==="vrai"){res ++}else {}
    if (output2 ==="9300"){res ++ }
    if (output3 ==="vrai"){res ++}
    if (output4 ==="faux"){res ++}
    if (output5 ==="90"){res ++}

    resultat.innerText = "Vous avez "+ res +" de bonne(s) réponse(s)"
    // ajout photo via javascript
    //photo.innerHTML= "<img src='costume_de_sailor_moon.png' alt='img_sushi_sailor'>"

    event.preventDefault()

}
