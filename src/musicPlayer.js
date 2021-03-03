class MusicPlayer{
  constructor(config){
    this.updateTime = this.updateTime.bind(this)
    this.updateBar = this.updateBar.bind(this)

    this.media = new Audio(config.src)
    this.timeDisplay = config.timeDisplay
    this.timeTotalDisplay = config.timeTotalDisplay
    this.barElements = config.barElements
    this.maxTime = config.timeMax
    this.media.volume = .2

    this.media.currentTime = 180

    this.media.addEventListener('timeupdate', () => {
        this.updateTime()
        this.updateBar()
    }) 
  }
  
  updateBar(){
    let width  = (this.media.currentTime * 100) / this.media.duration


    this.barElements[1].style.width = `${width.toFixed(2)}%`
  }

  updateTime(){
    const curmins = Math.floor(this.media.currentTime / 60)
    const cursecs = Math.floor(this.media.currentTime - curmins * 60)
    let sec = cursecs < 10 ? '0' + cursecs : cursecs
    
    this.timeDisplay.innerText = `${curmins}:${sec}`
    
    // const currentTime = `${(this.media.currentTime * (1 / 60)).toFixed(2)}`
  }

  togglePlay(){

    const imageBtn = document.querySelector('#pausePlay')

    if(this.timeTotalDisplay.textContent = ' '){
      
      this.timeTotalDisplay.innerText = this.maxTime
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