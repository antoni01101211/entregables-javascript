let nombre= prompt("Bienvenido cual es tu nombre?")
function saludo(nombre){

    alert( "hola, un placer conocerte "+ nombre);
};
saludo(nombre);

function menor(nombre){
    alert(nombre + " no es tan chica  no seas pervertid@");
    alert("Pero  su edad rima con biscocho");
    
};
function mayor(nombre){
    alert(nombre + " intenta de nuevo pero ya vi que te gustan mayores ehhh XD");
    alert("Su edad rima con biscocho");
    
};


let entrada = prompt("Ahora intenta adivinar la edad de tu futur@ novi@");
while (entrada != 38) {
    console.log(entrada);
    alert("El número " + entrada + "  No es la edad del amor de tu vida");
    if(entrada < 25){
        menor(nombre)
    }
    else if(entrada > 25){
        mayor(nombre)
    }

    entrada = prompt ("Intenta con otro número entre 0 y 48");
}
alert("¡Felicidades encontraste la edad del amor de tu vida ver por ella tigre");