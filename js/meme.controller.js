'use strict'

let gElCanvas
let gCtx
let gCurrLineIdx = 0
const FIRST_LINE = 0
const SECOND_LINE = 1

function initMeme(imgId) {
    gElCanvas = document.getElementById('meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    console.log('gCtx:', gCtx)
    console.log('gCtx.textAlign:', gCtx.textAlign)
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
        const { idx, txt, size, align, colorStroke, colorFill, x, y } = line
        gCtx.lineWidth = 2
        gCtx.strokeStyle = colorStroke
        gCtx.fillStyle = `${colorFill}`
        gCtx.font = `${size}px Impact`
        gCtx.textAlign = `${align}`

        gCtx.save()
        if (idx === gCurrLineIdx) drawRect(txt, x, y)
        gCtx.restore()

        gCtx.fillText(txt, x, y)
        gCtx.strokeText(txt, x, y)
    })
}

function drawRect(txt, x, y) {
    if (!txt) return
    gCtx.fillStyle = 'rgba(255,255,255, 0.5)'
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

    clearValue()
    gCurrLineIdx = !gCurrLineIdx ? SECOND_LINE : FIRST_LINE
    selsctedLine()
    resetMeme()
}

function onAddLine() {
    clearValue()
    gCurrLineIdx = !gCurrLineIdx ? SECOND_LINE : FIRST_LINE
    addLine()
}

function onDeleteMeme() {
    clearValue()
    deleteMeme()
    resetMeme()
}

function onSetColorStroke() {
    const color = document.querySelector('[name="color-stroke"]').value
    setColorStroke(color)
    resetMeme()
}

function onSetColorFill() {
    const color = document.querySelector('[name="color-fill"]').value
    setColorFill(color)
    resetMeme()
}

function onIncreaseFont() {
    increaseFont()
    resetMeme()
}

function onDecreaseFont() {
    decreaseFont()
    resetMeme()
}

// function onAlignLeft() {
//     alignLeft()
//     resetMeme()
// }

// function onAlignCenter() {
//     alignRight()
//     resetMeme()
// }

// function onAlignRight() {
//     alignCenter()
//     resetMeme()
// }

function clearValue() {
    const elTxtInput = document.querySelector('[name="txt-input"]')
    elTxtInput.value = ''
}

function resetMeme() {
    const meme = getMeme()
    renderMeme(meme.selectedImgId)
}

function _resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    // gElCanvas.height = elContainer.offsetHeight
}