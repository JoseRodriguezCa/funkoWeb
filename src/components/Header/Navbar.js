import { Menu } from "../enlacesHeader/EnlacesHeader"
import { navButton } from "./NavBoton"



const botonHeader = [
    {
        nombre:'Menu',
        icono:'fa-solid fa-bars'
    },
    {
        nombre:'Buscar',
        icono:'fa-solid fa-magnifying-glass'
    },
    {
        nombre:'Iniciar Sesión',
        icono:'fa-solid fa-user'
    }
    ,  {
        nombre:'Carrito',
        icono:'fa-solid fa-cart-shopping'
    }
]

export const navbar = () => {
    const navbar = document.createElement ('nav')
    const ul = document.createElement ('ul')
    navbar.append(ul)
    ul.className='btnContainer'
    const m = Menu()
    botonHeader.forEach(boton => {
        const btn = navButton(boton.nombre,boton.icono)
        if(boton.nombre =='Menu') {
            btn.addEventListener('click' , () => {
            m.classList.add('active')
            })
        }
        ul.append(btn)
    });
    navbar.append(m)

    return navbar
}