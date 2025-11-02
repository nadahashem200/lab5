
  

document.addEventListener("DOMContentLoaded", init);

function init() {

    const song = document.getelementbyid("reverence-isis");
    const parade= document.getelementbyid("golden-parade");

    
    const rewind = document.getElementById("rw");
    const ff = document.getElementById("ff");
    const slo = document.getElementById("slo");
    const normal = document.getElementById("normal");
    const select = document.getElementById("video-select");

}







    /**
     * prepare the audio and video for playing
    



    select.addEventListener("change", (e) => {
        select(e, vd);
    });

    /**
     * prepare the audio and video for playing
     
    video.src = "videos/amiraselim-egypt.webm";
    video.load();
    video.volume = 0.5;

    //set video's initial volume
    leverage.volume = 0.5;

    /**
     * create the button event listeners to control the audio
    

    ff.addEventListener("click", (e) => {
        lowRider.playbackRate = 2;
    });

    slo.addEventListener("click", (e) => {
        lowRider.playbackRate = 0.5;
    });

    normal.addEventListener("click", (e) => {
        lowRider.playbackRate = 1;
    });

    /**
     * select lists emit a "change" event when the choice is changed
    
    pick.addEventListener("change", (e) => {
        // save the audio's current place in the song.
        let time = lowRider.currentTime;

        lowRider.src = e.target.value;
        lowRider.load();
        lowRider.play();

        // set the new song to the same place as the previous one.
        lowRider.currentTime = time;
    }); */
