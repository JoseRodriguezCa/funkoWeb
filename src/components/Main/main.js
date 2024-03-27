import {
  actualizarCarrito,
  actualizarSpanCarrito,
  carritoLleno,
} from "../Carrito/Carrito";
import "./main.css";


const createProductElement = (product) => {
  const div = document.createElement("div");
  const name = document.createElement("h3");
  const price = document.createElement("p");
  const divImg = document.createElement("div");
  const img = document.createElement("img");
  const cart = document.createElement("img");
  const p = document.createElement("span");
  name.textContent = product.nombre;
  price.textContent = product.precio + "€";
  img.src = product.img;
  divImg.classList.add("div-img");
  div.classList.add("product");
  cart.classList.add("cart-img");
  cart.src = "https://cdn-icons-png.flaticon.com/512/5465/5465858.png";
  div.append(cart);
  div.append(name);
  div.append(divImg);
  div.append(price);
  divImg.append(img);

  cart.addEventListener("click", () => {
    const existingProduct = carritoLleno.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.cantidad += 1;
    } else {
      carritoLleno.push(product);
    }
    localStorage.setItem("productsCart", JSON.stringify(carritoLleno));
    actualizarCarrito(carritoLleno);
    actualizarSpanCarrito(carritoLleno);
  });

  return div;
};

export const printProductsContent = (products, categoriaSeleccionada) => {
  const divContent = document.querySelector(".content");
  divContent.innerHTML = "";
  const filteredProducts = products.filter((product) =>
    product.categoria.includes(categoriaSeleccionada)
  );
  if (filteredProducts.length > 0) {
    for (const product of filteredProducts) {
      const productElement = createProductElement(product);
      divContent.append(productElement);
    }
  } else {
    for (const product of products) {
      const productElement = createProductElement(product);
      divContent.append(productElement);
    }
  }

  if (carritoLleno.length === 0) {
    const totalSumElement = document.querySelector("#totalSum");
    totalSumElement.style.display = "none";
  }
};
