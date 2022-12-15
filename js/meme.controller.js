'use strict'

let gElCanvas
let gCtx

function initMeme(imgId) {
    gElCanvas = document.getElementById('meme-canvas')
    gCtx = gElCanvas.getContext('2d')

    addListeners()
    renderMeme(imgId)
}

function addListeners() {
    const elTxtInput = document.querySelector('[name="txt-input"]')
    elTxtInput.addEventListener('keypress', () => {
        setTimeout(() => {
            const meme = getMeme()
            renderMeme(meme.selectedImgId)
        }, 0)
    })
}

function renderMeme(imgId) {
    _resizeCanvas()
    const img = new Image()
    img.src = setImg(imgId)
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        addTextInput()
    }
}

function addTextInput() {
    const elTxtInput = document.querySelector('[name="txt-input"]')
    const lineTxt = elTxtInput.value
    setLineTxt(lineTxt)

    drawText()
}

function drawText() {
    const meme = getMeme()
    meme.lines.forEach(line => {
        let { color, size, txt, x, y } = line
    
        gCtx.lineWidth = 2
        gCtx.strokeStyle = color
        gCtx.fillStyle = 'white'
        gCtx.font = `${size}px Impact`
        gCtx.textAlign = 'center'
        
        gCtx.fillText(txt, x, y)
        gCtx.strokeText(txt, x, y)
    })
}

function onToggleLine() {
    const meme = getMeme()
    if(!meme.selectedLineIdx) {
        meme.selectedLineIdx = 1
    } else {
        meme.selectedLineIdx = 0
    }
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

function _resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    // gElCanvas.height = elContainer.offsetHeight
}

function clearCanvas() {
    // Sets all pixels in the rectangle defined by starting point (x, y) and size (width, height)
    // to transparent black, erasing any previously drawn content.
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    // You may clear part of the canvas
    // gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height/4)
}
