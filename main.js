 window.onload = function() {

	function Item(obj) {
		this.number = obj.number;
		this.color = obj.color;
		this.chance = obj.chance;
	}

	var zeroChance = 4;
	var redChance = 14;
	var blackChance = 16;

	function arrPush() {
		for(var i=0; i<29; i++) {
			if(i == 0) {
				var num = {number: 0, color: "green", chance: zeroChance};
				arrNumbers.push(num);
			} else if(i%2 == 0 && i != 0) {
				var num = {number: i, color: "red", chance: redChance};
				arrNumbers.push(num);
			} else {
				var num = {number: i, color: "black", chance: blackChance};
				arrNumbers.push(num);
			}

		}
	}

	function rand(arrNumbers) {
		var num = Math.floor(Math.random() * chanceLenght);
		var sum = 0;

		for(var i in arrNumbers) {
			if(i == 0 && num >= 0 && num <= arrNumbers[i].chance) {
			} else if(i == 0){
				sum += arrNumbers[i].chance;
			}

			if(i != 0 && num >= sum && num <= (sum + arrNumbers[i].chance)) {
				break;
			} else if(i != 0) {
				sum += arrNumbers[i].chance;
			}
		}
		currentNum = arrNumbers[i];
	}

	var chanceLenght = 424;
	var arrNumbers = [];
	var currentNum;
	var inputNum;

	var roulette = document.querySelector(".roulette");
	function createRoulette() {
		for(var i=0; i<arrNumbers.length; i++) {
			var box = document.createElement("div");
			box.className = "item";
			box.style.backgroundColor = arrNumbers[i].color;
			box.innerHTML = arrNumbers[i].number;
			roulette.appendChild(box);
		}
	}

	var roll = document.getElementById("roll");
	roll.onclick = function(){
		getInput();
		rand(arrNumbers);
		winOrNot();

		var arr = roulette.children;
		for(var i=0; i<arr.length-1; i++) {
			search(arr[i], i);
		}
	}

	function getInput() {
		inputNum = document.querySelector("input").value;
		if(inputNum != "") {
			info.innerHTML += "<p>Вы поставили на: " + inputNum + "</p>";		
		} else {
			info.innerHTML += "<p>Выберите число</p>";
		}
	}

	function search(el, idx) {
		if(parseInt(el.innerHTML) == currentNum.number && inputNum != "") {
			el.style.backgroundColor = "yellow";
		} else {
			el.style.backgroundColor = arrNumbers[idx].color;
		}
	}

	var info = document.querySelector(".info")
	function winOrNot()  {
		if(inputNum != "") {
			if(currentNum.number == inputNum) {
				info.innerHTML += "<p>Вы выиграли</p>";

			} else {
				info.innerHTML += "<p>Вы проиграли</p>";
			}
		}	
	}
	arrPush();
	createRoulette();
};