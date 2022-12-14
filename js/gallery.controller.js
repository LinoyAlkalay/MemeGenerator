'use strict'

function onInit() {
    document.querySelector('.meme-editor').style.display = 'none'
    document.querySelector('.main-gallery').style.display = 'block'
    renderGallery()
}

// DONE: renderGallery presenting all images
function renderGallery() {
    const imgs = getImgs()
    let strHTML = imgs.map(img => `
    <img class="image" data-image="${img.id}" src="img/${img.id}.jpg" onclick="onImgSelect('${img.id}')">
    `)
    document.querySelector('.grid-container').innerHTML = strHTML.join('')
}

// DONE: on img clicked move to the "next" page of meme-edtior
function onImgSelect(imgId) {
    const imgUrl = setImg(imgId)
    initMeme(imgUrl)
}


