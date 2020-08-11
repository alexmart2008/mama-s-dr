const radio1 = document.querySelector('.radio1>input');
const radio2 = document.querySelector('.radio2>input');
const imgs = document.querySelectorAll('.images>img');
radio1.addEventListener("click", (e) => {
	imgs.forEach((i) => {
		i.classList.remove("_active");
	});
	const item = e.target.getAttribute("data-num") - 1;
	imgs[item].className += " _active";
});

radio2.addEventListener("click", (e) => {
	imgs.forEach((i) => {
		i.classList.remove("_active");
	});
	const item = e.target.getAttribute("data-num") - 1;
	imgs[item].className += " _active";
});