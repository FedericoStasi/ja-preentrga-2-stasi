


let productos = []

class producto{
constructor(nombre,marca,precio,descripcion,cantidad){
    this.nombre=nombre
    this.marca=marca
    this.precio=precio
    this.descripcion=descripcion
    this.cantidad=cantidad
    this.info= "nombre :"+ this.nombre + "\n" + "marca :"+ this.marca + "\n" +"precio :"+ this.precio + "\n"+"descipcion :"+ this.descripcion + "\n"+"cantidad :"+ this.cantidad + "\n"
}
verInfo(){
    console.log(this.info)
}
}

function agregarProducto(){
    nombre=prompt("ingrese el nombre del producto: ")
    marca=prompt("ingrese la marca del producto: ")
    precio=prompt("ingrese el precio del producto: ")
    descripcion=prompt("ingrese la descripcion del producto: ")
    cantidad=prompt("ingrese la cantidad de unidades  disponibles del producto: ")

     let productoNuevo = new producto(nombre,marca,precio,descripcion,cantidad)

     productos.push(productoNuevo)
     console.log("producto agregado") 
}
function mostrarListaProductos(){
    for (i in productos){
        console.log(productos[i].nombre)
    } 
}

function buscarProducto(){
    let productoBuscado = prompt("que producto desea buscar: ")
    productoBuscado.toLowerCase
    for(i in productos){
        if (productos[i].nombre.includes(productoBuscado)){
            console.log("producto encontrado")
            console.log(productos[i].verInfo())
        }
        else{  
            continue
        }
    }
}

let respuesta =""

while (true) {
    let respuesta =""
    respuesta = prompt("que desea hacer \n presione 1 para ver la lista de productos \n presione 2 para cargar un producto \n presione 3 para buscar un producto \n presione 4 para salir" )

    if (respuesta == 1) {
        mostrarListaProductos()
        continue
    }
    else if (respuesta == 2) {
        agregarProducto()
        continue
    }
    else if(respuesta == 3){
        buscarProducto()
        continue
    }
    else if(respuesta == 4){
        console.log("hasta luego, vuelva pronto")
        break
    }
    else{
        console.log("seleccione una opcion valida por favor")
        continue
    }

}






