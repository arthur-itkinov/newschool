<?php

// var_dump($_POST);

$rez = ss_mail('itkinov6@gmail.com', 'Заявка с http://e-jschool.ru/', 'ФИО:' . $_POST['name'] . ". Телефон: " . $_POST['tel'] . ". E-mail: " . $_POST['email']);

function ss_mail($to, $subject, $text)
{
  require_once "SendMailSmtpClass2.php"; // подключаем класс

  $mailSMTP = new SendMailSmtpClass('arthur.itkinov@yandex.ru', 'XP7-9Wx-Sjt-49w', 'ssl://smtp.yandex.ru', 465, "UTF-8");

  $from = array(
    "artur", // Имя отправителя
    "arthur.itkinov@yandex.ru" // почта отправителя
  );
  // кому
  $to = $to;

  // отправляем письмо
  $result =  $mailSMTP->send($to, $subject, $text, $from);
  // $result =  $mailSMTP->send('Кому письмо', 'Тема письма', 'Текст письма', 'Отправитель письма');

  if ($result === true) {
    echo json_encode(array('ok' => 'Отправлено'));
  } else {
    echo json_encode(array('error' => $result));
    // echo "Error: " . $result;
  }
}
