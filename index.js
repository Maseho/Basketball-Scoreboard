//Home Score Variables
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeScoreStore = document.getElementById("home-score")
let homeScore = 0

//Guest Score Variables
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let guestScoreStore = document.getElementById("guest-score")
let guestScore = 0


// HomecScore functions
function incrementHomeScoreOne() {
    homeScore += 1
    homeScoreStore.textContent = homeScore
    homeScoreBtnOne = homeScoreStore
}


function incrementHomeScoreTwo() {
    homeScore += 2
    homeScoreStore.textContent = homeScore
    homeScoreBtnTwo = homeScoreStore
}

function incrementHomeScoreThree() {
    homeScore += 3
    homeScoreStore.textContent = homeScore
    homeScoreBtnThree = homeScoreStore
}



// Guest  Score Functions

function incrementGuestScoreOne() {
    guestScore += 1
    guestScoreStore.textContent = guestScore
    guestScoreBtnOne = guestScoreStore
}

function incrementGuestScoreTwo() {
    guestScore += 2
    guestScoreStore.textContent = guestScore
    guestScoreBtnTwo = guestScoreStore
}

function incrementGuestScoreThree() {
    guestScore += 3
    guestScoreStore.textContent = guestScore
    guestScoreBtnThree = guestScoreStore
}