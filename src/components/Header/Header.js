import "./Header.css"
import { logo } from "./Logo"
import { navbar } from "./Navbar"
import { contacto } from "./contacto"

export const header = () => {
    const header = document.createElement('header')
    header.classList.add('header')
    const c = contacto()
    const l = logo( 'https://latiendadefunkopop.es/img/cms/latiendadefunkopop-logo-retina.png','/', 'logo')
    const n = navbar()
    header.append(c,l,n)
    return header
}

