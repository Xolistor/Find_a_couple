import { data_imgs } from "./imgs.js";
import { isRemoveReady } from "./remove_item.js";
import { changeRemove } from "./remove_item.js";
export let position_a_and_b = [0, -1];
export let itemReady = false;
export let buffer_delet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
export const Number_Imgs = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
const Container = document.querySelector('.container');
const Info = document.querySelector('.info');
const bkInfo = document.getElementById('bk-info');
const Score = document.querySelector('.score');
let open = 0;
let score = 0;
let a = -2, b = -1, b_true = false, a_true = true;

document.getElementById('info').onclick = deletInfo;
function deletInfo() {
	Info.style.display = 'none';
	bkInfo.style.display = 'none';
}

// Тасование Фишера — Йетса (Метод для случайного перезначения значений в массивах)
function shuffle(arr){
	var j, temp;
	for(var i = arr.length - 3; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}
shuffle(Number_Imgs);


// Этот цикл создаёт блоки, где будут находится картинки
for (let i = 0; i < 12; i++) {
	Container.innerHTML += `<div class="item item-${i}" id="item-${i}" style="background-color: #0e0e0e; " value="${Number_Imgs[i]}"><img class="img-${i}" style="opacity: 0;" draggable="false" src="${data_imgs[Number_Imgs[i]]}"></div>
	<div class="itemClon" id="itemClon-${i}"><img class="img-${i}" draggable="false" src="${data_imgs[Number_Imgs[i]]}"></div>`;
}
console.log(data_imgs);
console.log('itemReady: ' + itemReady);

// Цикл для добавления события на блоки
for (let i = 0; i < 12; i++) {
	Container.querySelector(`.item-${i}`).addEventListener('click', () => {
			console.log(true + "_open"); 
			Container.querySelector(`.img-${i}`).style = 'opacity: 1;'
			Container.querySelector(`.item-${i}`).style = 'background-color: azure;';
			open++;
			console.log(open);
			if (open > 2) {
				setTimeout(() => {
					for (let i2 = 0; i2 < 12; i2++) {
						open = 0;
						Container.querySelector(`.item-${buffer_delet[i2]}`).style = 'background-color: #0e0e0e;';
						document.querySelector(`.img-${buffer_delet[i2]}`).style = 'opacity: 0;';
					}
				}, 0);
			}
			if (!a_true){
				if (!b_true)
				{
					b = Number(Container.querySelector(`.item-${i}`).getAttribute('value'));
					position_a_and_b[1] = i;
					console.log(true);
					b_true = true;
				}
				else {
					b_true = false;
					b = -1;
					a = -2;
					position_a_and_b[0] = 0;
					position_a_and_b[1] = 1;
					a_true = true;
					itemReady = false;
				}
				
			}
			else {
				a = Number(Container.querySelector(`.item-${i}`).getAttribute('value'));
				position_a_and_b[0] = i;
				console.log(false);
				a_true = false;
			}
			console.log(`a = ${a}, b = ${b}; position: ${position_a_and_b[0]}, ${position_a_and_b[1]}`);
		});
	Container.querySelector(`.item-${i}`).addEventListener('click', () => {
		if (a === b) {
			itemReady = true;
			score++;
			changeRemove(true, score);
			console.log('itemReady: ' + itemReady);
		}
		else {
			console.log('itemReady: ' + itemReady);
		}
		if (itemReady) {
			Score.innerHTML = `Найдено пар: ${score}`;
			console.log(`Score: ${score}, itemReady: ${itemReady}`);
		}
	});
}
