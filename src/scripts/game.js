class Game{
  constructor(){
    //Propriedades do jogo
    this.canvas = document.createElement('canvas')
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.frames = 0
    this.context = this.canvas.getContext('2d')
  }

  //Evento ao clicas na tela
  click(event){
    alert('click')
  }

  //
  loop(){
    this.update();
    this.draw();

    window.requestAnimationFrame(this.loop())
  }

  update(){
    this.frames++
  }

  draw(){
    this.context.fillStyle = '#00f'
    this.context.fillRect(0,0,this.width,this.height)
    
  }


  //Executa o jogo
  run(){
    
    this.canvas.width = this.width/2
    this.canvas.height = this.height/2
    this.canvas.style.border = '1px solid #000'

    document.body.appendChild(this.canvas)
    this.canvas.addEventListener('mousedown',this.click)

    this.loop();
  }
}


let game = new Game();

game.run();