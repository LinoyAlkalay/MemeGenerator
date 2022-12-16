'use strict'

let gImgs
let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{ idx: 0, txt: '', size: 30, align: 'left', color: 'black', x: 150, y: 37.5 },
            { idx: 1, txt: '', size: 20, align: 'left', color: 'red', x: 150, y: 135 }]
}

_createImgs()

function getImgs() {
    return gImgs
}

function getMeme() {
    return gMeme
}

// function getCurrLine() {
//     return gMeme.lines[gMeme.selectedLineIdx]
// }

function selsctedLine() {
    gMeme.selectedLineIdx = !gMeme.selectedLineIdx ? 1 : 0
}

function increaseFont() {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].size++
}

function decreaseFont() {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].size--
}

function setColor(color) {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].color = color
}

function setLineTxt(lineTxt) {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].txt = lineTxt
}

function setImg(imgId) {
    gMeme.selectedImgId = +imgId
    const img = gImgs.find(img => +imgId === img.id)
    return img.url
}

function _createImgs() {
    const imgs = []
    for (let i = 1; i <= 18; i++) {
        let img = {
            id: i,
            url: `img/${i}.jpg`,
            keywords: ['funny', 'cute']
        }
        imgs.push(img)
    }
    gImgs = imgs
    console.log('gImgs:', gImgs)
}

