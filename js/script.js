let btnsPay = document.querySelector('.cards__course');

function handleClick(e) {
  alert(
    'Нет связи с банком. Заполните форму, чтобы менеджер с вами связался и отправил вам счет на оплату или свяжитесь по контактам указанным внизу сайта',
  );
}

btnsPay.addEventListener('click', handleClick);
