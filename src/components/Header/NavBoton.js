import { mostrarProductos } from "../Carrito/Carrito"


export const navButton = (nombre,icono) => {
    const li = document.createElement('li')
    li.className='btnHeader'
    const i = document.createElement('i')
    i.className=icono
    const span = document.createElement('span')
    span.innerHTML=nombre
    let numero;

    if(nombre=='Carrito'){
        numero = 0;
        const span = document.createElement('span')
        span.className='contador'
        span.innerHTML=`${numero}`
        const mostrar = mostrarProductos(numero);
        li.addEventListener('click', () => {
            const contenedor = document.querySelector('.contenedor')
            console.log(numero)
            if(!contenedor.classList.contains('contenedorActive')){
                contenedor.classList.add('contenedorActive')
            }else{
                contenedor.classList.remove('contenedorActive')
            }
        });
        li.append(span,mostrar)
    }


    li.append(i,span)

    return li
}


export const navMenu = (nombre,href,submenu,clase) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    const p = document.createElement('p')
    
    li.className=clase
    a.className='link'
    a.href = href
    p.innerHTML=nombre
    li.append(a)
    a.append(p)
    if(submenu){
        const i = document.createElement('i')
        i.className='fa-solid fa-angle-right'
        li.append(i)
    }

    

    return li
}