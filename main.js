function preload(){

}
function setup(){
    
        canvas=createCanvas(640,480);
        canvas.position(110,300);
        video=createCapture(VIDEO);
        video.hide();
}
function draw(){
    image(video,160,120,400,300);

circle(30,30,60);
circle(30,480,60);
circle(610,30,60);
circle(640,480,60);

rect(56,20,560,50);
rect(49,434,560,50);


fill((59, 250, 170));
}
function take_snap(){
save("project.png");
}