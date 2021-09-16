var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    if(Content=="take my selfie"){
        console.log("Taking selfie ---");
        speak();
    }
}

function speak(){
    var synth= window.speechSynthesis;
    speak_data="Taking your selfie in five seconds";
    var utterthis= new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();} ,5000);
}

var camera=document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_url+'">';
    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_img").src;
    link.href=image;
    link.click();

}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
