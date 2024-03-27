import { buscador } from "../Buscador/Buscador"
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
    const b = buscador()
    botonHeader.forEach(boton => {
        const btn = navButton(boton.nombre,boton.icono)
        if(boton.nombre =='Menu') {
            btn.addEventListener('click' , () => {
                const body$$ = document.body
                body$$.classList.toggle("openned");
                m.classList.toggle('active')
            })
        }
        if (boton.nombre == 'Buscar') {
            btn.addEventListener('click', () => {
                if (!b.classList.contains('activeBuscador')) {
                    b.classList.add('activeBuscador');
                    const input = b.querySelector('input')
                    input.focus()
                } else {
                    b.classList.remove('activeBuscador');
                }
            });
        }
        ul.append(btn,b)
    });
    navbar.append(m)

    return navbar
}