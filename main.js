function check () {

var question1=document.quiz.question1.value;
var question2=document.quiz.question2.value;
var question3=document.quiz.question3.value;
var question4=document.quiz.question4.value;
var question5=document.quiz.question5.value;


var correct = 0;

if (question1 == "rightlane") {
    correct++;
}
if (question2 == "et") {
    correct++;
}
if (question3 == "uc") {
    correct++;
}
if (question4 == "sd") {
    correct++;
}
if (question5 == "nv") {
    correct++;
}





var messages = ["Amazing, you know your stuff!", "Pert near perfect!","Respectable","Come on, you can do better than that.","One is better than none?","Two words: Traffic School"];

var score;
  
    if (correct==5){
        score=0;
    }
    if (correct==4){
        score=1;
    }
    if (correct==3){
        score=2;
    }
    if (correct==2){
        score=3;
    }
    if (correct==1){
        score=4;
    }
    if (correct==0){
        score=5;
    }
    

document.getElementById("submit").style.visibility = "visible";

document.getElementById("message").innerHTML=messages[score];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}