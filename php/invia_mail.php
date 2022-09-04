<?php


$nome = $_GET['nome'];
$email = $_GET['email'];
$messaggio = $_GET['messaggio'];

//Controlli
if($nome==""){
    header('location: ../index.html?invio=no');
    die();
}

$a = "tindarovincenzogaudiero@gmail.com";
$oggetto = "Email dal Modulo Contatti del sito web";
$messaggio = "
<h1>Messaggio dal sito:</h1>
<br>
<b>NOME:</b>
" . $nome . "
<br>
<b>EMAIL:</b>
" . $email . "
<br>
<b>MESSAGGIO:</b>
" . $messaggio . "
<br>
";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: tindarovincenzogaudiero@gmail.com' . "\r\n";

if (mail($a, $oggetto, $messaggio, $headers)) {
    header('location: ../index.hmtl?invio=ok');
    die();
} else {
    header('location: ../index.hmtl?invio=ok');
    die();
}
