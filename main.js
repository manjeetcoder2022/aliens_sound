function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/odqu6pxRM/model.json",modelLoded)
}
function modelLoded(){
    
    classifier.classify(gotresult)
}
function gotresult(error,results){
   if(error){
    console.log(error)
   }else{
    console.log(results)


    red= Math.floor(Math.random() *255) +1
    green= Math.floor(Math.random() *255) +1
    blue= Math.floor(Math.random() *255) +1
    console.log(red +" " + green + " " + blue)

    document.getElementById("hearing").style.color="rgb("+red +","+ green+"," +blue+")"
    document.getElementById("hearing_accuracy").style.color="rgb("+green +","+ blue+"," +red+")"
    document.getElementById("hearing").innerHTML= results[0].label
    document.getElementById("hearing_accuracy").innerHTML= results[0].confidence.toFixed(2)*100+"%"

    label=results[0].label
    img_1=document.getElementById("aliens_01")
    img_2=document.getElementById("aliens_02")
    img_3=document.getElementById("aliens_03")
    img_4=document.getElementById("aliens_04")

    if(label=="clap"){
        img_1.src="aliens-01.gif"
        img_2.src="aliens-02.png"
        img_3.src="aliens-03.png"
        img_4.src="aliens-04.png"
    }else if(label=="bell"){
        img_1.src="aliens-01.png"
        img_2.src="aliens-02.gif"
        img_3.src="aliens-03.png"
        img_4.src="aliens-04.png"
    }else if(label=="snap"){
        img_1.src="aliens-01.png"
        img_2.src="aliens-02.png"
        img_3.src="aliens-03.gif"
        img_4.src="aliens-04.png"
    }
    else{
        img_1.src="aliens-01.png"
        img_2.src="aliens-02.png"
        img_3.src="aliens-03.png"
        img_4.src="aliens-04.gif"
    }
   }
}