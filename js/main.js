'use strict';

var gQuests = [];
var gCurrQuestIdx = 0;
var gLives = 5;
var gMistakesLeft = gLives;
var gElRestart=document.querySelector('button')
var gElQuestsbox = document.querySelector('.questsbox');


function init() {
    createQuests();
    renderHreats();
}

function btnClicked(elBtn) {
    gQuests[gCurrQuestIdx]
    if (elBtn.innerText === gQuests[gCurrQuestIdx].correctOptIndex + '') {
        gCurrQuestIdx++;
        renderQuest(gCurrQuestIdx);
        elBtn.style.backgroundColor = 'green';
        setTimeout(() => { elBtn.style.backgroundColor = 'rgb(219, 90, 219)'; }, 300);
        if (gCurrQuestIdx === gQuests.length) win()
    } else {
        elBtn.style.backgroundColor = 'red';
        setTimeout(() => { elBtn.style.backgroundColor = 'rgb(219, 90, 219)'; }, 300);
        gMistakesLeft--;
        if (gMistakesLeft === 0) {
            lose();
        }
        renderHreats();
    }
}

function win() {
    renderState('winner-chicken');
    gElQuestsbox.style.display = 'none';
    gElRestart.style.display ='block'

}

function renderHreats() {
    var gHeartStr = '';
    for (var i = 0; i < gMistakesLeft; i++) {
        gHeartStr += '💗';
    }
    for (var i = gMistakesLeft; i < gLives; i++) {
        if (i === 0) break;
        gHeartStr += '🖤';
    }
    var elHearts = document.querySelector('.hearts');
    elHearts.innerText = gHeartStr;
}

function lose() {
    renderState('bye');
    gCurrQuestIdx = 0;
    gElQuestsbox.style.display = 'none';
    gElRestart.style.display ='block'

}

function createQuests() {
    gQuests.push({ id: 0, opts: [1, 2, 3, 4], correctOptIndex: 'Miz Cracker' });
    gQuests.push({ id: 1, opts: [1, 2, 3, 4], correctOptIndex: 'Naomi Smalls' });
    gQuests.push({ id: 2, opts: [1, 2, 3, 4], correctOptIndex: 'Trixie Mattel' });
    gQuests.push({ id: 3, opts: [1, 2, 3, 4], correctOptIndex: 'Jaida Essence Hall' });
}

function renderQuest(currQuestIdx) {
    var strHTML = `<img class="quest" src="img/${currQuestIdx}.jpg"></img>`;
    var elImg = document.querySelector('.roler');
    elImg.innerHTML = strHTML;
}

function renderState(currQuestIdx) {
    var strHTML = `<img class="quest" src="img/${currQuestIdx}.gif"></img>`;
    var elImg = document.querySelector('.roler');
    elImg.innerHTML = strHTML;
}

function restart() {
    gElRestart.style.display ='none'
    gCurrQuestIdx = 0;
    gMistakesLeft = gLives;
    gElQuestsbox.style.display = 'block';
    renderHreats()
    renderQuest(gCurrQuestIdx)
}