import './Buscador.css'

export const buscador = () => {
    const form = document.createElement('form')
    const input = document.createElement('input')
    const i = document.createElement('i')
    i.classList = 'fa-solid fa-magnifying-glass'
    i.id = 'lupa'
    input.type = 'text'
    input.placeholder = 'Buscar'
    input.id = 'buscador'
    form.className = 'containerBuscador'
    form.append(input,i)
    return form
}


export const handleSearch = () => {
    const input = document.querySelector('#buscador')
    input.addEventListener("keydown", (e) => {
        if(e.key === 'Enter'){
        e.preventDefault()
        console.log(input.value)
        }
    })
    // input.addEventListener("keyup", (e) => {
    //     if(e.key === 'Enter'){
    //     e.preventDefault()
    //     console.log(input.value)
    //     }
    // })
}