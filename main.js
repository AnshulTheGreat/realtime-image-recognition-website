function setup(){
    canvas = createCanvas(375,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(375,300);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded)
}

function draw(){
    image(video,0,0,375,300);
    classifier.classify(video,gotResult);
}
function modelLoaded(){
    console.log("model loaded");
}

function gotResult(error,results){
if(error){
console.error(error);
}
else{
    console.log(results);
document.getElementById("result_object_name").innerHTML =results[0].label;
document.getElementById("result_object_accuracy").innerHTML =results[0].confidence.toFixed(3) * 100 + "%";
}
}


