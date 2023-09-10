import GameLogic from '../js/playing-area/playing-area';

const app = new GameLogic();

app.renderField();

app.renderCounter();

setInterval(() => app.activateBlock(app.playingArea), 1500);

app.click(app.playingArea);
