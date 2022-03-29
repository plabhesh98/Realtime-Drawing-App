left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;
nose_x = 0;
nose_y = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);

    canvas = createCanvas(400, 400);
    canvas.position(580,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}   

function draw(){
    background("#00FFFF");
    fill("#FFC0CB");
    stroke("#FFC0CB")
    square(nose_x, nose_y, difference);
    document.getElementById("btn status").innerHTML = "Width and height of the square is " + difference + " px ";
}

function modelLoaded(){
    console.log("Posenet is Initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("Nose X =  " + nose_x + " Nose Y = " + nose_y);
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = Math.floor(left_wrist_x - right_wrist_x);
        console.log("Left Wrist X = " + left_wrist_x + " Right Wrist X = " + right_wrist_x + " Difference = " + difference);
    }
}