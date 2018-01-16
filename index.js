


function validarDatos(a1,a2){
	return validarusuario(a1) && validarusuario(a2);
}

function validatodo(){

nom=document.getElementById('nombre').value;
pas=document.getElementById('pass').value;

if (validarDatos(nom,pas)){
alert('listo')
}else{

alert('existe error')
}


}


const tipos =["administrador","Normal","Super Usuario"];



tipos2= tipos.map(tipo => tipo.length)
tipos3= tipos.map(tipo => '- ${tipo}')
console.log(tipos)
console.log(tipos2)
console.log(tipos3)




const usuarios=[
{nombre:"Diego",edad:12,activo:true},
{nombre:"andres",edad:13,activo:true},
{nombre:"Araujo",edad:14,activo:true}
]

const usuarios2=usuarios.map(usuario=>usuario.nombre)
console.log(usuarios2)


const usuarios3=usuarios.filter(usuario=>{
	return usuario.activo && usuario.edad > 13
})



console.log(usuarios3)

const edades=usuarios.reduce(acumular,0)

function acumular(acum,usuario){
	return acum+usuario.edad;
}

console.log("resultados edades" +edades)