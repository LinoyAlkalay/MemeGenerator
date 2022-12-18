'use strict'

let gImgs
let gNumOfImg = 18
let gFilterBy = { keyword: '' }
// let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

_createImgs()
_setKeyword()

function getImgs() {
    if (gFilterBy.keyword) {
        const imgs = gImgs.filter(img => {
            for (let i = 0; i < img.keywords.length; i++) {
                const currKey = img.keywords[i]
                if (currKey === gFilterBy.keyword) return true
            }
        })
        return imgs
    }
    return gImgs
}

function setImg(imgId) {
    gMeme.selectedImgId = +imgId
    const img = gImgs.find(img => +imgId === img.id)
    return img.url
}

function _createImgs() {
    const imgs = []
    for (let i = 1; i <= gNumOfImg; i++) {
        let img = {
            id: i,
            url: `img/${i}.jpg`,
            keywords: null
        }
        imgs.push(img)
    }
    gImgs = imgs
}

function setImgsFilter(filterBy) {
    gFilterBy.keyword = filterBy
    return gFilterBy
}

function _setKeyword() {
    gImgs[0].keywords = ['politic', 'funny']
    gImgs[1].keywords = ['cute', 'dog']
    gImgs[2].keywords = ['baby', 'dog']
    gImgs[3].keywords = ['cute', 'cat']
    gImgs[4].keywords = ['baby', 'funny']
    gImgs[5].keywords = ['tv', 'funny']
    gImgs[6].keywords = ['baby', 'funny']
    gImgs[7].keywords = ['politic', 'funny']
    gImgs[8].keywords = ['sport', 'funny']
    gImgs[9].keywords = ['tv', 'funny']
    gImgs[10].keywords = ['movie', 'funny']
    gImgs[11].keywords = ['movie']
    gImgs[12].keywords = ['cute', 'funny']
    gImgs[13].keywords = ['movie', 'funny']
    gImgs[14].keywords = ['cute', 'funny']
    gImgs[15].keywords = ['movie', 'funny']
    gImgs[16].keywords = ['politic', 'funny']
    gImgs[17].keywords = ['cute', 'funny']
}
