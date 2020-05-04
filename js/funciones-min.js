
function func_memoria(e){
	//Guarda en la variable e la cantidad de pares encotnrados como el juego es de 4cuando sean 4 entrara a consola de exito
	e==4&&setTimeout(
		function(){
			$(".retro.mensaje").hide().find("p").html("");
			$("#final").show().find("p").html("¡Felicidades! encontraste los pares.");
			alert('¡Felicidades! encontraste los pares.'); location.reload(true);
		},500
	)
}

function parejas(){
	//Mostrar imagen por medio de block css 
	$(this).css({background:"#ff7f04"}).find("span").css({display:"block"});
	//preguntar si el par 1 es null 
	if(parUno===""){
		//Gurdar el primer atributo en la primera variable de espacio para saber cual se selecciono 
		parUno=$(this).attr("data-pareja");claseUno=$(this).attr("class")
	}else{
		//Gurdar el segundo atributo en la variable de espacio para saber cual se selecciono 
		parDos=$(this).attr("data-pareja");claseDos=$(this).attr("class");
		//COMPARAR Y SABER SI LAS DOS SON IGUALES, SI SON IGUALES MUESTRA MENSAJE DE CORRECTO Y GUARDA UN INDICATIVO EN LOG MEMORIA
		if(parUno===parDos){
			$(".retro.mensaje").stop().removeClass("incorrecto").show().find("p").html("¡Correcto!");
			setTimeout(function(){$(".retro.mensaje").fadeOut()},500);++memoria;func_memoria(memoria);claseUno="";claseDos=""
		}else{
			//Si las dos selecciones no son iguales muestra mensaje html de error y reinicia las opciones miostrando el error correspondiente
			$(".retro.mensaje").stop().addClass("incorrecto").show().find("p").html("Incorrecto. Vuelve a intentarlo.");
			setTimeout(function(){
				//ocualta imageny pone fondo basico  ADEMAS LIMPIA VARIABLES PARA NUEVOS CLIKS
				$("."+claseUno+", ."+claseDos).css({background:"#ffb76b"}).find("span").css({display:"none"});claseUno="";claseDos="";
				//GENREA OPACIDAD DEL
				$(".retro.mensaje").fadeOut()
			},1000)
		}
		//reinicia variables para los siguweintes click dentro delcontenedor memoria.
		parUno="";parDos=""
	}
}
//INCIA CRONOMETRO 
function crono(){
	//al dar click a cada article dentro del div memoria 
	$(document).on("click",".memoria article",parejas);
	//CAMBIAR DISEÑO CSS
	$(".memoria article").css(encendido);
	//contador ejecuta la funcion de tiempo de intervalo 
	contador=setInterval(function(){
		//Restar segundero y poner en el html por medio del $(".crono span").html("0"+segundero);
		--segundero;segundero>=20?$(".crono span").html(segundero):$(".crono span").html("0"+segundero);
		//Preguntar silos segundos se termina mostrar alera en html 
		if(segundero===0){$(".retro.mensaje").stop().addClass("incorrecto").show().find("p").html("¡Se acabó el tiempo!");}
		//Después de3 segundos de acabar el tiempo genera alert para bloquear ejecución y reiniciar juego  
		if (segundero === -3){ alert('Reniciar'); location.reload(true);}
	},1000)
}
//Crear variables basicas para el funcionamiento 
var claseUno="",claseDos="",memoria=0,parUno="",parDos="",contador=0,segundero=20,encendido={opacity:"1",cursor:"pointer"};