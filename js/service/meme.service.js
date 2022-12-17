'use strict'

let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{ idx: 0, txt: '', size: 30, colorStroke: 'black', colorFill: 'white', font: 'Impact', x: 180, y: 37.5 },
    { idx: 1, txt: '', size: 30, colorStroke: 'black', colorFill: 'white', font: 'Impact', x: 180, y: 125 }]
}

function setPos(width, height) {
    gMeme.lines[0].x = width / 2
    gMeme.lines[0].y = height / 4

    gMeme.lines[1].x = width / 2
    gMeme.lines[1].y = (5 * height) / 6
}

function getMeme() {
    return gMeme
}

function selectedLine() {
    gMeme.selectedLineIdx = gMeme.selectedLineIdx === 0 ? 1 : 0
}

function addLine() {
    gMeme.selectedLineIdx = 1
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

function alignLeft(width) {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].x = width / 4
}

function alignCenter(width) {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].x = width / 2
}

function alignRight(width) {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].x = (3 * width) / 4
}

function setLineTxt(lineTxt) {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].txt = lineTxt
}