var vid = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	vid.play();
	document.querySelector("#volume").textContent = vid.volume * 100 + "%";
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
	vid.playbackRate = (1 / 0.95) * vid.playbackRate
	console.log("New speed is " + vid.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + vid.currentTime)
	if (vid.duration - vid.currentTime < 15){
		vid.currentTime = 0
		console.log("Going back to beginning")
	} 
	else {vid.currentTime = vid.currentTime + 15;}
	console.log("New location " + vid.currentTime)
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

document.querySelector("#slider").addEventListener('change', function(){
	vid.volume = this.value / 100;
	document.querySelector("#volume").textContent = vid.volume * 100 + "%";
	console.log(vid.volume)

});

document.querySelector("#vintage").addEventListener('click', function(){
	vid.classList.add('oldSchool');
});

document.getElementById("orig").addEventListener('click', function(){
	vid.classList.remove('oldSchool');
});
