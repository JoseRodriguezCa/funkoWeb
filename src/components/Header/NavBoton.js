

export const navButton = (nombre,icono) => {
    const li = document.createElement('li')
    li.className='btnHeader'
    const i = document.createElement('i')
    i.className=icono
    const span = document.createElement('span')
    span.innerHTML=nombre

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
        i.addEventListener('click', ()=>{
        const ulSubMenu = document.querySelector('.subMenu')
        ulSubMenu.classList.add('activeSubMenu')
        if(document.querySelector('.activeSubMenu')) {
            const backOff = document.querySelector('.backOff')
            backOff.classList.add('backOn')
            backOff.addEventListener('click', ()=>{
                ulSubMenu.classList.remove('activeSubMenu')
                backOff.classList.remove('backOn')
            })
        }
        })
    }

    

    return li
}