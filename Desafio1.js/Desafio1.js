class ProductManager{
    constructor(){
        this.products=[]
    }

    static id=0
   // Agrega un producto inicial y avisa si hay un código repetido.
    addProduct (titulo, descripcion, precio, imagen, codigo, stock){
        for (let i= 0; i < this.products.length; i++){
         if(this.products[i].codigo ===codigo){
            console.log (`El código ${codigo} está repetido`);
            break;
         }
         }

         const newProduct={
            titulo, 
            descripcion, 
            precio, 
            imagen, 
            codigo, 
            stock, 
           
         }
        //Establecer que todos los campos sean obligatorios
        if (!Object.values (newProduct).includes (undefined)){
            ProductManager.id++;
            this.products.push({
              ...newProduct,
              id:ProductManager.id,
            });
        }else{
            console.log("Todos los campos son requeridos");
        }
         
    }
    //Devuelve un array con todos los productos creados
    getProduct(){
        return this.products;
    }
    // Avisa si hay un id ya existe
    existe(id){
        return this.products.find ((producto) => producto.id ===id);
         }

    getProductoById (id){ 
         !this.existe (id) ? console.log ("Not Found"): console.log (this.existe(id));

        }
}

     
    
const productos=new ProductManager();

//Inicio, array vacio
console.log (productos.getProduct());

//Agregamos productos
productos.addProduct ("Heladera", "Heladera con freezer", 300000, "imagen", "xcv120", 30);
//console.log (productos.getProduct ());
productos.addProduct ("Cocina", "Con cuatro hornallas y horno eléctrico", 250000, "imagen", "xcv124", 15);

productos.addProduct ("Seca ropa", "Horizontal de 1000w", 180000, "imagen", "xcv124", 10);
console.log (productos.getProduct ());

//Verificamos si el id ya existe

productos.getProductoById(4);
