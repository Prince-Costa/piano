var buttonLength = document.querySelectorAll("button").length
for(var i=0; i< buttonLength; i++)
{document.querySelectorAll("button")[i].addEventListener("click", function(){
  var text = this.innerHTML
  playButton(text)
  animation(text)
});
} 
document.addEventListener("keypress", function(event){
    var text = event.key
    playButton(text)
    animation(text)
 });
 
 function playButton(text){
   switch(text){
     case"a": 
       var alphabetAudio = new Audio("mp3/sa.mp3")
       alphabetAudio.play()
       break
       case"s":
       var alphabetAudio = new Audio("mp3/re.mp3")
       alphabetAudio.play()
       break
       case"d":
       var alphabetAudio = new Audio("mp3/ga.mp3")
       alphabetAudio.play()
       break
       case"f":
       var alphabetAudio = new Audio("mp3/ma.mp3")
       alphabetAudio.play()
       break
       case"g":
       var alphabetAudio = new Audio("mp3/pa.mp3")
       alphabetAudio.play()
       break
       case"h":
       var alphabetAudio = new Audio("mp3/dha.mp3")
       alphabetAudio.play()
       break
       case"j":
       var alphabetAudio = new Audio("mp3/ni.mp3")
       alphabetAudio.play()
       break
       case"k":
       var alphabetAudio = new Audio("mp3/saa.mp3")
       alphabetAudio.play()
       break
    
   }
 }
 function animation(text){
     var buttonName= document.querySelector("." + text)
     buttonName.classList.add("keyPressAnimation")
     setTimeout( function(){
       buttonName.classList.remove("keyPressAnimation")
     },500)
 }