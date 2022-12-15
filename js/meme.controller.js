'use strict'

let gElCanvas
let gCtx
let gPos = [{ x: 0, y: 80 }, { x: 0, y: 280 }]

function initMeme(imgUrl) {
    document.querySelector('.main-gallery').style.display = 'none'
    document.querySelector('.search-area').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'flex'
    gElCanvas = document.getElementById('meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    console.log('gCtx:', gCtx)
    gPos[0].x = gElCanvas.width / 2
    drawImg(imgUrl)

    const elTxtInput = document.querySelector('[name="txt-input"]')
    elTxtInput.addEventListener('keypress', () => {
        setTimeout(addTextInput, 0)
    })
}

function addTextInput() {
    const elTxtInput = document.querySelector('[name="txt-input"]')
    const lineTxt = elTxtInput.value
    const char = lineTxt.charAt(lineTxt.length - 1)
    setLineTxt(lineTxt, char)

    renderMeme()
}

function renderMeme() {
    const meme = getMeme()
    drawText(meme)
}

function onSetColor() {
    const color = document.querySelector('[name="color"]').value
    setColor(color)
}

function onIncreaseFont() {
    increaseFont()
}

function onDecreaseFont() {
    decreaseFont()
}

function drawText(meme) {
    const {color, size, currChar} = meme.lines[0]

    gCtx.lineWidth = 2
    gCtx.strokeStyle = color
    gCtx.fillStyle = 'white'
    gCtx.font = `${size}px Impact`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    // const text = gCtx.measureText(memeLine.txt)
    gPos[0].x += 20 // !need improvment
    
    gCtx.fillText(currChar, gPos[0].x, gPos[0].y)
    gCtx.strokeText(currChar, gPos[0].x, gPos[0].y)
}

function drawImg(imgUrl) {
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


