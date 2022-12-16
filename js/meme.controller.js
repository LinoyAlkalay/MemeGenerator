'use strict'

let gElCanvas
let gCtx
let gCurrLineIdx = 0

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
        const { idx, color, size, txt, x, y } = line

        gCtx.lineWidth = 2
        gCtx.strokeStyle = color
        gCtx.fillStyle = 'white'
        gCtx.font = `${size}px Impact`
        gCtx.textAlign = 'center'

        if (idx === gCurrLineIdx) drawRect(txt, x, y)

        gCtx.fillText(txt, x, y)
        gCtx.strokeText(txt, x, y)
    })
}

function drawRect(txt, x, y) {
    if (!txt) return
    const mesure = gCtx.measureText(txt)
    const { width, fontBoundingBoxAscent, actualBoundingBoxAscent, actualBoundingBoxRight } = mesure
    const calcY = y - actualBoundingBoxAscent
    const calcX = x - actualBoundingBoxRight
    gCtx.fillRect(calcX - 10, calcY - 7, width + 20, fontBoundingBoxAscent + 10)
}

function onSwitchLine() {
    const elButton = document.querySelector('.crudl-container button')
    elButton.classList.toggle('up')
    elButton.classList.toggle('down')

    gCurrLineIdx = !gCurrLineIdx ? 1 : 0
    const meme = getMeme()
    renderMeme(meme.selectedImgId)
}

function onAddLine() {
    const elTxtInput = document.querySelector('[name="txt-input"]')
    elTxtInput.value = ''
    selsctedLine()
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