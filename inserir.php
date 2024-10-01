<?php
require('conecta.php');
$retorno = 'nok';

$nome = $_POST['nome'];
$idade = $_POST['idade'];

$bd = Conecta();

// Inserir dados
$query1 = "INSERT INTO pessoa (nome, idade) VALUES ('$nome', '$idade')";

if ($bd->SqlExecuteQuery($query1)) {
    $retorno = 'ok';
}

// Desconectar
$bd->SqlDisconnect();

// Retornar o resultado como texto simples
echo $retorno;
?>
