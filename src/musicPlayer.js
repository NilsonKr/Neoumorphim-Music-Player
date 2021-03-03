class MusicPlayer{
  constructor(config){
    this.updateTime = this.updateTime.bind(this)

    this.media = new Audio(config.src)
    this.timeDisplay = config.timeDisplay
    this.timeTotal = config.timeTotal
    this.media.volume = .2

    this.media.addEventListener('timeupdate', this.updateTime) 
  }

  updateTime(){
    const currentTime = `${(this.media.currentTime * (1 / 60)).toFixed(2)}`

    this.timeDisplay.innerText = currentTime.replace('.',':')
  }
  togglePlay(){

    const imageBtn = document.querySelector('#pausePlay')

    if(this.timeTotal.textContent = ' '){
      const time = `${(this.media.duration * (1 / 60)).toFixed(2)}`
      
      this.timeTotal.innerText = time.replace('.',':')
    }

    if(this.media.paused){
      this.media.play()
      imageBtn.src = './images/pause.svg'
    }else{
      this.media.pause()
      imageBtn.src = './images/play.svg'
    }
  }
}

export default MusicPlayer