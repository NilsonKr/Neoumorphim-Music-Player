import MusicPlayer from './musicPlayer.js'; 

// const toggleBtn = document.querySelector('#toggleBtn')
// const advanceBtn = document.querySelector('#advanceBtn')
// const backBtn = document.querySelector('#back')
const maxTime = document.querySelector('#maxTime')
const currentTime = document.querySelector('#currentTime')
let musicName = '../cryForMe.mp3' 

const player = new MusicPlayer({ src: musicName, timeTotal: maxTime, timeDisplay: currentTime})


document.body.addEventListener('click', ev => {
  const target = ev.target

  if(target.id === 'toggleBtn' || target.id === 'pausePlay'){
    player.togglePlay()
  }
  if(target.id === 'advanceBtn'){
    player.togglePlay()
    player.media.currentTime = player.media.duration
  }
  if(target.id === 'back'){
    player.media.currentTime = 0
  }
})



