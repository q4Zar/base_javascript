
// ---
// document fourni par defaut
// console.log(document)
// type_of_html_element
// div
// p
// span
// h1
// ul
// li
// example de fonction que document contient
// function createElement(type_of_html_element) {
//     // type_of_html_element = div
//     // document.body ...
// }
// ---


console.log(document)

var amazon_db_telephones = [
    {
        nom: 'DOOGEE S97 PRO',
        prix: 186,
        description: 'android13',
        img: './tel1.webp'
    },
    {
        nom: '',
        prix: 336,
        description: 'android14',
        img: './tel2.webp'
    },
    {
        nom: 'DOOGEE S97 PRO',
        prix: 226,
        description: 'android15',
        img: './tel3.webp'
    },
    {
        nom: 'DOOGEE S97 PRO',
        prix: 186,
        description: 'android13',
        img: './tel1.webp'
    },
    {
        nom: '',
        prix: 336,
        description: 'android14',
        img: './tel2.webp'
    },
    {
        nom: 'DOOGEE S97 PRO',
        prix: 226,
        description: 'android15',
        img: './tel3.webp'
    },
    {
        nom: 'DOOGEE S97 PRO',
        prix: 186,
        description: 'android13',
        img: './tel1.webp'
    },
    {
        nom: '',
        prix: 336,
        description: 'android14',
        img: './tel2.webp'
    },
    {
        nom: 'DOOGEE S97 PRO',
        prix: 226,
        description: 'android15',
        img: './tel3.webp'
    },
    {
        nom: 'DOOGEE S97 PRO',
        prix: 186,
        description: 'android13',
        img: './tel1.webp'
    },
    {
        nom: '',
        prix: 336,
        description: 'android14',
        img: './tel2.webp'
    },
    {
        nom: 'DOOGEE S97 PRO',
        prix: 226,
        description: 'android15',
        img: './tel3.webp'
    },
    {
        nom: 'DOOGEE S97 PRO',
        prix: 186,
        description: 'android13',
        img: './tel1.webp'
    },
    {
        nom: '',
        prix: 336,
        description: 'android14',
        img: './tel2.webp'
    },
    {
        nom: 'DOOGEE S97 PRO',
        prix: 226,
        description: 'android15',
        img: './tel3.webp'
    },
]


amazon_db_telephones.forEach(tel => {
    // display objet var
    // console.log(tel)
    // console.log(tel.nom)
    // console.log(tel.prix)
    // console.log(tel.description)
    // console.log(tel.img)

    // je cre depuis le javascript tous les elements html necessaires pour reproduire le template de html de la carte du telephone
    var div_amazon_tel = document.createElement('div')
    // <div></div>
    div_amazon_tel.style = "border: 1px solid black; width: 10vw;"
    // <div style="border: 1px solid black; width: 10vw;"></div>
    div_amazon_tel.classList.add("amazon_tel_card_template")
    // <div class="amazon_tel_card_template"></div>

    //
    var img_amazon_tel = document.createElement('img')
    img_amazon_tel.src = tel.img// https://blabla/tel2.jpg
    console.log(img_amazon_tel)
    console.dir(img_amazon_tel)
    console.log(img_amazon_tel.baseURI)
    // console.log(img_amazon_tel.height)
    // img_amazon_tel.width = '300px'
    img_amazon_tel.style = 'width: 100%;'

    var br_jump_1 = document.createElement('br')

    var a_amazon_tel_price = document.createElement('a')
    a_amazon_tel_price.innerText = tel.prix
    // console.dir(a_amazon_tel_price)

    var br_jump_2 = document.createElement('br')

    var a_amazon_tel_description = document.createElement('a')
    a_amazon_tel_description.innerText = tel.description
    a_amazon_tel_description.style = 'font-size: 10px;'

    div_amazon_tel.appendChild(img_amazon_tel)
    div_amazon_tel.appendChild(br_jump_1)
    div_amazon_tel.appendChild(a_amazon_tel_price)
    div_amazon_tel.appendChild(br_jump_2)
    div_amazon_tel.appendChild(a_amazon_tel_description)

    document.body.appendChild(div_amazon_tel)

})