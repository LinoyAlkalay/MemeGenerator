'use strict'

let gImgs
let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{ txt: '', currChar: '', size: 30, align: 'left', color: 'black' },
            { txt: '', currChar: '', size: 30, align: 'left', color: 'black' }]
}

_createImgs()

function getImgs() {
    return gImgs
}

function getMeme() {
    return gMeme
}

function increaseFont() {
    gMeme.lines[0].size++
}

function decreaseFont() {
    gMeme.lines[0].size--
}

function setColor(color) {
    gMeme.lines[0].color = color
}

function setLineTxt(lineTxt, char) {
    gMeme.lines[0].txt = lineTxt
    gMeme.lines[0].currChar = char
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
