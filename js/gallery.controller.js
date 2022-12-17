'use strict'

function onInit() {
    document.querySelector('.meme-editor').style.display = 'none'
    document.querySelector('.saved-memes').style.display = 'none'
    document.querySelector('.main-gallery').style.display = 'block'
    document.querySelector('.search-area').style.display = 'flex'
    renderGallery()
}

// DONE: renderGallery presenting all images
function renderGallery() {
    const imgs = getImgs()
    const elContainer = document.querySelector('.grid-container')
    if (!imgs.length) {
        elContainer.innerText = 'no search result!'
    } else {
        let strHTML = imgs.map(img => `
        <img class="image" src="img/${img.id}.jpg" onclick="onImgSelect('${img.id}')">
        `)
        elContainer.innerHTML = strHTML.join('')
    }
}

// DONE: on img clicked move to the "next" page of meme-edtior
function onImgSelect(imgId) {
    document.querySelector('.main-gallery').style.display = 'none'
    document.querySelector('.search-area').style.display = 'none'
    document.querySelector('.saved-memes').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'flex'
    const memes = getSaevedMemes()
    if(memes.selectedImgId === imgId) {
        setMeme(imgId)
    } 
    initMeme(imgId)
}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

function onSearch() {
    const searchStr = document.querySelector('[name="gsearch"]').value
    console.log('searchStr:', searchStr)
    const filterBy = setImgsFilter(searchStr)
    renderGallery()

    const queryStringParams = `?keyword=${filterBy.keyword}`
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + queryStringParams
    window.history.pushState({ path: newUrl }, '', newUrl)
}