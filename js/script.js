// Карусель
//Обработка клика на стрелку вправо
$(document).on('click', ".carousel-button-right",function(){ 
	var carusel = $(this).parents('.carousel');
	right_carusel(carusel);
	return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".carousel-button-left",function(){ 
	var carusel = $(this).parents('.carousel');
	left_carusel(carusel);
	return false;
});
function left_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 500); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 500, function(){
	  $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }); 
}

$(function() {
// Включить автоматическую прокрутку карусели
	auto_right('.carousel:first');
})

// Автоматическая прокрутка
function auto_right(carusel){
	setInterval(function(){
		if (!$(carusel).is('.hover'))
			right_carusel(carusel);
	}, 5000)
}
// Навели курсор на карусель
$(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})
//Убрали курсор с карусели
$(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})


// Валидация полей ввода
function form_2_Validation() {

    // валидация поля ввода имени пользователя
    // если в поле отсутствуют цифры
    if (/\D+/.test($("#input_full_name").val())) {
        // подсвечиваем поле зеленым - значение валидное
        $("#input_full_name").css("border-color", "green");   
    // иначе:
    } else {
        // красный border
        $("#input_full_name").css("border-color", "red");
        // эффекты jquery ui bounce для неправильно заполненного поля
         $("#input_full_name").effect("bounce", {times:3}, "slow" );
        // всплывающее окно типа dialog "правильно заполните поле" 
        $("#dialog").dialog("open");
    }
    
    // валидация поля ввода даты рождения пользователя
    // если в поле введены цифры формата дд.мм.гггг
    if (/\d\d.\d\d.\d\d\d\d/.test($("#datepicker").val())) {
        // подсвечиваем поле зеленым - значение валидное
        $("#datepicker").css("border-color", "green");   
    // иначе:
    } else {
        // красный border
        $("#datepicker").css("border-color", "red");
        // эффекты jquery ui bounce для неправильно заполненного поля
         $("#datepicker").effect("bounce", {times:3}, "slow" );
        // всплывающее окно типа dialog "правильно заполните поле" 
        $("#dialog").dialog("open");
    }
    
    // валидация поля ввода телефона пользователя
    if (/\+7\(\d{3}\)\d{3}-\d{4}/.test($("#input_phone").val())) {
        // подсвечиваем поле зеленым - значение валидное
        $("#input_phone").css("border-color", "green");   
    // иначе:
    } else {
        // красный border
        $("#input_phone").css("border-color", "red");
        // эффекты jquery ui bounce для неправильно заполненного поля
         $("#input_phone").effect("bounce", {times:3}, "slow" );
        // всплывающее окно типа dialog "правильно заполните поле" 
        $("#dialog").dialog("open");
    }

    // валидация поля ввода e-mail пользователя
    if (/[a-z0-9.-]+@+[a-z]+[.]+[a-z]+/ig.test($("#input_email").val())) {
        // подсвечиваем поле зеленым - значение валидное
        $("#input_email").css("border-color", "green");   
    // иначе:
    } else {
        // красный border
        $("#input_email").css("border-color", "red");
        // эффекты jquery ui bounce для неправильно заполненного поля
         $("#input_email").effect("bounce", {times:3}, "slow" );
        // всплывающее окно типа dialog "правильно заполните поле" 
        $("#dialog").dialog("open");
    }
    
    // валидация поля ввода города ппроживания пользователя
    
    let cities = $("#cities").val();
    if (cities != "Выберите город в котором вы живёте") {
        // подсвечиваем поле зеленым - значение валидное
        $("#cities").css("border-color", "green");   
    // иначе:
    } else {
        // красный border
        $("#cities").css("border-color", "red");
        // эффекты jquery ui bounce для неправильно заполненного поля
         $("#cities").effect("bounce", {times:3}, "slow" );
        // всплывающее окно типа dialog "правильно заполните поле" 
        $("#dialog").dialog("open");
    }

}

// выбор города проживания
$(function(){
    $.getJSON('cities.json', function(data) {
                $.each(data, function(key, val) {
                    $('#cities').append('<option value>' + val.region + " - " + val.city + '</option>');

                });
    });
});

// выбор даты рождения
$(function(){
    $("#datepicker").datepicker({
        monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
        dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
        firstDay:1,
        dateFormat:"dd.mm.yy",
        yearRange: '1900:c+1' ,
        changeYear: true,
        minDate: new Date(1900, 100 - 1, 25),
        maxDate: '+30Y',
    });
});

// эффекты jquery ui bounce для неправильно заполненного поля

$( document ).click(function() {
  $( "#toggle" ).toggle( "bounce", { times: 3 }, "slow" );
});

// диалоговое окно сообщения об ошибке по-умолчанию выключено с эффектами анимации
$(function(){
    $("#dialog").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 500
        },
        hide: {
            effect: "explode",
            duration: 500
        }
    });
});

// обработчик диалога
$("#opener").on( "click", function() {
    $("#dialog").dialog("open");
});

// 
