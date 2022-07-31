//data e hora atual//
var data = new Date();

//guardar cada informação de forma separada//
var dia = data.getDate(); // 1-31
var mes = data.getMonth(); // 0-11 0=janeiro
var ano =  data.getFullYear(); // 4 digitos
var hora = data.getHours(); // 0-23
var minuto = data.getMinutes(); // 0-59
var segundo = data.getSeconds(); // 0-59

var month = new Array();
month[0] = "Janeiro";
month[1] = "Fevereiro";
month[2] = "Março";
month[3] = "Abril";
month[4] = "Maio";
month[5] = "Junho";
month[6] = "Julho";
month[7] = "Agosto";
month[8] = "Setembro";
month[9] = "Outubro";
month[10] = "Novembro";
month[11] = "Dezembro";
var n = month[data.getMonth()];


//formatar data e hora
var str_data = dia+" de "+n+" de "+ano;
var str_hora = hora+":"+minuto+":"+segundo;
	
	var idioma = "";
	var sistema = "";
	
	idioma = "O idioma utilizado é " +navigator.language+ ".";
	sistema = "O navegador utilizado é (platafora-versão- navegador) " +navigator.userAgent+ ".";