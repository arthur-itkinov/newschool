const btnPay = document.querySelectorAll('.js-btn__price');
// const form = document.getElementById('rowPay');
const rowcredit = document.getElementById('rowCredit');
const btnPaySubmit = document.getElementById('btnPaySubmit');

btnPay.forEach(function (btn) {
  btn.addEventListener('click', () => {
    rowcredit.classList.add('credit__visibility');
    form.classList.remove('pay__visibility');
    const validatePay = new window.JustValidate('.formPay');
    validatePay
      .addField('#exampleInputNamePay', [
        {
          rule: 'minLength',
          value: 2,
          errorMessage: 'Слишком короткое имя',
        },
        {
          rule: 'maxLength',
          value: 30,
          errorMessage: 'Слишком длинное имя',
        },
        {
          rule: 'required',
          errorMessage: 'Вы не ввели имя',
        },
      ])
      .addField('#exampleInputPricePay', [
        {
          rule: 'minLength',
          value: 1,
          errorMessage: 'Слишком маленькая сумма',
        },

        {
          rule: 'required',
          errorMessage: 'Вы не ввели сумму к оплате',
        },
      ])
      .addField('#exampleInputEmailPay', [
        {
          rule: 'required',
          errorMessage: 'Вы не ввели email',
        },
        {
          rule: 'email',
          errorMessage: 'Email не верен!',
        },
      ])
      .addField('#exampleInputPhonePay', [
        {
          rule: 'required',
          errorMessage: 'Вы не указали телефон!',
        },
        {
          validator: function (name, value) {
            const phone = selector.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          },
          errorMessage: 'Номер телефона должен содержать 10 цифр.',
        },
      ]);
  });
});

btnPaySubmit.addEventListener('click', (e) => {
  e.preventDefault();
  let result = fetch('https://3dsec.sberbank.ru/sbrfpayment/rest/getOrderStatusExtended.do', {
    method: 'POST',
    body: JSON.stringify({
      userName: 't7325173827-api',
      password: 'gjeyJU1p',
    }),
    headers: {
      'Content-Type': 'application / x - www - form - urlencoded',
    },
  });
});
