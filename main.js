var filter = "https://e7.pngegg.com/pngimages/406/315/png-clipart-moustache-computer-icons-moustache-fashion-logo-thumbnail.png";

function preload() {
    filter();
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", getPoses);
}

function getPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("Nose x = " + results[0].pose.nose.x);
        console.log("Nose y = " + results[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
}

function takeSnapshot() {
    save("filter_image.png");
}

function modelLoaded() {
    console.log("Model Loaded");
}

nose_x = results[0].pose.nose.x;
nose_y = results[0].pose.nose.y;
