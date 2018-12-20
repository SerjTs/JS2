$(document).ready(() => {
  //выполнение кода по-готовности, когда всё прогрузится
    // обявление переменной в качестве обьекта data, в котором будут храниться данные
  let data = {
      // данные о цене входного билета
    cost: 9.99
  };

  // Получение количества участников события
  function getAttendeeCount() {
      // возвращение количества элементов найденных по селектору количество рядов row c классом attendee
    return $('.attendee-list .row.attendee').length;
  }
  
    // добавление участников события
  function addAttendee() {
      // функция обращается по классу к attendee-list и к нему добавляет следующий код
    $('.attendee-list').append(
        // который мы возьмём из нашего темплейта (атрибут html у искомого темплейта с названием data-template)
      $('template[data-template]').html()
    );
  }
    // удаление участника события
    function removeAttendee() {
    // находится ближайший предок .row
    var $row = $(event.target).closest('.attendee.row');
    // и удаляется
    $row.remove();    
  }
    
    // добавление формы имени автора и комментария
    function addCommentsFields() {
        // обращение к html по классу comments-list и добавление        
        $('.comments-list').append(
            // полей из шаблона comments-template
            $('template[comments-template]').html()
        );
    }
    
    // добавление комментария
    function addComment() {
        // получение содержимого поля автора
        let author = $('#form-author').val();
        // получение содердимого поля комментарий
        let message = $('#form-message').val();
        // размещение комментария на странице
        $(".comments-list").append("<div class='comment'>Автор: <strong>"+author+"</strong><br>"+"Сообщение: "+message+"</div>");
    } 
    
    // функция которая синхронизирует кнопки
  function syncRemoveButtons() {
      // если участник 1, то мы прячем кнопку удалить, иначе показываем все кнопки
    if (getAttendeeCount() === 1) {
        // методы hide() и show() меняют свойство display: none и display: block  
      $('.attendee-list .attendee .remove-attendee').first().hide();
    } else {
      $('.attendee-list .attendee .remove-attendee').show();
    }
  }
    // функция подсчета общей стоимости заказа
  function syncPurchaseButton() {
      // подсчитывается сумма заказа и выводится в кнопку
    $('#checkout-button span.amount').html(
      '$' + data.cost * getAttendeeCount()
    );
  }

  // Обработчики событий

  // Событие добавления нового участника
    // при клике на кнопку добавить участника
    // у метода on(click) есть коллбэк функция event? которой мы перехватываем событие клик на кнопку
  $('.add-attendee').on('click', (event) => {
      // и вешаем на кнопку вместо submit событие preventDefault, чтобы браузер не сабмитил, страхуемся
      // чтобы браузер не перегружал страницу, preventDefault отменяет событие по-умолчанию
    event.preventDefault();
      // добавляем участника выполнением функции
    addAttendee();
      // создаем пользовательское событие "attendee:add" и говорим что оно произошло (trigger)
    $('#app').trigger('attendee:add');
  });
    // вешаем обработчик на пользовательское событие и выполняем код
  $('#app').on('attendee:add', () => {
        // подсчет общей стоимости заказа
     syncPurchaseButton();
      // пересчёт суммы при добавлении участника и добавление/удаление кнопок Удалить 
    syncRemoveButtons();
  });

    // Событие удаления нового участника
    // при клике на кнопку "удалить"
    
     $('#app').on('click', '.attendee .remove-attendee', (event) => {
//    $('.remove-attendee').on('click', (event) => {
        // отключаем дефолтное значение кнопки submit 
        event.preventDefault();
        removeAttendee();
         
        $('#app').trigger('attendee:remove');
    });
    // вешаем обработчик на пользовательское событие и выполняем код
    $('#app').on('attendee:remove', () => {
      // подсчет общей стоимости заказа
    syncPurchaseButton();
      // пересчёт суммы при добавлении участника и добавление/удаление кнопок Удалить 
    syncRemoveButtons(); 
         
    });
    
    
    // Событие добавления комментария
    // при клике на кнопку добавить комментарий
//    $('.add-comment').on('click', (event) => {
    $('.comments-list').on('click', '.comments .add-comment', (event) => {
        // убираем дефолтный submit
        event.preventDefault();
        // добавляем комментарий
        addComment();
    });
    
  // Инициализация формы

  // Крепим цену входного билета
  $('#unit-price').html('$' + data.cost);
    // добавляем первого участника
  addAttendee();
    // синхронизация стоимости и кнопок
  syncPurchaseButton();
    // добавляем форму комментариев
    addCommentsFields();
    // судаляем лишнюю кнопку удалить
    syncRemoveButtons();
});