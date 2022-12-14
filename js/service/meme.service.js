'use strict'

let gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}
let gImgs = [{id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat']}]
let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I sometimes eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    }]
}

function getMeme() {
    return gMeme
}

// TODO: update the gMeme using the function setLineTxt()
function setLineTxt() {

}

function setImg() {
    // TODO: something with gImgs - maybe find method
}
