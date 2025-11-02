
  

document.addEventListener("DOMContentLoaded", init);

function init() {
    

    const songContainer= document.getElementById("reverence-isis");
    const paradeContainer= document.getElementById("golden-parade");

    const song = document.getElementsById("song-iframe");
    const parade= document.getElementById("parade-iframe");
 
    const rewind = document.getElementById("rw");
    const ff = document.getElementById("ff");
    const slo = document.getElementById("slo");
    const normal = document.getElementById("normal");
    const select = document.getElementById("video-select");

//select a video
    select.addEventListener('change', function() {
        if (this.value=== 'reverence-isis') {
        songContainer.style.display = 'block';
        paradeContainer.style.display= 'none';

        }
        else {songContainer.style.display = 'none';
              paradeContainer.style.display= 'block';
        }  
    });
