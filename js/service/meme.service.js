'use strict'

let gImgs
let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{ idx: 0, txt: '', size: 30, align: 'center', colorStroke: 'black', colorFill: 'white', x: 150, y: 37.5 },
            { idx: 1, txt: '', size: 30, align: 'center', colorStroke: 'black', colorFill: 'white', x: 150, y: 135 }]
}

_createImgs()

function getImgs() {
    return gImgs
}

function getMeme() {
    return gMeme
}

function selectedLine() {
    gMeme.selectedLineIdx = gMeme.selectedLineIdx === 0 ? 1 : 0
}

function addLine() {
    gMeme.selectedLineIdx = 1 // TODO: need to be ++ with an if that checks max lines 
}

function deleteMeme() {
    gMeme.selectedLineIdx = 0
    gMeme.lines.forEach(line => {
        line.txt = ''
        line.size = 30
        line.align = 'center'
        line.colorStroke = 'black'
        line.colorFill = 'white'
    })
}

function setColorStroke(color) {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].colorStroke = color
}

function setColorFill(color) {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].colorFill = color
}

function increaseFont() {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].size++
}

function decreaseFont() {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].size--
}

// function alignLeft() {
//     const idx = gMeme.selectedLineIdx
//     gMeme.lines[idx].align = 'left'
// }

// function alignCenter() {
//     const idx = gMeme.selectedLineIdx
//     gMeme.lines[idx].align = 'center'
// }

// function alignRight() {
//     const idx = gMeme.selectedLineIdx
//     gMeme.lines[idx].align = 'right'
// }

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
}

