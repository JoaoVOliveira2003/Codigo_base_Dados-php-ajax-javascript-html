function gravarDados() {
    var paginaGravar = "inserir.php";

    $.ajax({
        type: "POST",
        url: paginaGravar,
        data: $("#formulario").serialize(),
        success: function(response) {
            $("#message").text(response === 'ok' ? 'Dados salvos com sucesso!' : 'Erro ao salvar os dados.');
            if (response === 'ok') {
                listarDados();
            }
            $("#formulario")[0].reset();
        },
        error: function() {
            $("#message").text("Erro ao salvar os dados.");
        }
    });
}

function listarDados() {
    $.ajax({
        type: "GET",
        url: "listar.php",
        success: function(response) {
            var dataList = $("#dataList");
            dataList.empty();
            if (response.length > 0) {
                var table = '<table class="table"><thead><tr><th>Nome</th><th>Idade</th></tr></thead><tbody>';
                response.forEach(function(item) {
                    table += '<tr><td>' + item.nome + '</td><td>' + item.idade + '</td></tr>';
                });
                table += '</tbody></table>';
                dataList.html(table);
            } else {
                dataList.text("Nenhum registro encontrado.");
            }
        },
        error: function() {
            $("#dataList").text("Erro ao carregar os dados.");
        }
    });
}

$(document).ready(function() {
    $("#formulario").on("submit", function(event) {
        event.preventDefault();
        gravarDados();
    });
    listarDados(); // Carregar dados ao carregar a página
});
