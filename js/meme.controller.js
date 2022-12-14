'use strict'

let gElCanvas
let gCtx
let gPos = {
    x: 140,
    y: 80
}

function initMeme(imgUrl) {
    document.querySelector('.main-gallery').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'flex'
    drawImg(imgUrl)

    const elTxtInput = document.querySelector('[name="txt-input"]')
    elTxtInput.addEventListener('keypress', () => {
        setTimeout(addTextInput, 0)
    })
}

// TODO: Add a text input
function addTextInput() {
    const elTxtInput = document.querySelector('[name="txt-input"]')
    const lineTxt = elTxtInput.value
    const char = lineTxt.charAt(lineTxt.length - 1)
    setLineTxt(char)

    renderMeme()
}

// TODO: renders a line of text on Img
function renderMeme() {
    const meme = getMeme()
    const memeLine = meme.lines[0]
    drawText(memeLine, gPos.x, gPos.y)
}

function drawText(memeLine, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = memeLine.color
    gCtx.fillStyle = 'white'
    gCtx.font = `${memeLine.size}px Impact`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gPos.x += 15
    
    gCtx.fillText(memeLine.txt, x, y)
    gCtx.strokeText(memeLine.txt, x, y)
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

function _resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    const heightRatio = 1.5
    gElCanvas.height = elContainer.offsetHeight * heightRatio
}


