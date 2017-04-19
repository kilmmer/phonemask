// máscara aplicada com jQuery
// script criado por Kilmmer Kielblock Ⓒ 2017
var n;

$("#fone").keypress(function(){
    n = $("#fone").val();
    console.log(n);

    if(n[5] == "9"){
        $("#fone").mask("(00) 90000-0000");
    }else{
        $("#fone").mask("(00) 0000-0000");
    }
});