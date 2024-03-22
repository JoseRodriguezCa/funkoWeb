import { carritoLleno } from "../Carrito/Carrito"


export const navButton = (nombre,icono) => {
    const li = document.createElement('li')
    li.className='btnHeader'
    const i = document.createElement('i')
    i.className=icono
    const span = document.createElement('span')
    span.innerHTML=nombre
    if(nombre=='Carrito'){
        let numCarrito = carritoLleno.length
        const span = document.createElement('span')
        span.className='contador'
        span.textContent = numCarrito
        actualizarSpanCarrito(carritoLleno)
        li.addEventListener('click', () => {
        const cartDiv = document.querySelector(".cart");
        const body$$ = document.body
        cartDiv.classList.toggle("openned");
        body$$.classList.toggle("openned");})
        li.append(span)
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

export const actualizarSpanCarrito = (carritoLleno) => {
    const contadorSpan = document.querySelector('.contador');
    if (contadorSpan) {
        if(carritoLleno.length == 0 ){
            console.log(carritoLleno.length);
            contadorSpan.textContent = '0';
        }else {
            contadorSpan.textContent = carritoLleno.length;
            console.log("abajo",carritoLleno);
        }
    }
};