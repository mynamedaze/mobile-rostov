<?php
$name = $_POST['uname'];
$telephone = $_POST['utel'];
$deviceType = $_POST['udevice-type'];
$deviceModel = $_POST['udevice-model'];
$brokenType = $_POST['ubroken-type'];
$bonusType = $_POST['ubonus-type'];

$name = htmlspecialchars($name);
$telephone = htmlspecialchars($telephone);
$deviceType = htmlspecialchars($deviceType);
$deviceModel = htmlspecialchars($deviceModel);
$brokenType = htmlspecialchars($brokenType);
$bonusType = htmlspecialchars($bonusType);

$name = urldecode($name);
$telephone = urldecode($telephone);
$deviceType = urldecode($deviceType);
$deviceModel = urldecode($deviceModel);
$brokenType = urldecode($brokenType);
$bonusType = urldecode($bonusType);

$name = trim($name);
$telephone = trim($telephone);
$deviceType = trim($deviceType);
$deviceModel = trim($deviceModel);
$brokenType = trim($brokenType);
$bonusType = trim($bonusType);

//echo $firstname;
//echo "<br>";
//echo $telephone;
if(!empty($_POST['utel'])){
  mail("dstarinin@gmail.com", "Заявка на ремонт. i-service74.", "Имя: ".$name."\n Телефон: ".$telephone."\n Устройство: ".$deviceType."\n Модель: ".$deviceModel."\n Поломка: ".$brokenType."\n Подарок: ".$bonusType ,"From: dstarinin@gmail.com \r\n");

  //$post_data = array();

  //if (isset($_POST['uname'])) { $post_data['name'] = htmlspecialchars($_POST['uname']); } else { $post_data['name'] = ''; }
  //if (isset($_POST['uphone'])) { $post_data['phone'] = htmlspecialchars($_POST['uphone']); } else { $post_data['phone'] = ''; }
  //$post_data['site'] = 'iphone-express.ru';

  //$curl = curl_init();
  //curl_setopt($curl, CURLOPT_URL, 'http://portal.dev-platform.ru/Modules/RequestsForm/Listening/Index/5942200c877a5');
  //curl_setopt($curl, CURLOPT_POST, 1);
  //curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
  //curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
  //$output = curl_exec($curl);

  // Имя файла, в котором хранится счетчик
  $file_counter = "counter.txt";

  // Читаем текущее значение счетчика
  if (file_exists($file_counter)) {
      $fp = fopen($file_counter, "r");
      $counter = fread($fp, filesize($file_counter));
      fclose($fp);
  } else {
      $counter = 0;
  }
  // Увеличиваем счетчик на единицу
  $counter++;

  // Сохраняем обновленное значение счетчика
  $fp = fopen($file_counter, "w");
  fwrite($fp, $counter);
  fclose($fp);
}
?>