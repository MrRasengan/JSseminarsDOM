// Задание 1
// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

// document.body.insertAdjacentHTML(
// 	"beforeend",
// 	`<form>
//   <input type="checkbox">
//   <label>Согласен с условиями</label>
//   <br><button type="submit">Отправить</button>
//   </form>`
// );

// const checkboxEl = document.querySelector("input");
// const buttonEl = document.querySelector("button");
// const formEl = document.querySelector("form");
// let errorMessage = false;

// buttonEl.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (!checkboxEl.checked && !errorMessage) {
//     const paragraph = document.createElement('p');
//     paragraph.textContent = "Необходимо согласиться с условиями" ;
//     buttonEl.insertAdjacentElement('afterend', paragraph);
//     errorMessage = true;
//   } else if (checkboxEl.checked ){
//     formEl.submit();
//   }
// });

// Задание 2
// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

// document.body.insertAdjacentHTML(
// 	"beforeend",
// 	`<form>
//   <label><input type="radio" id = "tea" name = "shooseDrink">Чай</label>
//   <label><input type="radio" id = "coffee" name = "shooseDrink">Кофе</label>
//   <br><button>Отправить</button>
//   <p></p>
//   </form>`
// );

// const buttonEl = document.querySelector('button');
// const inputEls = document.querySelectorAll('input');
// const paragraphEL = document.querySelector('p');
// paragraphEL.style.color = "red";

// buttonEl.addEventListener('click', (event) =>{
//   event.preventDefault();
//   inputEls.forEach((elem) => {
//     if (elem.checked) {
//       if (elem.id === 'tea') paragraphEL.textContent = "Чай закончился";
//       else if (elem.id === 'coffee') paragraphEL.textContent = "Кофе закончился";
//     }
//   })
// });

// Задание 3
// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

// document.body.insertAdjacentHTML(
// 	"beforeend",
// 	`<form>
//   <label>Введите пароль: <input type="password"></label>
//   <br><button>Отправить</button>
//   </form>`
// );

// const inputPass = document.querySelector("input");
// const buttonEl = document.querySelector("button");

// buttonEl.addEventListener("click", (event) => {
// 	event.preventDefault();
// 	if (inputPass.value === "пароль") {
// 		inputPass.style.border = "3px solid green";
//     alert("Добро пожаловать!");
// 	} else {
//     inputPass.style.border = "3px solid red";
//     inputPass.placeholder = "Пароль неверный";
//     inputPass.value = "";
//   }
// });

// Задание 4
// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода


document.body.insertAdjacentHTML(
	"beforeend",
	`<input type="text"></label>
  <br><h1>Заголовок</h1>
  </form>`
);

const inputEl = document.querySelector('input');
const headingEl = document.querySelector('h1');
inputEl.addEventListener('input', function () {
  headingEl.textContent = inputEl.value;
});