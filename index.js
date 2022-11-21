console.log('hello world')

//Initialize the Variables
let songIndex=0;
let audioElement = new Audio('./songs/2.mp3')
// let masterPlay =document.getElementById('masterPlay')
let masterPlay =document.getElementById('masterPlay')
let mainTitle =document.getElementById('mainTitle')
let myProgressBar =document.getElementById('myProgressBar')
let songItem =Array.from(document.getElementsByClassName('songItem'))
let songItemPlay=Array.from(document.getElementsByClassName('songItemPlay'))
let songs =[
    {
        songName:"KAKA  Mitti De Tibbe", 
        filePath:'./songs/1.mp3',
        coverPath:'./cover/coversong.jpg',
        duration:'6:02'
    },
    {
        songName:" pata laga tenu shonk phulan da Kaka  ", 
        filePath:'songs/2.mp3',
        coverPath:'./cover/coversong2.jpg',
        duration:'3:46'
    },
    {
        songName:" Bharisho me kbhi", 
        filePath:'song/3.mp3',
        coverPath:'./cover/coversong3.jpg',
        duration:'5:17'
    },
    {
        songName:" GYPSY Balam Thanedar song(new)", 
        filePath:'song/4.mp3',
        coverPath:'./cover/coversong3.jpg',
        duration:'5:17'
    },
]

songItem.forEach((element,i)=>{
    // console.log(element,i)
       element.getElementsByTagName('img')[0].src= songs[i].coverPath;
       element.getElementsByClassName('songName')[0].innerText= songs[i].songName;
       element.getElementsByClassName('duration')[0].innerText= songs[i].duration;
})
songs.map((element)=>{

    cardTitle.innerHTML = element.songName;
    // cardTitle.innerHTML = 'helo';
    console.log(element.songName)
}) 
// card()
const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        console.log('[play]')
      } )
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    //   console.log(e.target)
      makeAllPlay()
      songIndex = parseInt(e.target.id)
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause'); 
      
      audioElement.src =  `./songs/${songIndex+1}.mp3`
        audioElement.play()
        audioElement.currentTime=0;
        masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
  })
} )
// songItemPlay.ge
//handle play/pause click

 masterPlay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0 ){
    // audioElement= new Audio('tumchalegye.mp3')
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    console.log('play now')
}
else{
    audioElement.pause()
    masterPlay.classList.add('fa-circle-play');
    masterPlay.classList.remove('fa-circle-pause');
   
}
})
//listen to event 
//for progress of input range 

     
    audioElement.addEventListener('timeupdate',()=>{
  
            let progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
            if(progress<99){
                myProgressBar.value = progress;

            }
            else{
                myProgressBar.value=0;
                audioElement.play();
            }
            //update Seekbar 
        })

// audioElement.play()

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value *audioElement.duration)/100
    // audioElement2.currentTime = myProgressBar.value *audioElement.duration/10/
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src =  `./songs/${songIndex+1}.mp3`
        audioElement.play()
        audioElement.currentTime=0;
        masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex===0){
        songIndex=0;
     }
    else{
        songIndex-=1;
    }
    audioElement.src =  `./songs/${songIndex+1}.mp3`
        audioElement.play()
        audioElement.currentTime=0;
        masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
})
// for test