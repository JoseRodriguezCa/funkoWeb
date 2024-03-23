export const contacto = () => {
    const divContacto = document.createElement('div')
    divContacto.className = 'containerContacto'
    const divInstaFace = document.createElement('div')
    const insta = document.createElement('a')
    const face = document.createElement('a')
    face.href = "#"
    insta.href = "#"
    face.className = 'fa-brands fa-facebook'
    insta.className = 'fa-brands fa-instagram'
    divInstaFace.append(insta,face)
    divContacto.append(divInstaFace)

    return divContacto
}


