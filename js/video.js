var vid = document.querySelector(".video");


window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	vid.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	vid.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	vid.playbackRate = 0.95 * vid.playbackRate
	console.log("New speed is " + vid.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	vid.playbackRate = 1.05 * vid.playbackRate
	console.log("New speed is " + vid.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	if (vid.duration - vid.currentTime < 15){
		vid.currentTime = 0
	} 
	else {vid.currentTime = vid.currentTime + 15;}
	console.log("Video location is " + vid.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (vid.muted == true){
		vid.muted = false
		document.querySelector("#mute").textContent = "Mute";
	}
	else{vid.muted = true 
		document.querySelector("#mute").textContent = "Unmute";
	}
});

document.querySelector("#play").addEventListener('click', function(){
	document.querySelector("#volume").textContent = vid.volume * 100 + "%";
	console.log(vid.volume)

});

document.querySelector("#slider").addEventListener('change', function(){
	vid.volume = this.value / 100;
	document.querySelector("#volume").textContent = vid.volume * 100 + "%";
	console.log(vid.volume)

});



