<?php
$miamail = "tindarovincenzogaudiero@gmail.com";
$successo = $_GET['successo'];
$nome = $_GET['nome'];
$email = $_GET['email'];
$msg = $_GET['messaggio'];

$messaggio = "Nome: " . $nome . "\nEmail: " . $email . "\nTel: " . $tel . "\nMessaggio: " . $msg;
$headers = "From: " . $miamail . "\r\n" . "Reply-To: " . $miamail;
mail($miamail,"Messaggio dal sito",$messaggio,$headers);
header("location: " . $successo);
?>