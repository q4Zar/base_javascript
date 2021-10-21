var amazon_db_telephones = [
    {
        nom: 'DOOGEE S97 PRO',
        prix: 186,
        description: 'android13',
        img: './tel1.webp'
    },
    {
        nom: 'SAMSUNG GALAXY A12',
        prix: 336,
        description: 'android14',
        img: './tel2.webp'
    },
]



function createDomElement(type, classes, id, attributes) {
    // 1 ere etape : creer l'element DOM
    // var ulPhoneList = document.createElement('ul')
    var domElement = document.createElement(type)

    // 2 eme etape : ajouter les classes a l'element DOM
    if (classes) {
        console.log('classes')
        classes.forEach(domElementClass => {
            domElement.classList.add(domElementClass)
        })
    }

    // 3 eme etape : ajouter un id a l'element DOM
    domElement.id = id

    // 4 eme etape : ajouter les attributs a l'element DOM
    if (attributes) {
        console.log('attributes')
        for (const [key, value] of Object.entries(attributes)) {
            domElement.setAttribute(key, value)
        }
    }
    return domElement
}


function createImgElement(src, url) {
    let img = document.createElement('img')
    if (src) {
        img.src = src
    } else if (url) {
        img.url = url
    }
    return img
}


function createParagraphElement(text) {
    let p = document.createElement('p')
    p.innerText = text
    return p
}


function addChildrensToElement(element, childrens)  {
    childrens.forEach(child => {
        element.appendChild(child)
    })
}

function addTelephoneCard(tel, ulPhoneList){

    var liPhoneCard = document.createElement('li')

    var divPhoneCard = createDomElement(
        'div',
        [
            "uk-card",
            "uk-card-default",
            "uk-card-body",
            "uk-text-center",
            "uk-sortable-handle",
        ],
        null,
        null
    )

    var imgPhoneCard = createImgElement(tel.img, null)
    var nomPhoneCard = createParagraphElement(tel.nom)
    var prixPhoneCard = createParagraphElement(tel.prix)
    var descriptionPhoneCard = createParagraphElement(tel.description)

    addChildrensToElement(
        divPhoneCard,
        [
            imgPhoneCard,
            nomPhoneCard,
            prixPhoneCard,
            descriptionPhoneCard
        ]
    )
    addChildrensToElement(liPhoneCard, [divPhoneCard])
    addChildrensToElement(ulPhoneList, [liPhoneCard])
}

function build(){

    var ulPhoneList = createDomElement(
        // type
        'ul',
        // classes
        ["uk-grid-small", "uk-child-width-1-2", "uk-child-width-1-4@s"],
        // id
        'ulPhones',
        // attributes
        {
            'uk-sortable': 'handle: .uk-sortable-handle',
            'uk-grid' : ''
        }
    )
    amazon_db_telephones.forEach(tel => {
        addTelephoneCard(tel, ulPhoneList)
    })
    document.body.appendChild(ulPhoneList)
}

build()







function addPhone() {
    var getModel = document.getElementById('inputModel').value
    var getPrice = document.getElementById('inputPrice').value
    var getDescription = document.getElementById('inputDescription').value
    var getImg = document.getElementById('inputImg').value
    var bt = document.getElementById('addPhoneButton')

    var obj = {
        nom: getModel,
        prix: getPrice,
        description: getDescription,
        img: getImg
    }

    // amazon_db_telephones.push(obj)

    var ul = document.getElementById('ulPhones')
    addTelephoneCard(obj, ul)

    // console.log(amazon_db_telephones.length)
    // 'nom: ${getModel.value}', 'prix:${getPrice.value}', 'description:${getDescription.value}', 'img:${getImg.value}'
    // bt.setAttribute("style", `grid-row: ${row};`)
}





