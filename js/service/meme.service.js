'use strict'


let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{ idx: 0, txt: '', size: 30, colorStroke: 'black', colorFill: 'white', font: 'Impact', x: 250, y: 37.5 },
            { idx: 1, txt: '', size: 30, colorStroke: 'black', colorFill: 'white', font: 'Impact', x: 250, y: 135 }]
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

function deleteLine() {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].txt = ''
    gMeme.lines[idx].size = 30
    gMeme.lines[idx].colorStroke = 'black'
    gMeme.lines[idx].colorFill = 'white'
}

function setfont(font) {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].font = font
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

function alignLeft() {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].x = 100
}

function alignCenter() {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].x = 250
}

function alignRight() {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].x = 380
}

function setLineTxt(lineTxt) {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].txt = lineTxt
}
