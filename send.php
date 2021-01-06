$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);
$email = htmlspecialchars($email);
$name = urldecode($name);
$tel = urldecode($tel);
$email = urldecode($email);
$name = trim($name);
$tel = trim($tel);
$email = trim($email);

echo $name;
echo "<br>";
echo $tel;
echo "<br>";
echo $email;

mail("milonova.nastasia@gmail.com", "Заявка с сайта", "Имя:".$name.". E-mail: ".$email."Телефон:".$tel , "From: milonova.nastasia@gmail.com \r\n");

if (mail("milonova.nastasia@gmail.com", "Заявка с сайта", "Имя:".$name.". E-mail: ".$email."Телефон:".$tel , "From: milonova.nastasia@gmail.com \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}