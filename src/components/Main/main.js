import { actualizarCarrito, carritoLleno } from '../Carrito/Carrito';
import { actualizarSpanCarrito } from '../Header/NavBoton';
import './main.css'

export const printProductsContent = (products, categoriaSeleccionada) => {
  const divContent = document.querySelector(".content");
  divContent.innerHTML = "";

  for (const product of products) {
      if (!categoriaSeleccionada) {
          const div = document.createElement("div");
          const name = document.createElement("h3");
          const price = document.createElement("p");
          const divImg = document.createElement("div");
          const img = document.createElement("img");
          const cart = document.createElement("img");
          const p = document.createElement('span');
          name.textContent = product.nombre;
          price.textContent = product.precio + '€' ;
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
          divContent.append(div);
          cart.addEventListener("click", () => {
              const existingProduct = carritoLleno.find(item => item.id === product.id);
              if (existingProduct) {
                  existingProduct.cantidad += 1;
              } else {
                  carritoLleno.push(product);
              }
              localStorage.setItem("productsCart", JSON.stringify(carritoLleno));
              actualizarCarrito(carritoLleno);
              actualizarSpanCarrito(carritoLleno)
          });
      } else {
          if (product.categoria === categoriaSeleccionada) {
              const div = document.createElement("div");
              const name = document.createElement("h3");
              const price = document.createElement("p");
              const divImg = document.createElement("div");
              const img = document.createElement("img");
              const cart = document.createElement("img");
              const p = document.createElement('span');
              name.textContent = product.nombre;
              price.textContent = product.precio + '€' ;
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
              divContent.append(div);
              cart.addEventListener("click", () => {
                  const existingProduct = carritoLleno.find(item => item.id === product.id);
                  if (existingProduct) {
                      existingProduct.cantidad += 1;
                  } else {
                      carritoLleno.push(product);
                  }
                  localStorage.setItem("productsCart", JSON.stringify(carritoLleno));
                  actualizarCarrito(carritoLleno);
                  actualizarSpanCarrito(carritoLleno)
              });
          }
      }
  }
  if (carritoLleno.length === 0) {
      const totalSumElement = document.querySelector("#totalSum");
      totalSumElement.style.display = "none";
  }
};
