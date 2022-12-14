'use strict'

let gImgs
let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: '',
        size: 30,
        align: 'left',
        color: 'black'
    }]
}

_createImgs()

function getImgs() {
    return gImgs
}

function getMeme() {
    return gMeme
}

// TODO: update the gMeme using the function setLineTxt()
function setLineTxt(char) {
    console.log('lineTxt:', char)
    gMeme.lines[0].txt = char
    console.log('gMeme:', char)
}

function setImg(imgId) {
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
