let nombre= prompt("Bienvenido cual es tu nombre")

let entrada = prompt(nombre +" adivina la edad de tu futura novi@");
while (entrada != 38) {
    console.log(entrada);
    alert("El número " + entrada + "  No es la edad del amor de tu vida");
    if(entrada < 25){
        alert("No es tan chica pervertid@");
        alert("Pero  su edad rima con biscocho");
    }
    else if(entrada > 25){
        alert("Intenta de nuevo pero ya vi que te gustan mayores ehhh XD");
        alert("Su edad rima con biscocho");
    }
    else if(entrada ==28){
        alert("Un poco mayor me indican las estrellas pero ya estas cerca");
    }
    else if(entrada ==48){
        alert("Ya se añejo bastante intenta mas abajo estas cerca");
    }
    entrada = prompt ("Intenta con otro número entre 0 y 48");
}
alert("¡Felicidades encontraste la edad del amor de tu vida ver por ella tigre38");