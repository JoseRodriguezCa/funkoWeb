import "./Header.css"
import { logo } from "./Logo"
import { navbar } from "./Navbar"
import { contacto } from "./contacto"


export const header = () => {
    const header = document.createElement('header')
    header.classList.add('header')
    const c = contacto()
    const l = logo('https://res.cloudinary.com/dtgsaqjwa/image/upload/v1708822774/latiendadefunkopop-logo-retina_meetbu.png','/', 'logo')
    const n = navbar()
    header.append(c,l,n)
    return header
}

