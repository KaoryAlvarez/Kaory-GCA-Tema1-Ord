function impuestos(precio){
    let precio_total;
    if(precio<=20){
        precio_total=precio;
        return [precio_total.toFixed(2)];
    }
    if(precio>20 && precio<=40){
        precio_total=precio+(((precio-20)*30)/100);
        return [precio_total.toFixed(2)];
    }
    if(precio>40 && precio<=500){
        precio_total=precio+4+(((precio-40)*40)/100);
        return [precio_total.toFixed(2)];
    }
    if(precio>500){
        precio_total=precio+4+(((precio-40)*50)/100);
        return [precio_total.toFixed(2)];
    }

}
let resultado = (impuestos(40));
// console.log(resultado);