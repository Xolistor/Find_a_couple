import { itemReady, position_a_and_b, buffer_delet, Number_Imgs } from "./main.js";
export let isRemoveReady = false;
const Winner = document.querySelector('.winner');
const Message = document.querySelector('.message');
let score = 0;

function remove_item() {
	if (itemReady == true && isRemoveReady)  {
		document.querySelector(`#item-${buffer_delet[position_a_and_b[0]]}`).remove();
		document.getElementById(`itemClon-${buffer_delet[position_a_and_b[0]]}`).style = 'display: flex';
		document.querySelector(`#item-${buffer_delet[position_a_and_b[1]]}`).remove();
		document.getElementById(`itemClon-${buffer_delet[position_a_and_b[1]]}`).style = 'display: flex';
		buffer_delet[position_a_and_b[0]] = 0;
		buffer_delet[position_a_and_b[1]] = 0;
		console.log(buffer_delet);
		isRemoveReady = false;
		
		console.log('Remove: True');
	}
	
	if (Number(score) === 6) {
		Winner.style.display = 'flex';
		Message.style = 'display: block; width: 325px;';
		setTimeout(() => {
			Message.style.display = 'none';
		}, 15000);
		score = 0;
	}
}
setInterval(remove_item, 150);

export function changeRemove(boolean, scoreMain) {
	isRemoveReady = boolean;
	score = scoreMain;
	console.log(`Remove change boolean!  scoreRemove: ${score}`);
}
