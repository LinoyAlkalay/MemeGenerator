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
            _resetMeme()
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
    const meme = getMeme()

    if (meme.selectedLineIdx === gCurrLineIdx) { 
        const elTxtInput = document.querySelector('[name="txt-input"]')
        const lineTxt = elTxtInput.value
        setLineTxt(lineTxt)
    } else selectedLine(gCurrLineIdx)

    _drawText()
}

function _drawText() {
    const meme = getMeme()

    meme.lines.forEach(line => {
        const { idx, txt, size, colorStroke, colorFill, font, x, y } = line
        gCtx.lineWidth = 2
        gCtx.strokeStyle = colorStroke
        gCtx.fillStyle = `${colorFill}`
        gCtx.font = `${size}px ${font}`
        gCtx.textAlign = `center`

        gCtx.save()
        if (idx === gCurrLineIdx) _drawRect(txt, x, y)
        gCtx.restore()

        gCtx.fillText(txt, x, y)
        gCtx.strokeText(txt, x, y)
    })
}

function _drawRect(txt, x, y) {
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

    const linesLength = getLiensLength()

    if(gCurrLineIdx === linesLength - 1) {
        gCurrLineIdx = 0
    } else gCurrLineIdx++
    _resetMeme()
}

function onAddLine() {
    const idx = addLine()
    gCurrLineIdx = idx
}

function onSetFont() {
    const font = document.querySelector('.font').value
    setfont(font)
    _resetMeme()
}

function onDeleteLine() {
    _clearValue()
    deleteLine()
    _resetMeme()
}
function onSetColorStroke() {
    const color = document.querySelector('[name="color-stroke"]').value
    setColorStroke(color)
    _resetMeme()
}

function onSetColorFill() {
    const color = document.querySelector('[name="color-fill"]').value
    setColorFill(color)
    _resetMeme()
}

function onIncreaseFont() {
    increaseFont()
    _resetMeme()
}

function onDecreaseFont() {
    decreaseFont()
    _resetMeme()
}

function onAlignLeft() {
    alignLeft(gElCanvas.width)
    _resetMeme()
}

function onAlignCenter() {
    alignCenter(gElCanvas.width)
    _resetMeme()
}

function onAlignRight() {
    alignRight(gElCanvas.width)
    _resetMeme()
}

function _clearValue() {
    const elTxtInput = document.querySelector('[name="txt-input"]')
    elTxtInput.value = ''
}

function _resetMeme() {
    const meme = getMeme()
    renderMeme(meme.selectedImgId)
}

function _resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
}

function onShare(btn) {
    btn.classList.toggle('active')
}

function onDownloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    elLink.href = imgContent
}

function onShareToFacebook() {
    const imgDataUrl = gElCanvas.toDataURL('image/jpeg') // Gets the canvas content as an image format

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        // Encode the instance of certain characters in the url
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
    }
    // Send the image to the server
    doUploadImg(imgDataUrl, onSuccess)
}