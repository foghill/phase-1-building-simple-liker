// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector('#modal');

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');
  // Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
  errorModal.classList.add('hidden');

  //CALL FIND LIKES
// findLikes()
clickListener()
})

function hideError()
  {errorModal.classList.add('hidden')}


function findLikes(){
  const likeArr = document.querySelectorAll(".like-glyph")
  likeArr.forEach((singularLike) => {
    singularLike.addEventListener('click',()=> console.log('You FOUND ME! LIKE'))
  })
}


function clickListener(){
  document.addEventListener('click', (event) => {
    // if I click on the heart then console.log('YOU FOUND ME! LIKE!')
    if(event.target.classList.value === 'like-glyph') {
      //PROMISE!! ASYNC WE NEED A .THEN
      mimicServerCall()
      .then(resp=> {
        const activated = event.target.classList.add('activated-heart');
      activated ? event.target.classList.remove('activated-heart') : event.target.classList.add('activated-heart');
      })
      .catch(error => {
        errorModal.classList.remove('hidden')
        setTimeout(()=>hideError(),3000) //Promise fails, .catch catches it
      // console.log('YOU FOUND ME!')
    })
}
  })
}



  // When a user clicks on an empty heart:
  // Invoke mimicServerCall to simulate making a server request

// NEED AN EVENT LISTENER ON ALL OF THE HEARTS




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
