/*
(function($) {
$(function() {

  $('ul.tabs_header').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
  });

});
})(jQuery);
*/

(function($) {
$(function() {

  $('ul.nav-pills').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('nav-link active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
  });

});
})(jQuery);


function form_2_Validation() {

    var full_name_field, phone_field, email_field, text;

    full_name_field = document.getElementById("input_full_name").value;
    if (/\D+/.test(full_name_field)) {
        document.getElementById("input_full_name").style.borderColor = "green";
        text = "";
    } else {
        document.getElementById("input_full_name").style.borderColor = "red";
        text = "Поле заполнено неправильно";
    }
    document.getElementById("text_full_name").innerHTML = text;
    
    phone_field = document.getElementById("input_phone").value;
    if (/\+7\(\d{3}\)\d{3}-\d{4}/.test(phone_field)) {
        document.getElementById("input_phone").style.borderColor = "green";
        text = "";
    } else {
        document.getElementById("input_phone").style.borderColor = "red";
        text = "Поле заполнено неправильно";
    }
    document.getElementById("text_phone").innerHTML = text;

    
    email_field = document.getElementById("input_email").value;
//        if (/\+7\(\d{3}\)\d{3}-\d{4}/.test(phone_field)) {

    if (/[a-z0-9.-]+@+[a-z]+[.]+[a-z]+/ig.test(email_field)) {
        document.getElementById("input_email").style.borderColor = "green";
        text = "";
    } else {
        document.getElementById("input_email").style.borderColor = "red";
        text = "Поле заполнено неправильно";
    }
    document.getElementById("text_email").innerHTML = text;
    
}


$(function(){
    $.getJSON('cities.json', function(data) {
                $.each(data, function(key, val) {
//                    $('#cities').append('<option value="' + val.region + '">' + val.city + '</option>');
                    $('#cities').append('<option value>' + val.region + " - "+ val.city + '</option>');

                });
    });
});
