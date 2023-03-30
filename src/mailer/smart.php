
<?php 

$name = $_POST['name'];
$text = $_POST['text'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


$mail->isSMTP();                                      
$mail->Host = 'smtp.mail.ru'; 
$mail->SMTPAuth = true;                               
$mail->Username = 'MANUXIN95@BK.RU';                 
$mail->Password = 'X4sHMHeukkkzzahnTxwY';                          
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;                                    
 
$mail->setFrom('MANUXIN95@BK.RU', 'Pulse');   
$mail->addAddress('maks.sergey.86@list.ru');     
$mail->isHTML(true);                               

$mail->Subject = 'Данные';
$mail->Body    = '
  Пользователь оставил данные <br> 
 Имя: ' . $name . ' <br>
 Номер телефона: ' . $text . '<br>
 E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>
