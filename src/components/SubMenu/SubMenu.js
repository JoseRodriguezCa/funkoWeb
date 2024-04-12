import { navMenu } from "../Header/NavBoton";
import { printProductsContent } from "../Main/main";
import { PRODUCTS } from "../MookProducts/MookProducts";

export const subMenu = (enlaces) => {
  const ulSubMenu = document.createElement("ul");
  ulSubMenu.className = "subMenu";
  enlaces.forEach((enlace) => {
    const elc = navMenu(
      enlace.nombre,
      enlace.href,
      enlace.submenu,
      "btnSubMenu"
    );
    ulSubMenu.append(elc);
  });
  return ulSubMenu;
};

export const handleSubMenu = () => {
  const menuNombre = document.querySelectorAll(".menuText");
  menuNombre.forEach((element) => {
    element.addEventListener("click", (e) => {
      const recogedor = element.innerHTML;
      const containerMenu = document.querySelector(".containerMenu");
      containerMenu.classList.toggle("active");
      if (recogedor !== "Home") {
        PRODUCTS.forEach((element) => {
          e.preventDefault();
          if (element.categoria.includes(recogedor)) {
            printProductsContent(PRODUCTS, recogedor);
          }
        });
      }
    });
  });
};
