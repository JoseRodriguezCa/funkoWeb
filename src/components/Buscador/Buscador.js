import { printProductsContent } from "../Main/main";
import { PRODUCTS } from "../MookProducts/MookProducts";
import "./Buscador.css";

export const buscador = () => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const i = document.createElement("i");
  i.classList = "fa-solid fa-magnifying-glass";
  i.id = "lupa";
  input.type = "text";
  input.placeholder = "Buscar";
  input.id = "buscador";
  form.className = "containerBuscador";
  form.append(input, i);
  return form;
};

export const handleSearch = () => {
  const lupa = document.querySelector("#lupa");
  lupa.addEventListener("click", () => {
    PrintFilter();
  });
  const input = document.querySelector("#buscador");
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      PrintFilter();
    }
  });
};

const PrintFilter = () => {
  const input = document.querySelector("#buscador");
  const changeSearch = document.querySelector(".containerBuscador");
  const searchText = input.value.toLowerCase();
  changeSearch.classList.toggle("activeBuscador");
  const filteredProduct = PRODUCTS.filter((product) => {
    const searchName = product.nombre.toLowerCase().includes(searchText);
    const searchCategory = product.categoria.some((categoria) =>
      categoria.toLowerCase().includes(searchText)
    );
    return searchName || searchCategory;
  });
  console.log(filteredProduct);
  printProductsContent(filteredProduct);
  input.blur();
};
