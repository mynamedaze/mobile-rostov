<?php
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
// Сбрасываем счетчик в ноль, в нашем случае это крон в 00:00
$counter = 0;

// Сохраняем обновленное значение счетчика
$fp = fopen($file_counter, "w");
fwrite($fp, $counter);
fclose($fp); 
?>