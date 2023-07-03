let audio1 = document.getElementById('audio1')
let audio2 = document.getElementById('audio2')
let repAudio1 = document.getElementById('rep-audio1')
let repAudio2 = document.getElementById('rep-audio2')

flag1 = true;
flag2 = true;

repAudio1.addEventListener('click', (e)=>{
  e.preventDefault()
  if(flag1){
    audio1.play()
    flag1 = !flag1
  } else {
    audio1.pause();
    flag1 = !flag1
  }
}) 

repAudio2.addEventListener('click', (e)=>{
  e.preventDefault()
  audio2.play()
  if(flag2){
    audio2.play()
    flag2 = !flag2
  } else {
    audio2.pause()
    flag2 = !flag2
  }
}) 