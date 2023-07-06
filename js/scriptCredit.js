const btns = document.querySelectorAll('.js__btn-credit');
const rowCredit = document.getElementById('rowCredit');
const rowPay = document.getElementById('rowPay');

// ajax
// function processReqChange(req) {
//   try {
//     if (req.readyState == 4) {
//       if (req.status == 200) {
//         var serverData = req.responseText;
//         document.getElementById('div__ajax').innnerHTML = serverData
//       }
//       else {
//         document.getElementById('div__ajax').innnerHTML = 'Ошибка'
//       }
//     }
//   }
// }

// function sendReqGet() {
//   let req = new XMLHttpRequest()
//   req.open('GET', `https://3dsec.sberbank.ru/sbercredit/register.do?amount=3200000&dummy=true&currency=643&language=ru&orderNumber=${getRandomInt()}&password=Wr3f48kW&returnUrl=https://yandex.ru/&failUrl=https://www.google.ru/&userName=e-jschool-credit-api&description=INSTALLMENT&sessionTimeoutSecs=1200&orderBundle={"cartItems":{"items":[{"agentInterest":{"interestType":"3","interestValue":"2"},"discount":{"discountType":"percent","discountValue":"5"},"itemAmount":"3000000","itemCode":"123","itemCurrency":"643","itemDetails":{},"itemPrice":"3000000","name":"position_1","positionId":"1","quantity":{"measure":"kg","value":1}},{"agentInterest":{"interestType":"3","interestValue":"2"},"discount":{"discountType":"percent","discountValue":"5"},"itemAmount":"100000","itemCode":"456","itemCurrency":"643","itemDetails":{},"itemPrice":"50000","name":"position_2","positionId":"2","quantity":{"measure":"шт.","value":2}},{"agentInterest":{"interestType":"3","interestValue":"2"},"discount":{"discountType":"percent","discountValue":"5"},"itemAmount":"100000", "itemCode":"789","itemCurrency":"643","itemDetails":{},"itemPrice":"100000","name":"position_3","positionId":"3","quantity":{"measure":"шт.","value":1}}]},"customerDetails":{"contact" :"Ivan","deliveryInfo":{"city":"Moscow","country":"RU","deliveryType":"courier","postAddress":"Адрес доставки 1"},"email":"test@bpcbt.com","phone":"79032177777"},"installments":{"productID":"10","productType":"INSTALLMENT","rightTerms":[3,5]},"orderCreationDate":"2022-12-04T13:51:00"}&jsonParams={"phone":"79262440101"}`, true)
//   req.onreadystatechange = function() {
//     processReqChange(req);
//   }
//   req.onloadstart = function() {
//     document.getElementById('div__ajax').innnerHTML = 'Соединение с сервером ...';
//   }
//   req.send();
// }



function getRandomInt() {
  return Math.floor(Math.random() * 1000000);
}
// promis
function getCreditSberbank() {
  fetch(
    `https://3dsec.sberbank.ru/sbercredit/register.do?amount=3200000&dummy=true&currency=643&language=ru&orderNumber=${getRandomInt()}&password=Wr3f48kW&returnUrl=https://yandex.ru/&failUrl=https://www.google.ru/&userName=e-jschool-credit-api&description=INSTALLMENT&sessionTimeoutSecs=1200&orderBundle={"cartItems":{"items":[{"agentInterest":{"interestType":"3","interestValue":"2"},"discount":{"discountType":"percent","discountValue":"5"},"itemAmount":"3000000","itemCode":"123","itemCurrency":"643","itemDetails":{},"itemPrice":"3000000","name":"position_1","positionId":"1","quantity":{"measure":"kg","value":1}},{"agentInterest":{"interestType":"3","interestValue":"2"},"discount":{"discountType":"percent","discountValue":"5"},"itemAmount":"100000","itemCode":"456","itemCurrency":"643","itemDetails":{},"itemPrice":"50000","name":"position_2","positionId":"2","quantity":{"measure":"шт.","value":2}},{"agentInterest":{"interestType":"3","interestValue":"2"},"discount":{"discountType":"percent","discountValue":"5"},"itemAmount":"100000", "itemCode":"789","itemCurrency":"643","itemDetails":{},"itemPrice":"100000","name":"position_3","positionId":"3","quantity":{"measure":"шт.","value":1}}]},"customerDetails":{"contact" :"Ivan","deliveryInfo":{"city":"Moscow","country":"RU","deliveryType":"courier","postAddress":"Адрес доставки 1"},"email":"test@bpcbt.com","phone":"79032177777"},"installments":{"productID":"10","productType":"INSTALLMENT","rightTerms":[3,5]},"orderCreationDate":"2022-12-04T13:51:00"}&jsonParams={"phone":"79262440101"}`,
    {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    },
  )
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Статус: ' + response.status); 
      }
      response.json();
    })
    .then(function(json) {
      console.log(json);
      btns.innerHTML = json.formUrl;
    })

    .catch(function(e) {
      alert(e)
    })
    .then(function(){
      console.log('функция выполниться в любом случае!')
    })
}
// async
async function crediSber() {
  let response = await fetch(
    `https://3dsec.sberbank.ru/sbercredit/register.do?amount=3200000&dummy=true&currency=643&language=ru&orderNumber=${getRandomInt()}&password=Wr3f48kW&returnUrl=https://yandex.ru/&failUrl=https://www.google.ru/&userName=e-jschool-credit-api&description=INSTALLMENT&sessionTimeoutSecs=1200&orderBundle={"cartItems":{"items":[{"agentInterest":{"interestType":"3","interestValue":"2"},"discount":{"discountType":"percent","discountValue":"5"},"itemAmount":"3000000","itemCode":"123","itemCurrency":"643","itemDetails":{},"itemPrice":"3000000","name":"position_1","positionId":"1","quantity":{"measure":"kg","value":1}},{"agentInterest":{"interestType":"3","interestValue":"2"},"discount":{"discountType":"percent","discountValue":"5"},"itemAmount":"100000","itemCode":"456","itemCurrency":"643","itemDetails":{},"itemPrice":"50000","name":"position_2","positionId":"2","quantity":{"measure":"шт.","value":2}},{"agentInterest":{"interestType":"3","interestValue":"2"},"discount":{"discountType":"percent","discountValue":"5"},"itemAmount":"100000", "itemCode":"789","itemCurrency":"643","itemDetails":{},"itemPrice":"100000","name":"position_3","positionId":"3","quantity":{"measure":"шт.","value":1}}]},"customerDetails":{"contact" :"Ivan","deliveryInfo":{"city":"Moscow","country":"RU","deliveryType":"courier","postAddress":"Адрес доставки 1"},"email":"test@bpcbt.com","phone":"79032177777"},"installments":{"productID":"10","productType":"INSTALLMENT","rightTerms":[3,5]},"orderCreationDate":"2022-12-04T13:51:00"}&jsonParams={"phone":"79262440101"}`,
    {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    },
  )
  
  if (!response.ok) {
    throw new Error('Статус: ' + response.status); 
  }
  let json = await response.json();
  console.log(json);
}



btns.forEach(function (btn) {
  btn.addEventListener('click', () => {
    // getCreditSberbank();
    crediSber()
    

    // rowPay.classList.add('pay__visibility');
    // rowCredit.classList.remove('credit__visibility');
    // const validate = new window.JustValidate('.formcredit');
    // validate
    //   .addField('#exampleInputNameCredit', [
    //     {
    //       rule: 'minLength',
    //       value: 2,
    //       errorMessage: 'Слишком короткое имя',
    //     },
    //     {
    //       rule: 'maxLength',
    //       value: 30,
    //       errorMessage: 'Слишком длинное имя',
    //     },
    //     {
    //       rule: 'required',
    //       errorMessage: 'Вы не ввели имя',
    //     },
    //   ])
    //   .addField('#exampleInputPriceCredit', [
    //     {
    //       rule: 'minLength',
    //       value: 1,
    //       errorMessage: 'Слишком маленькая сумма',
    //     },
    //     {
    //       rule: 'required',
    //       errorMessage: 'Вы не ввели сумму к оплате',
    //     },
    //   ])
    //   .addField('#exampleInputEmailCredit', [
    //     {
    //       rule: 'required',
    //       errorMessage: 'Вы не ввели email',
    //     },
    //     {
    //       rule: 'email',
    //       errorMessage: 'Email не верен!',
    //     },
    //   ])
    //   .addField('#exampleInputPhoneCredit', [
    //     {
    //       rule: 'required',
    //       errorMessage: 'Вы не указали телефон!',
    //     },
    //     {
    //       validator: function (name, value) {
    //         const phone = selector.inputmask.unmaskedvalue();
    //         return Number(phone) && phone.length === 10;
    //       },
    //       errorMessage: 'Номер телефона должен содержать 10 цифр.',
    //     },
    //   ]);
  });
});
