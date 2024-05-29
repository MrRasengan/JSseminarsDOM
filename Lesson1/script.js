// Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
//   Получите ссылку на абзац с классом www. и вывести его в консоль

const blockEl = document.querySelector("#block");
console.log(blockEl);

const paragraphEl = document.querySelector("p.www");
console.log(paragraphEl);

const paragrapElclone = document.querySelectorAll(".www")[0];
console.log(paragrapElclone);

//необходимо заменить текст внутри ссылки
//заменить значение href на https://developer.mozilla.org/ru/

const linkEl = document.querySelector(".link");
linkEl.href = "https://developer.mozilla.org/ru/";
linkEl.textContent = "link text js";
console.log(linkEl);

//из дива с классом photo поменять значение src

const photoEl = document.querySelector(".photo");
photoEl.src = 'https://mediarost.com/media/com_jbusinessdirectory/pictures/companies/161/cropped-1621097163.jpeg';
console.log(photoEl);

//дан тег <div class="content"></div>
// создайте новый элемент p
// в него добавьте текст
// добавьте p внутрь <div class="content"></div>
// удалите добавленый узел

const contetEl = document.querySelector('.content');
const parEl = document.createElement('p');
parEl.textContent = 'Новый текст ';
contetEl.appendChild(parEl);
parEl.remove();

//создать элемент button, добавить в блок <div class="content"></div>
//При клике на который в консоль выводится сколько раз пользователь нажал на кнопку

const buttonEl = document.createElement('button');
buttonEl.textContent = 'Text JS';
let count = 0;
buttonEl.onclick = function(){
  count++;
  console.log(`нажато ${count} раз`);
}
contetEl.appendChild(buttonEl);

//дан тег <div class="content"></div>
//создать с помощью js новый элемент button
//добавьте текст для кнопки 'отправить'
// при клике на кнопку необходимо что бы текст менялся на 'Текст отправлен'

const buttonEl2 = document.createElement('button');
buttonEl2.textContent = 'Отправить';
buttonEl2.onclick = function(){
  buttonEl2.textContent = ('Текст отправлен');
}
contetEl.appendChild(buttonEl2);