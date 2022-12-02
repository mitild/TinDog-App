import Dog from './Dog.js'
import dogsData from './data.js'

// Variables for iterating over dogs array

let currentDog = new Dog(dogsData.shift())
let moreDogs = true
let isWaiting = false

// Buttons actions(events)

document.getElementById('swipe-btn').addEventListener('click', ()=> {
  if(moreDogs && !isWaiting) {
    getBadgeHtml('nope')
    getNextDog()
    isWaiting = true 
    setTimeout(()=> isWaiting = false, 1500)
  }
})

document.getElementById('match-btn').addEventListener('click', ()=> {
  if(moreDogs && !isWaiting) {
    getBadgeHtml('like')
    getNextDog()
    isWaiting = true
    setTimeout(()=> isWaiting = false, 1500)
  }
})

// Function for setting the Badge accordingly to user's action

function getBadgeHtml(image) {
  document.getElementById('badge').innerHTML = 
  `<img src="./images/badge-${image}.png">`
}

// Function for displaying the No More Dogs message

const getNoMoreDogsHtml = ()=> {
    moreDogs = false
    currentDog = {}
    setTimeout(()=> {
    document.querySelector('.img-container').innerHTML =
    `<div><img src="./images/game-over.png"></div>`
  }, 2000)
}

// Function for swipping dogs on user's interaction & Game Over message when last dog is reached


function getNextDog() {
  if(dogsData.length > 0) {
  currentDog = new Dog(dogsData.shift())
  setTimeout(render, 1000)
  }
  else {
    getNoMoreDogsHtml()
  }
}

// Render

function render() {
  document.getElementById('candidate-container').innerHTML = currentDog.getDogHtml()
}

render()

export { currentDog }