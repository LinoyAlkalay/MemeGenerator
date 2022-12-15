'use strict'

function onInit() {
    document.querySelector('.meme-editor').style.display = 'none'
    document.querySelector('.main-gallery').style.display = 'block'
    document.querySelector('.search-area').style.display = 'flex'
    renderGallery()
}

// DONE: renderGallery presenting all images
function renderGallery() {
    const imgs = getImgs()
    let strHTML = imgs.map(img => `
    <img class="image" src="img/${img.id}.jpg" onclick="onImgSelect('${img.id}')">
    `)
    document.querySelector('.grid-container').innerHTML += strHTML.join('')
}

// DONE: on img clicked move to the "next" page of meme-edtior
function onImgSelect(imgId) {
    document.querySelector('.main-gallery').style.display = 'none'
    document.querySelector('.search-area').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'flex'
    initMeme(imgId)
}

