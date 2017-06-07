'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    //Propriedades do jogo
    this.canvas = document.createElement('canvas');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.frames = 0;
    this.context = this.canvas.getContext('2d');
  }

  //Evento ao clicas na tela


  _createClass(Game, [{
    key: 'click',
    value: function click(event) {
      alert('click');
    }

    //

  }, {
    key: 'loop',
    value: function loop() {
      this.update();
      this.draw();

      window.requestAnimationFrame(this.loop());
    }
  }, {
    key: 'update',
    value: function update() {
      this.frames++;
    }
  }, {
    key: 'draw',
    value: function draw() {
      this.context.fillStyle = '#00f';
      this.context.fillRect(0, 0, this.width, this.height);
    }

    //Executa o jogo

  }, {
    key: 'run',
    value: function run() {

      this.canvas.width = this.width / 2;
      this.canvas.height = this.height / 2;
      this.canvas.style.border = '1px solid #000';

      document.body.appendChild(this.canvas);
      this.canvas.addEventListener('mousedown', this.click);

      this.loop();
    }
  }]);

  return Game;
}();

var game = new Game();

game.run();