function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    model = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/YyP4dWsSj/model.json", modelReady);
}
function modelReady() {
    console.log("model is loaded");
    model.classify(gotresults);
}
function gotresults(error, results) {
    console.log(gotresults)
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("sound").innerHTML=results[0].label;
        sound=results[0].label;
        if(sound == "Cat"){
            document.getElementById("image").src="cat.jpg";
        }
        else if(sound == "Dog"){
            document.getElementById("image").src="dog.jpg";
        }
        else{
            document.getElementById("image").src="ear.jpg";
        }
    }
}