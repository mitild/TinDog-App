// import Dog from './Dog.js'
// import dogsData from './data.js'

// // Variables for iterating over dogs array

// let currentDog = new Dog(dogsData.shift())
// let moreDogs = true

// // Buttons actions(events)

// document.getElementById('swipe-btn').addEventListener('click', ()=> {
//   if(moreDogs) {
//     getBadgeHtml('nope')
//     getNextDog()
//   }
// })

// document.getElementById('match-btn').addEventListener('click', ()=> {
//   if(moreDogs) {
//     getBadgeHtml('like')
//     getNextDog()
//   }
// })

// // Function for setting the Badge accordingly to user's action

// function getBadgeHtml(image) {
//   document.getElementById('badge').innerHTML = 
//   `<img src="./images/badge-${image}.png">`
// }

// // Function for swipping dogs on user's interaction & Game Over message when last dog is reached


// function getNextDog() {
//   if(dogsData.length > 0) {
//   currentDog = new Dog(dogsData.shift())
//   setTimeout(render, 1000)
//   }
//   else {
//     moreDogs = false
//     currentDog = {}
//     setTimeout(()=> {
//       document.querySelector('.img-container').innerHTML +=
//       `<div class="end-message"><img src="./images/game-over.png"></div>`
//     }, 2000)
//     // setTimeout(()=> {
//     //   document.querySelector('.end-message').style.visibility = 'hidden'
//     // }, 9000)
//   }
// }

// function render() {
//   document.getElementById('candidate-container').innerHTML = currentDog.getDogHtml()
// }

// render()

// export { currentDog }