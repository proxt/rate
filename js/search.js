$(function() {
  /* обрабатываем отправку формы */
  $('.search-form').submit(function() {
    var errVal = 'пустой запрос';
    /* ≈сли поле пустое или содержит значение errVal */
    if($('.search').val() == '' || $('.search').val() == errVal) {
      /* добавить в поле значение errVal, изменить цвет фона и */
      $('.search').val(errVal).css({backgroundColor: 'rgba(0,0,0,.1)'});
      /* возвратить false - форма не отправл€етс€ */
      return false;
    };
  });
  /* при фокусе на поле */
  $('.search').focus(function() {
    /* выставить пустое значение пол€, задать цвет фона в изначальный */
    $(this).val('').css({backgroundColor: '#d8e6ef'});
    /* показать всплывающую подсказку */
    $('.notice').fadeIn(400);
  });
  /* при сн€тии фокуса */
  $('.search').blur(function() {
    /* убрать всплывающую подсказку */
    $('.notice').fadeOut(400);
  });
});