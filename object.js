var dictionnaire = {
    prenom: "Damien",
    nomDeFamille: "Delbreil",
    dateDeNaissance: "16 Juin 1989",
    lieuDeNaissance: "Biarritz",
    passeport: {
        id: "12309112381723",
        country: "france"
    },
    childrens: {
        name: "Lucile"
    },
    lieuDeResidence: "Marseille"
}



// Ecrire une fonction qui affiche les elements du dictionnaire
// Declare une fonction
// function <nomDeLaFonction>(<parametreDeLaFonction>)
function displayIdentityFromDict(dict) {
    // Ecris la routine (ce qu'il se passe quand tu l'executes)
    console.log(`Je soussigne ${dict.prenom} ${dict.nomDeFamille} ne le ${dict.dateDeNaissance} a ${dict.lieuDeNaissance}`)
    console.log(`Passeport ID : ${dict.passeport.id}`)
    console.log(`Actuellement a : ${dict.lieuDeResidence}`)
}
displayIdentityFromDict(dictionnaire)

function createElement(type_of_html_element) {
    // document.body ...
}

// function <nomDeLaFunc> (<param1>, <param2>)
function displayIdentityFromParams(prenom, nomDeFamille, dateDeNaissance, lieuDeNaissance) {
    // Ecris la routine (ce qu'il se passe quand tu l'executes)
    console.log(`Je soussigne ${prenom} ${nomDeFamille} ne le ${dateDeNaissance} a ${lieuDeNaissance}`)
}
// on vas utilise precisement chaque element du dictionnaire afin qu'il corresponde aux parametres
displayIdentityFromParams(dictionnaire.prenom, dictionnaire.nomDeFamille, dictionnaire.dateDeNaissance, dictionnaire.lieuDeNaissance)




// afficher chaque entree du dictionnaire qui equivaut a une clef et une valeur (<key>: <value>)
function displayEveryKeyValueFromDict(dict) {
    //
    for (var [key, value] of Object.entries(dict)) {
        // verifier si le type de value est un object (dictionnaire)
        if (typeof value === 'object') {
            // true
            console.log(`object :${key}`)
            for (var [keyPassport, valuePassport] of Object.entries(value)) {
                console.log(`\t${keyPassport}: ${valuePassport}`)
            }
        } else {
            // false
            console.log(`${key}: ${value}`)
        }
    }
}
displayEveryKeyValueFromDict(dictionnaire)