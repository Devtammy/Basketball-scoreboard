let homeCount = 0
let guestCount = 0
let homescoreEl = document.getElementById("homescore")
let guestscoreEl = document.getElementById("guestscore")


function homeIncrementOne() {
    homeCount += 1
    homescoreEl.textContent = homeCount
}

function homeIncrementTwo() {
    homeCount += 2
    homescoreEl.textContent = homeCount
}

function homeIncrementThree() {
    homeCount += 3
    homescoreEl.textContent = homeCount
}

function guestIncrementOne() {
    guestCount += 1
    guestscoreEl.textContent = guestCount
}

function guestIncrementTwo() {
    guestCount += 2
    guestscoreEl.textContent = guestCount
}

function guestIncrementThree() {
    guestCount += 3
    guestscoreEl.textContent = guestCount
}