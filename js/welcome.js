import {getElementFromTemplate, appendScreen} from './util';
import levelArtist from './level_artist';

const WELCOME = `<section class="main main--welcome">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
<button class="main-play">Начать игру</button>
<h2 class="title main-title">Правила игры</h2>
<p class="text main-text">
  Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
Ошибиться можно 3 раза.<br>
Удачи!
</p>
</section>`;

const welcomeScreen = getElementFromTemplate(WELCOME);
const play = welcomeScreen.querySelector(`.main-play`);

play.addEventListener(`click`, () => appendScreen(levelArtist));


export default welcomeScreen;
