status ="";
objects=[];
video="";

function preload() {
    video = createVideo("video.mp4");
   
}
 
function setup () {
    canvas = createCanvas(480,300);
    canvas.center();
    video.hide();
}

function Start() {
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHtml="Status,Detecting Objects";
}

function modelLoaded(){
    console.log("modeloaded");
    objectDetector.detect(video, gotResult);
    status =true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
  
    function draw() {
        image(video,0,0,480,300);
       
        
            
           for( i=0; i<objects.length; i++ ){
            document.getElementById("status").innerHTML = " Status :Object Detected ";
            document.getElementById("no_of_objects").innerHTML = "No of Objects detected are:+ objects.length";

            fill("#ff0000");
            percent = floor(objects[i].confidence *100);
            text(objects[i].label +" " + percent + "%" , objects[i].x +15 , objects[i].y + 15  );
            noFill();
            stroke("#ff0000");
            rect(objects[i].x, objects[i].y, objects[i].width , objects[i].height);

           }
        } 
       
    

    function gotResult(error, results){
        if(error){
            console.log(error);
        }
            console.log(results);
        
             objects=results;
    }