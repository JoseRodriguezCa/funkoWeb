import "./Header.css"
import { logo } from "./Logo"
import { navbar } from "./Navbar"
import { contacto } from "./contacto"

export const header = () => {
    const header = document.createElement('header')
    header.classList.add('header')
    const c = contacto()
    const l = logo( '../../img/logo-1656528169.jpg','/', 'logo')
    const n = navbar()
    header.append(c,l,n)
    return header
}

