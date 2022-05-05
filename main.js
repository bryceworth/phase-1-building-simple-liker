// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let heartsNodeArray = [...document.getElementsByClassName(`like-glyph`)];
let modal = document.getElementById(`modal`);
let modalParagraph = document.getElementById(`modal-message`)

 let callServerAndCatch = () => {
    try {
    throw mimicServerCall()
        }  
    catch (error) {
    handleError(error)
                  } 
    finally   {
    console.log(`no errors`)
              }
          }

let handleError = (errorMessage) => {
 modal.classList.remove(`hidden`)
 modalParagraph.innerText = errorMessage
 setTimeout(() => {
   modal.classList.add(`hidden`)
  modal.modalParagraph.innerText = ``
}, 3000);
}


heartsNodeArray.map(heartNode => {
heartNode.addEventListener(`click`, callServerAndCatch)  
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
 console.log(`clicked!`)
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
