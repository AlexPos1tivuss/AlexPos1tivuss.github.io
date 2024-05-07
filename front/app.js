
let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 1!");
		item = "1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 2!");
		item = "2";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 3!");
		item = "3";
		tg.MainButton.show();
	}
});

btn4.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 4!");
		item = "4";
		tg.MainButton.show();
	}
});

btn5.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 5!");
		item = "5";
		tg.MainButton.show();
	}
});

btn6.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 6!");
		item = "6";
		tg.MainButton.show();
	}
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild("Привет, " + p);

function showDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.opacity = "1";
    dropdown.style.pointerEvents = "all";
}

function hideDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.opacity = "0";
    dropdown.style.pointerEvents = "none";
}

function selectQuantity(itemId, text, btnId) {
    var btn = document.getElementById("btn" + btnId);
    btn.innerText = text;
    btn.disabled = false;
    var prevBtn = document.getElementById("btn" + (btnId - 1));
    if (prevBtn.innerText !== "Факультет") {
        btn.disabled = false;
    }
    // Hide the dropdown content
    var dropdown = document.getElementById("dropdown" + btnId);
    dropdown.style.opacity = "0";
    dropdown.style.pointerEvents = "none";
}

function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    if (dropdown.style.opacity === "1") {
        dropdown.style.opacity = "0";
        dropdown.style.pointerEvents = "none";
    } else {
        dropdown.style.opacity = "1";
        dropdown.style.pointerEvents = "all";
    }
}
