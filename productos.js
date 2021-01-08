class Producto{
    nombre = '';
    codigo = '';
    precio = 0;

    constructor(nombre, codigo, precio){
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
    }

    precioTotal(){
        return this.precio * 1.21;
    }

    calcularCuotas(cuotas){
        let precioTotal = this.precioTotal();
        return precioTotal / cuotas;
    }
}