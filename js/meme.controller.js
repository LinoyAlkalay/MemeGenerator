'use strict'

let gElCanvas
let gCtx

function initMeme(imgUrl) {
    document.querySelector('.main-gallery').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'flex'
    drawImg(imgUrl)

    const elTxtInput = document.querySelector('[name="txt-input"]')
    elTxtInput.addEventListener('keypress', addTextInput)
}

// TODO: Add a text input
function addTextInput() {
    const elTxtInput = document.querySelector('[name="txt-input"]')
    const lineTxt = elTxtInput.value
    if(!lineTxt) return
    const char = lineTxt.charAt(lineTxt.length - 1)
    console.log('char:', char)
    setLineTxt(char)

    renderMeme()
}

// TODO: renders a line of text on Img
function renderMeme() {
    const meme = getMeme()
    const memeLine = meme.lines[0]
    drawText(memeLine, 150, 20)
}

function drawImg(imgUrl) {
    gElCanvas = document.getElementById('meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    _resizeCanvas()
    const img = new Image()
    img.src = imgUrl
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}

function drawText(memeLine, x = 150, y = 20) {
    gCtx.lineWidth = 2
    gCtx.fillStyle = memeLine.color
    gCtx.font = `${memeLine.size}px sans-serif`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(memeLine.txt, x, y)
}

function _resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    const heightRatio = 1.5
    gElCanvas.height = elContainer.offsetHeight * heightRatio
}


