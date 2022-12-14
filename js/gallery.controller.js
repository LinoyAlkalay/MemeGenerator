'use strict'

let gElCanvas
let gCtx

function onInit() {
    renderGallery()
}

// DONE: renderGallery presenting all images
function renderGallery() {
    document.querySelector('.meme-editor').style.display = 'none'
    document.querySelector('.main-gallery').style.display = 'block'

    const imgs = getImgs()
    let strHTML = imgs.map(img => `
    <img class="image" data-image="${img.id}" src="img/${img.id}.jpg" onclick="onImgSelect('${img.id}')">
    `)

    document.querySelector('.grid-container').innerHTML = strHTML.join('')
}

// TODO: on img clicked move to the "next" page of meme-edtior
function onImgSelect(imgId) {
    console.log('imgId:', imgId)
    const imgUrl = setImg(imgId)
    console.log('imgUrl:', imgUrl)
    drawImg(imgUrl)

    document.querySelector('.main-gallery').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'block'
    
    gElCanvas = document.getElementById('meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    _resizeCanvas()

    renderMeme()
}

function drawImg(imgUrl) {
    const img = new Image()
    img.src = imgUrl
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}
function _resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}