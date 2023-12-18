let url = 'https://emojihub.yurace.pro/api/all';

let happyFace = '';
let nerdFace = '';
let angryFace = '';
let sadFace = '';
const list = [];

let emo = fetch(url).
    then(function(response) {
        return response.json();
    }).
    then(function(data) {
        happyFace = data[0].htmlCode[0];
        nerdFace = data[35].htmlCode[0];
        angryFace = data[65].htmlCode[0];
        sadFace = data[51].htmlCode[0];
        // for (let i = 40; i < 69; i++) {
        //     document.querySelector('h1').innerHTML += (data[i].htmlCode[0]);
        // }
    });