//Задание1
// Дан блок с классом block
//Внутри него создать элемент div с классом item, разместить внутри текст "Элемент внутри" и задать стили:
//Цвет текста синий
//Рамка сплошная чёрная
//Цвет фона #f8f8f8
//Внутренний отступ 16рх
//Добавить анному блку класс item_1(использовать setAttribute)

const blockEl = document.querySelector(".block");
const itemEl = document.createElement("div");
itemEl.setAttribute("class", "item");
itemEl.textContent = "Элемент внутри";
blockEl.appendChild(itemEl);
itemEl.style.color = "blue";
itemEl.style.border = "1px solid black";
itemEl.style.backgroundColor = "#f8f8f8";
itemEl.style.padding = "16px";
itemEl.setAttribute("class", "item_1");

//Задание2

//необходимо с помощью querySelector найти параграф с классом text
//вывести в консоль:
// соседний элемент h2
// родительский эл content
// картинку
// родительский эл elem

// const textEl = document.querySelector('.text');
// console.log(textEl.previousSibling);
// console.log(textEl.previousElementSibling);
// console.log(textEl.parentElement);
// console.log(textEl.parentElement.previousElementSibling);
// console.log(textEl.parentElement.parentElement);

//Задание 3

//С помощью querySelector найти эл h2 и вывести в консоль всех его родителей

const paragrapfEl = document.querySelector("h2");
console.log(paragrapfEl.parentElement);
console.log(paragrapfEl.parentElement.parentElement);
console.log(paragrapfEl.parentElement.parentElement.parentElement);
console.log(paragrapfEl.parentElement.parentElement.parentElement.parentElement);
console.log(paragrapfEl.parentElement.parentElement.parentElement.parentElement.parentElement);
console.log(paragrapfEl.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);

//Задание 4
// Если пользователь жмёт кнопку отправить ,
//а поле ввода пустое, то под полем ввода и кнопкой
//должен появиться заголовок h2  с текстом вы не заполнили поле ввода
// цвет рамки сделать красным

const inputEl = document.querySelector("input");
const btnEl = document.querySelector(".btn");
const formEl = document.querySelector("form");
let h2El;

btnEl.addEventListener("click", (event) => {
	event.preventDefault();
	if (inputEl.value.trim() === "") {
		if (!h2El) {
			h2El = document.createElement("h2");
			h2El.textContent = "Пустая строка";
      inputEl.after(h2El);
		}
		inputEl.style.border = "4px solid red";
	} else {
		if (h2El) {
			inputEl.style.border = "1px solid black";
			h2El.remove();
      h2El = null;
		}
		formEl.submit();
		formEl.reset();
	}
});
