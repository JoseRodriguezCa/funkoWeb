export const contacto = () => {
    const divContacto = document.createElement('div')
    divContacto.className = 'containerContacto'
    const divInstaFace = document.createElement('div')
    const insta = document.createElement('i')
    const face = document.createElement('i')
    const corazon = document.createElement('i')
    const a = document.createElement('a')
    const cuantos = document.createElement('span')
    const p = document.createElement('p')
    corazon.className = 'fa-regular fa-heart'
    face.className = 'fa-brands fa-facebook-f'
    insta.className = 'fa-brands fa-instagram'
    cuantos.innerText = '0'
    p.innerHTML = `Lista de deseos(${cuantos.innerText})`
    a.append(corazon,p)
    divInstaFace.append(insta,face)
    divContacto.append(divInstaFace,a)

    return divContacto
}