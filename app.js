var mangas = [
    {
        nom: 'Naruto',
        img: './tel1.webp'
    }
]
window.localStorage.setItem('mangas', JSON.stringify(mangas));
// mangas = null

function createDomElement(type, classes, id, attributes) {
    var domElement = document.createElement(type)

        if (classes) {
            classes.forEach(domElementClass => {
                domElement.classList.add(domElementClass)
            }) 
        }
    

        domElement.id = id

        if (attributes !== null) {
            for (const [key, value] of Object.entries(attributes)) {
                domElement.setAttribute(key, value)
            }
        }
        // console.log(domElement)
        // console.log('+++')
        return domElement
    }

function createImgElement(link) {
    let img = document.createElement('img')
    img.src = link
    return img
}

function createParagraphElement(text) {
    let p = document.createElement('p')
    p.innertext = text
    return p 
}

function addChildrensToElement(element, childrens) {
    childrens.forEach(child => {
        element.appendChild(child)
    })
}

function addMangaCard(manga, ulMangaList)  {
    // console.log(manga, ulMangaList)
    var liMangaCard = document.createElement('li')
    console.log(liMangaCard)
    var divMangaCard = createDomElement(
        'div', [
            "uk-card",
            "uk-card-default",
            "uk-card-body",
            "uk-text-center",
            "uk-sortable_handle",
        ],
        "mo",
        {}
    )
    var imgMangaCard = createImgElement(manga.img)
    console.log(imgMangaCard)
    var nomMangaCard = createParagraphElement(manga.nom)
    console.log(nomMangaCard)
    addChildrensToElement(
        divMangaCard, [
            imgMangaCard,
            nomMangaCard
        ]
    )
    addChildrensToElement(liMangaCard, [divMangaCard])
    addChildrensToElement(ulMangaList, [liMangaCard])
}

function build() {
    var ulMangaList = createDomElement(
        'ul',
        ["uk-grid-small", "uk-child-width-1-2", "uk-child-width-1_4-4@s"],
        'ulMangas',
        {
            'uk-sortable': 'handle: .uk-sortable-handle',
            'uk-grid': ''
        }
    )
//    console.log(ulMangaList)
    let mangas = JSON.parse(window.localStorage.getItem('mangas'))
    console.log(mangas)
    mangas.forEach(manga => {
        console.log(manga)
        addMangaCard(manga, ulMangaList)
    })
}


function addManga() {
    var getName = document.getElementById('inputName').value
    var getImg = document.getElementById('inputImg').value

    var obj = {
        nom: getName,
        img: getImg
    }
    let mangas = JSON.parse(window.localStorage.getItem('mangas'))
    mangas.push(obj)
    window.localStorage.setItem('mangas', JSON.stringify(mangas))
    var objFromList = mangas.slice(-1)[0]

    var ul = document.getElementById('ulMangas')
    console.log(ul)
    addMangaCard(objFromList, ul)

}

build()
