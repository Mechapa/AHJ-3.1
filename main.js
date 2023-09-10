/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/playing-area/playing-area.js
class GameLogic {
  constructor() {
    this.hits = 0;
    this.misses = -1;
  }
  renderField() {
    this.playingArea = document.querySelector('.playing-area');
    for (let i = 0; i < 16; i += 1) {
      const block = document.createElement('div');
      block.id = i;
      block.classList.add('playing-area__item');
      this.playingArea.appendChild(block);
    }
  }
  renderCounter() {
    this.game = document.querySelector('body');
    const hitsCounterBlock = document.createElement('div');
    hitsCounterBlock.innerHTML = '<div class = \'counter\'> <div> Hits </div> <div class = \'hits\'> 0 </div>';
    this.game.appendChild(hitsCounterBlock);
    const missesCounterBlock = document.createElement('div');
    missesCounterBlock.innerHTML = '<div class = \'counter\'> <div> Misses </div> <div class = \'misses\'> 0 </div>';
    this.game.appendChild(missesCounterBlock);
  }
  activateBlock(playingArea) {
    this.playingAreaItems = Array.from(playingArea.querySelectorAll('.playing-area__item'));
    let prevIndex = 0;
    this.playingAreaItems.forEach(element => {
      if (element.classList.contains('activeBlock')) {
        element.classList.remove('activeBlock');
        prevIndex = element.index;
      }
    });
    const index = Math.floor(Math.random() * 15);
    if (prevIndex !== index) {
      this.playingAreaItems[index].classList.add('activeBlock');
    } else {
      this.playingAreaItems[0].classList.add('activeBlock');
    }
    this.misses += 1;
    this.game.querySelector('.misses').textContent = this.misses;
    this.checkWinner();
  }
  checkWinner() {
    if (this.hits === 20) {
      // eslint-disable-next-line no-alert
      alert('You win!');
      this.hits = 0;
      this.misses = -1;
    }
    if (this.misses === 5) {
      // eslint-disable-next-line no-alert
      alert('You lose!');
      this.hits = 0;
      this.misses = -1;
    }
    this.game.querySelector('.misses').textContent = this.misses;
    this.game.querySelector('.hits').textContent = this.hits;
  }
  click(playingArea) {
    this.playingAreaItems = Array.from(playingArea.querySelectorAll('.playing-area__item'));
    this.playingAreaItems.forEach(element => {
      element.addEventListener('click', () => {
        if (element.classList.contains('activeBlock')) {
          this.misses -= 1;
          this.hits += 1;
          this.game.querySelector('.hits').textContent = this.hits;
          element.classList.remove('activeBlock');
        }
      });
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const app = new GameLogic();
app.renderField();
app.renderCounter();
setInterval(() => app.activateBlock(app.playingArea), 1500);
app.click(app.playingArea);
;// CONCATENATED MODULE: ./src/index.js



/******/ })()
;