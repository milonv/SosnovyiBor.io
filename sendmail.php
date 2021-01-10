<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    
    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';
    
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru','phpmailer/language/');
    $mail->IsHTML(true);
    
    //от кого письмо
    $mail->setFrom('milonova.nastasia@gmail.com', 'Заявка с сайта');
    $mail->addAdress('milonova.nastasia@gmail.com');
    $mail->Subject = 'Заявка с сайта';
    
    $body = '<h1>Заявка с сайта:</h1>';
    
    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>имя:</strong>'.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['tel']))){
        $body.='<p><strong>телефон:</strong>'.$_POST['tel'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>почта:</strong>'.$_POST['email'].'</p>';
    }

    $mail->Body = $body;

    if(!$mail->send()){
        $message = 'Ошибка';
    }else{
        $message = 'Данные отправлены';
    }
    $response = ['message'=>$message];
    header('Content-type: application/json');
    echo json_encode($response);
?>