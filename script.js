// //Решение на чистом JS

// //массив с дивами с классом "accordoin__title"
// const accord = document.getElementsByClassName("accordoin__title");
// //переключатель интерфейса
// const swtch = document.getElementById("interface");

// //перебираем массив с нашими дивами "accordoin__title" и на каждый из них навешииваем addEventListener
// for (let i = 0; i < accord.length; i++) {
// 	//собственно говоря наш слушатель. В случае если по какомуто элементу произойдет клик последует следующее...
// 	accord[i].addEventListener("click", function () {
// 		//проверяем по какому интерфейсу нам слудовать
// 		//первый вариант
// 		if (!swtch.checked) {
// 			//с помошью команды toggle присваеваем или удаляем класс active нашему диву
// 			this.classList.toggle("active");
// 			//и для следующего элемента такогоже уровня вложенности добавляем или убираем класс show
// 			this.nextElementSibling.classList.toggle("show");
// 			//второй вариант
// 		} else {
// 			//перебираем все дивы и соседние с ними элементы и удаляем им вспомогательные классы active и show
// 			for (i = 0; i < accord.length; i++) {
// 				accord[i].classList.remove("active");
// 				accord[i].nextElementSibling.classList.remove("show");
// 			}
// 			//присваеваем выбраному диву класс active
// 			this.classList.toggle("active");
// 			//присваеваем следующему за нашим дивом элементу класс show
// 			this.nextElementSibling.classList.toggle("show");
// 		}
// 	})
// }


/*==========================================================
===========================================================*/

//Решение при помощью jQuery

//Скрипт будет работать только после прогрузки DOM
$(document).ready(function () {

	//При клике по любому элементу с классом accordoin__title сработает функция
	$('.accordoin__title').click(function () {
		//проверка какой вариант интерфейса выбран
		//первый вариант
		if (!$('#interface').is(':checked')) {
			//выбранному элементу при помощи toggleClass присвоить или удалить доп класс active
			$(this).toggleClass("active");
			//выбранному элементу при помощи toggleClass присвоить или удалить доп класс show
			$(this).next().toggleClass("show");
			//второй вариант
		} else {
			//всем элементам с классом accordoin__title удалить доп класс active
			$(".accordoin__title").removeClass("active");
			//всем элементам с классом accordion__cont удалить доп класс show
			$(".accordion__cont").removeClass("show");
			//выбранному элементу при помощи toggleClass присвоить доп класс active
			$(this).toggleClass("active");
			//выбранному элементу при помощи toggleClass присвоить доп класс show
			$(this).next().toggleClass("show");
		}
	})
});


