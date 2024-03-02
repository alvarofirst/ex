/*
    Sistema de Gestión de una Tienda
    Desarrolla un programa en PSeInt para gestionar una tienda. El programa debe permitir al usuario realizar las siguientes acciones:

    - Agregar un nuevo producto al inventario con información 
      como name, price, cantidad en stock y categoría.

    - Vender un producto, actualizando la cantidad disponible en stock.

    - Mostrar una lista de todos los productos en el inventario 
      ordenados por categoría.

    - Calcular el total de ventas realizadas en un día específico.
*/

const products = [
  {
    name: "Carne",
    price: 5000,
    stock: 10,
    category: "comestibles",
  },

  {
    name: "Cereal",
    price: 3000,
    stock: 4,
    category: "comestibles",
  },
  {
    name: "Mesa",
    price: 120000,
    stock: 30,
    category: "hogar",
  },
  {
    name: "Mesa",
    price: 120000,
    stock: 30,
    category: "A",
  },

  {
    name: "Mesa",
    price: 120000,
    stock: 30,
    category: "B",
  },
];

const productSales = [
  {
    name: "Carne",
    price: 5000,
    category: "comestibles",
    date: "02/02/2024",
  },
  {
    name: "Carne",
    price: 5000,
    category: "comestibles",
    date: "02/02/2024",
  },

  {
    name: "Carne",
    price: 5000,
    category: "comestibles",
    date: "01/02/2024",
  },
];

function addProduct(name, price, stock, category) {
  const product = { name, price, stock, category };
  products.push(product);
  return products;
}

// Vender un producto y actualizar su estado en [] products
function sellProduct(productName, quantity) {
  const date = new Date().toLocaleDateString(); // obtener fecha actual
  const productSold = products.find(
    (product) => product.name === productName
  );

  //  borrar {stock}
  delete productSold.stock;

  productSold.date = date;

  productSales.push(productSold);
  products.map((product) => {
    if (product.name === productName) {
      product.stock -= quantity;
    }
  });
  return products;
}

function showProducts() {
  // console.log(products.sort());
  return products.sort((a, b) => a.category.localeCompare(b.category));
}

// Obtener total productos vendidos y el total de la venta
function getTotal(date) {
  let totalVentas = 0;
  const totalProducts = productSales.filter((product) => product.date === date);

  //console.log(totalProducts.length);

  totalProducts.forEach((product) => (totalVentas += product.price));

  //console.log(totalVentas);
  return {
    vendidos: totalProducts.length,
    totalVentas,
  };
}

// añadir producto
console.log(addProduct("Tv", 10000, 5, "hogar"));
console.log(products);

// venta de producto
console.log(sellProduct("Cereal", 1));

//Mostrar productos ordenados por category
console.log(showProducts());

// obtener total productos vendidos y el total de la venta
console.log(getTotal("01/02/2024"));
