'use strict'

function onInit() {
    renderGallery()
}

// TODO: renderGallery presenting two images
function renderGallery() {

}

// TODO: on img clicked move to the "next" page of meme-edtior
function onImgSelect(imgID) {
    setImg(imgID)
    renderMeme()
}