let form = document.getElementById('form');

form.addEventListener('submit', formSend);
async function formSend(e) {
  e.preventDefault();
  let formData = new FormData(form);

  // let response = await fetch('../php/mail_script.php', {
    let response = await fetch('../mail.php', {
    method: 'POST',
    body: formData,
  });
  if (response.ok) {
    let result = await response.json();
    alert(result.ok);
    form.reset();
  } else {
    alert('Ошибка');
  }
}

let btnsPay = document.querySelector('.cards__course');

function handleClick(e) {
  alert(
    'Нет связи с банком. Заполните форму, чтобы менеджер с вами связался и отправил вам счет на оплату или свяжитесь по контактам указанным внизу сайта',
  );
}

btnsPay.addEventListener('click', handleClick);
