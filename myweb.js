const scaryGif =  document.getElementById("jumpscares");
const myButton1 = document.getElementById("button1");
const myButton2 = document.getElementById("reloadBtn");
const text = document.getElementById("text");
const sound = document.getElementById("sound");
const nirvana = document.getElementById("nirvana");
const unmuted = document.getElementsByClassName("unmuted");
const muted = document.getElementsByClassName("muted");

nirvana.play();

for (let i = 0; i < unmuted.length; i++) {
    unmuted[i].onclick = function() {
    unmuted[i].style.display = "none";
    muted[i].style.display = "block";
    nirvana.pause();
    };
};
for (let i = 0; i < unmuted.length; i++) {
    muted[i].onclick = function() {
    muted[i].style.display = "none";       
    unmuted[i].style.display= "block";
    nirvana.play();
    };
};

myButton1.onclick = function(){
    nirvana.remove();
    myButton1.remove();
        setTimeout(() => {
        sound.play();
    }, 2600)
    setTimeout(() => {
        nirvana.remove();
        scaryGif.style.display = "block";
        if(scaryGif.requestFullscreen){
            scaryGif.requestFullscreen()
        }
        else if(scaryGif.webkitRequestFullscreen){
            scaryGif.webkitRequestFullscreen()
        }
        else if(scaryGif.msRequestFullscreen){
            scaryGif.msRequestFullscreen()
        }
        setTimeout(() => {
            myButton2.style.display = "block"
        }, 5000);
    }, 3000)
}
scaryGif.onclick = function() {
    window.location.reload();
    window.scrollTo(0, 0);
}