
// Avant tout installer nodejs sur vos machines7
// disponible a cette adresse : https://nodejs.org/en/ version 14

// Declarer une variable
// Nomenclature de la variable
// variable etant une chaine de charactere
var nom = "Ceci est mon nom"
var chaineDeCaracteres = "variable contenant une chaine de caracteres"

// Affichez le contenu des variables grace a console.log
// Methode n1 avec le ${<var>}
console.log(`Contenu de la variable nom = ${nom}`)
console.log(`Contenu de la variable chaineDeCaracteres = ${chaineDeCaracteres}`)
// Methode n2 avec le +
console.log(`Contenu de la variable nom` + nom )
console.log(`Contenu de la variable chaineDeCaracteres = ` + chaineDeCaracteres)

// Presentons nous
var prenom = "Damien"
var nomDeFamille = "DELBREIL"
var dateDeNaissance = "16 Juin 1989"
var lieuDeNaissance = "Biarritz"

// Ecrire une phrase de presentation dans le terminal
console.log(`Je soussigne ${prenom} ${nomDeFamille} ne le ${dateDeNaissance} a ${lieuDeNaissance}`)

// Une variable sert a stocker une information
var vrai = true // booleene : vrai | faux  dans le code (true | false)
console.log(vrai)

var numero = 8 // integer : 8
console.log(numero)

var numeroFloat = 8.268 // float : chiffre avec virgule
console.log(numeroFloat)

var string = "Je suis une phrase"
console.log(string)

var liste = [
    "Javascript", // string
    8, // int
    true // bool
]
console.log(liste)

var listOfString = [
    "Javascript",
    "Python"
]

var dictionnaire = {
    prenom: "Damien",
    nomDeFamille: "Delbreil",
    dateDeNaissance: "16 Juin 1989",
    lieuDeNaissance: "Biarritz",
    // correspond a :
    // "prenom" : "Damien",
    // "nomDeFamille" : "Delbreil",
    // "dateDeNaissance" : "16 Juin 1989",
    // "lieuDeNaissance" : "Biarritz",
}
console.log(dictionnaire)