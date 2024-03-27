import { navMenu } from "../Header/NavBoton"
import { printProductsContent } from "../Main/main"
import { PRODUCTS } from "../MookProducts/MookProducts"
import { subMenu } from "../SubMenu/SubMenu"
import './EnlacesHeader.css'
export const enlaces = [
    {
    nombre:"Home",
    href:"/"
    },
    {
    nombre:"Novedades",
    href:"/"
    },
    {
    nombre:"Ofertas",
    href:"/"
    },
    {
    nombre:"Héroes",
    href:"/",
    submenu:[
        {
            nombre:'Marvel',
            href:'/'
        },
        {
            nombre:'DC cómics',
            href:'/'
        },
        {
            nombre:'Todos los héroes',
            href:'/'
        }
    ]
    },
    {
    nombre:"Peliculas",
    href:"/",
    submenu:[
        {
            nombre:'Harry Potter',
            href:'/'
        },
        {
            nombre:'Star Wars',
            href:'/'
        },
        {
            nombre:'El señor de los anillos',
            href:'/'
        },
        {
            nombre:'Regreso al futuro',
            href:'/'
        },
        {
            nombre:'Todas las peliculas',
            href:'/'
        }
    ]
    },
    {
    nombre:"Series",
    href:"/",
    submenu:[
        {
            nombre:'Stranger Things',
            href:'/'
        },
        {
            nombre:'Juego de Tronos',
            href:'/'
        },
        {
            nombre:'The Mandalorian',
            href:'/'
        },
        {
            nombre:'Todas las series',
            href:'/'
        },
    ]
    },
    {
    nombre:"Animación",
    href:"/",
    submenu:[
        {
            nombre:'Pixar',
            href:'/'
        },
        {
            nombre:'Pokémon',
            href:'/'
        },
        {
            nombre:'Dragon Ball',
            href:'/'
        },
        {
            nombre:'Anime',
            href:'/'
        },
        {
            nombre:'Masters of the Universe',
            href:'/'
        },
        {
            nombre:'Todas las animaciones',
            href:'/'
        },
    ]
    },
    {
    nombre:"Disney",
    href:"/",
    submenu:[
        {
            nombre:'Alicia en el pais de las maravillas',
            href:'/'
        },
        {
            nombre:'Toy Story',
            href:'/'
        },
        {
            nombre:'Moustros',
            href:'/'
        },
        {
            nombre:'Mickey',
            href:'/'
        },
        {
            nombre:'Princesas',
            href:'/'
        },
        {
            nombre:'Frozen',
            href:'/'
        },
        {
            nombre:'Clasicos',
            href:'/'
        },
        {
            nombre:'Todos Disney',
            href:'/'
        },
    ]
    },
    {
    nombre:"VideoJuegos",
    href:"/"
    },
    {
    nombre:"Deportes",
    href:"/"
    },
    {
    nombre:"Música",
    href:"/"
    },
    {
    nombre:"Personajes",
    href:"/"
    },
    {
    nombre:"Etiquetas",
    href:"/"
    }
]

    export const Menu = () => {
        const divContainer = document.createElement('div')
        divContainer.classList = 'containerMenu'
        const closeMenu = document.createElement('div')
        const pMenu = document.createElement('p')
        const back = document.createElement('i')
        back.className='fa-solid fa-chevron-left'
        back.classList.add('backOff')
        closeMenu.append(back,pMenu)
        const ulMenu = document.createElement('ul')
        const c=closeMenu
        c.classList = 'closeMenu'
        pMenu.classList = 'fa-solid fa-circle-xmark'
        divContainer.append(c,ulMenu)
        enlaces.forEach(enlace => {
            const elc = navMenu(enlace.nombre, enlace.href, enlace.submenu,'btnMenu')
            ulMenu.append(elc)
            if(enlace.submenu) {
                const submenu = subMenu(enlace.submenu)
                divContainer.append(submenu)
                elc.addEventListener('click', ()=> {
                    submenu.classList.add('activeSubMenu')
                    back.classList.add('backOn')
                })
                back.addEventListener('click', ()=>{
                    submenu.classList.remove('activeSubMenu')
                    back.classList.remove('backOn')
                })
            }
        });
        pMenu.addEventListener('click', ()=> {
            divContainer.classList.remove('active')
            const body$$ = document.body
            body$$.classList.toggle("openned");
        })
        return divContainer
    }



    export const handleSubMenu = () => {

    const menuNombre = document.querySelectorAll('.menuText')
    menuNombre.forEach(element => {
        element.addEventListener("click", (e) => {
            const recogedor = element.innerHTML
            const containerMenu = document.querySelector(".containerMenu");
            const body$$ = document.body
            body$$.classList.toggle("openned");
            containerMenu.classList.toggle("active");
            if(recogedor !== "Home"){
                PRODUCTS.forEach(element => {
                    e.preventDefault()
                    if(element.categoria.includes(recogedor)){
                        printProductsContent(PRODUCTS,recogedor )
                    }
                });
            }
        });
    });
    }

