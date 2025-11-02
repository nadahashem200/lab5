
  

document.addEventListener("DOMContentLoaded", init);

//declaring global variables outside init
//for videos
let songPlayer;
let paradePlayer;

//for controls
let currentPlayer; 

//for fallback
let songFallback;
let paradeFallback;

let noErrorParade;
let noErrorSong;
let paradeContainer;
let songContainer;

// get fallback texts to work in case of an error
function onPlayerError (e) {
    if (e.target === songPlayer) {
    songFallback.style.display = 'block'
    noErrorSong.style.display= 'none';
    paradeContainer.style.display= 'none';
    }

    if (e.target === paradePlayer) {
        paradeFallback.style.display = 'block'
        noErrorParade.style.display= 'none';
        songContainer.style.display= 'none'; 
    };
}

function init() {
    

 //declaring local variables and assigning values to them
    const song = document.getElementById("song-iframe");
    const parade= document.getElementById("parade-iframe");
 
    const rewind = document.getElementById("rw");
    const ff = document.getElementById("ff");
    const slo = document.getElementById("slo");
    const normal = document.getElementById("normal");
    const select = document.getElementById("video-select");

//assigning values to global variables

   //assigning value to the global noerror variables 
    noErrorSong= document.getElementById("noerror-song");
    noErrorParade= document.getElementById("noerror-parade");

  //assigning value to the global containers variables 
    songContainer= document.getElementById("reverence-isis");
    paradeContainer= document.getElementById("golden-parade");


    //assigning value to the global fallback variables 
    songFallback = document.querySelector('.fallback-song');
    paradeFallback = document.querySelector('.fallback-parade');


//Functions


//select a video
    select.addEventListener('change', function() {
        if (this.value === 'reverence-isis') {
        songContainer.style.display = 'block';
        paradeContainer.style.display= 'none';
        }

        else {songContainer.style.display = 'none';
              paradeContainer.style.display= 'block';
        }  
    });
}



