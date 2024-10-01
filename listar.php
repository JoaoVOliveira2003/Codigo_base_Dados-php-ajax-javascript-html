<?php
require('conecta.php');

$bd = Conecta();

// Selecionar todos os dados da tabela pessoa
$query2 = "SELECT * FROM pessoa";
$result = $bd->SqlExecuteQuery($query2);

$pessoas = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $pessoas[] = $row;
    }
}

// Desconectar
$bd->SqlDisconnect();

// Retornar o resultado como JSON
header('Content-Type: application/json');
echo json_encode($pessoas);
?>
