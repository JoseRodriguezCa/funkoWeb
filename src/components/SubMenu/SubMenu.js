import { navMenu } from "../Header/NavBoton";

export const subMenu = (enlaces) => {
    const ulSubMenu = document.createElement('ul')
    ulSubMenu.className = 'subMenu'
    enlaces.forEach(enlace => {
        const elc = navMenu(enlace.nombre, enlace.href,enlace.submenu,'btnSubMenu')
        ulSubMenu.append(elc)
    });
    return ulSubMenu
}
