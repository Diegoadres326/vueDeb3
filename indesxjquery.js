
$(document).ready(inicio)

function inicio(){


	$("#guardar").on("click",validar);




}

function validar(){
nom=$("#nombre").val()


if(validarec(nom,5)){
	
}

}

function mostrarMesnaje(elemento,mensaje){
	elemento.parent().addClass("has-error");
	

}