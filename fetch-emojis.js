let url = 'https://emojihub.yurace.pro/api/all';

let happyFace = '';
let nerdFace = '';
let angryFace = '';
const list = [];

let emo = fetch(url).
    then(function(response) {
        return response.json();
    }).
    then(function(data) {
        happyFace = data[0].htmlCode[0];
        nerdFace = data[35].htmlCode[0];
        angryFace = data[65].htmlCode[0];
    });