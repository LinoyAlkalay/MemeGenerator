'use strict'

let gElCanvas
let gCtx
let gCurrLineIdx = 0
const FIRST_LINE = 0
const SECOND_LINE = 1

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
            resetMeme()
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
    } else selectedLine()

    drawText()
}

function drawText() {
    const meme = getMeme()

    meme.lines.forEach(line => {
        const { idx, txt, size, colorStroke, colorFill, font, x, y } = line
        gCtx.lineWidth = 2
        gCtx.strokeStyle = colorStroke
        gCtx.fillStyle = `${colorFill}`
        gCtx.font = `${size}px ${font}`
        gCtx.textAlign = `center`

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

    gCurrLineIdx = gCurrLineIdx === FIRST_LINE ? SECOND_LINE : FIRST_LINE
    const meme = getMeme()
    renderMeme(meme.selectedImgId)
}

function onAddLine() {
    addLine()
    gCurrLineIdx = 1
}

function onSetFont() {
    const font = document.querySelector('.font').value
    setfont(font)
    resetMeme()
}

function onDeleteLine() {
    clearValue()
    deleteLine()
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

function onAlignLeft() {
    alignLeft(gElCanvas.width)
    resetMeme()
}

function onAlignCenter() {
    alignCenter(gElCanvas.width)
    resetMeme()
}

function onAlignRight() {
    alignRight(gElCanvas.width)
    resetMeme()
}

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
}

function onShare(btn) {
    btn.classList.toggle('active')
}

function downloadImg(elLink) {
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

function onMemesStorage() {
    document.querySelector('.main-gallery').style.display = 'none'
    document.querySelector('.search-area').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'none'
    document.querySelector('.saved-memes').style.display = 'block'
    const memes = getSaevedMemes()
    console.log('memes:', memes)

    // let strHTML = memes.map(meme => `
    //     <img class="image" src="img/${meme.selectedImgId}.jpg" onclick="onImgSelect('${meme.selectedImgId}')">
    //     `)

    let strHTML = `
        <img class="image" src="img/${memes.selectedImgId}.jpg" onclick="onImgSelect('${memes.selectedImgId}')">
        `
    document.querySelector('.memes-container').innerHTML = strHTML
}

function onSaveToStorage() {
    createMemes()
}
