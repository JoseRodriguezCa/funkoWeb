import "./Carrito.css";

export const carritoLleno =
  JSON.parse(localStorage.getItem("productsCart")) || [];

const cart = document.querySelector(".cart");
cart.innerHTML = "";

export const actualizarCarrito = (products) => {
  cart.innerHTML = "";
  let totalSumValue = 0;

  products.forEach((product) => {
    const divProduct = document.createElement("div");
    const imgProduct = document.createElement("img");
    const divSpan = document.createElement("div");
    const numberSpan = document.createElement("span");
    const lessSpan = document.createElement("span");
    const sumSpan = document.createElement("span");
    const cartTotal = document.createElement("span");
    const trashCan = document.createElement("i");
    imgProduct.src = product.img;
    divProduct.className = "cart-div";
    divSpan.className = "div-span";
    numberSpan.textContent = product.cantidad;
    const totalPrice = product.precio * product.cantidad;
    cartTotal.textContent = totalPrice.toFixed(2) + "€";
    totalSumValue += totalPrice;
    trashCan.classList = "fa-solid fa-trash-can";
    trashCan.id = "trashCan";
    lessSpan.classList = "fa-solid fa-minus";
    sumSpan.classList = "fa-solid fa-plus";
    divSpan.append(lessSpan, numberSpan, sumSpan);
    divProduct.append(imgProduct, divSpan, trashCan, cartTotal);
    cart.append(divProduct);
    lessSpan.addEventListener("click", () =>
      restarProducto(product, divProduct, numberSpan, cartTotal, products)
    );
    sumSpan.addEventListener("click", () =>
      sumarProducto(product, numberSpan, cartTotal, products)
    );
    trashCan.addEventListener("click", () =>
      tacho(divProduct, product, products)
    );
  });
  const totalSum = document.createElement("span");
  const closeCart = document.createElement("i");
  closeCart.id = "closeCart";
  closeCart.classList = "fa-solid fa-circle-xmark";
  closeCart.addEventListener("click", () => {
    const cartDiv = document.querySelector(".cart");
    const body$$ = document.body;
    cartDiv.classList.toggle("openned");
  });
  totalSum.id = "totalSum";
  totalSum.textContent = "Total: " + totalSumValue.toFixed(2) + "€";
  cart.append(totalSum, closeCart);
};

const restarProducto = (
  producto,
  divProducto,
  spanCantidad,
  cartTotal,
  products
) => {
  if (producto.cantidad > 1) {
    producto.cantidad--;
    spanCantidad.textContent = producto.cantidad;
    cartTotal.textContent =
      (producto.precio * producto.cantidad).toFixed(2) + "€";
  } else {
    const index = carritoLleno.findIndex((item) => item.id === producto.id);
    if (index !== -1) {
      carritoLleno.splice(index, 1);
    }
    divProducto.remove();
    if (carritoLleno.length === 0) {
      const totalSumElement = document.querySelector("#totalSum");
      totalSumElement.style.display = "none";
    }
  }
  actualizarPrecioTotal(products);
  guardarCarrito();
  actualizarSpanCarrito(products);
};

const sumarProducto = (producto, spanCantidad, totalSpan, products) => {
  producto.cantidad++;
  spanCantidad.textContent = producto.cantidad;
  totalSpan.textContent =
    (producto.precio * producto.cantidad).toFixed(2) + "€";
  guardarCarrito();
  actualizarPrecioTotal(products);
  actualizarSpanCarrito(products);
};

const actualizarPrecioTotal = (products) => {
  let totalSumValue = 0;
  for (const product of products) {
    totalSumValue += product.precio * product.cantidad;
  }
  const totalSumElement = document.querySelector("#totalSum");
  totalSumElement.textContent = "Total: " + totalSumValue.toFixed(2) + "€";
};

const tacho = (divProduct, product, products) => {
  const index = carritoLleno.findIndex((item) => item.id === product.id);
  if (index !== -1) {
    product.cantidad = 1;
    carritoLleno.splice(index, 1);
  }
  divProduct.remove();
  if (carritoLleno.length === 0) {
    const totalSumElement = document.querySelector("#totalSum");
    totalSumElement.style.display = "none";
  }
  guardarCarrito();
  actualizarPrecioTotal(products);
  actualizarSpanCarrito(products);
};

const guardarCarrito = () => {
  localStorage.setItem("productsCart", JSON.stringify(carritoLleno));
};

export const actualizarSpanCarrito = (carritoLleno) => {
  const contadorSpan = document.querySelector(".contador");
  if (contadorSpan) {
    if (carritoLleno.length == 0) {
      contadorSpan.textContent = "0";
    } else {
      contadorSpan.textContent = carritoLleno.length;
    }
  }
};

actualizarCarrito(carritoLleno);
