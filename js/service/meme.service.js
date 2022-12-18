'use strict'

let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{ idx: 0, txt: '', size: 30, colorStroke: 'black', colorFill: 'white', font: 'Impact', x: 180, y: 37.5 }]
}

function getMeme() {
    return gMeme
}

function selectedLine(currLine) {
    gMeme.selectedLineIdx = currLine
}

function addLine() {
    let idx = gMeme.lines.length - 1
    gMeme.selectedLineIdx = idx++
    createLine(idx)
    return idx
}

function createLine(idx) {
    gMeme.lines.push(
        { idx: idx, txt: '', size: 30, colorStroke: 'black', colorFill: 'white', font: 'Impact', x: 180, y: 81 }
    )
    if (idx === 1) gMeme.lines[idx].y = 125
}

function getLiensLength() {
    return gMeme.lines.length
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