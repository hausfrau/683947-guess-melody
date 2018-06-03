import {appendScreen, getElementFromTemplate} from './util';
import timeOverWelcome from "./welcome";

const RESULT_TIME_OVER = `<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

<h2 class="title">Увы и ах!</h2>
<div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
<span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
</section>`;

const timeOverScreen = getElementFromTemplate(RESULT_TIME_OVER);
const replay = timeOverScreen.querySelector(`.main-replay`);

replay.addEventListener(`click`, () => appendScreen(timeOverWelcome));

export default timeOverScreen;
