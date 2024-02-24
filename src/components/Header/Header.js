import "./Header.css"
import { logo } from "./Logo"
import { navbar } from "./Navbar"

export const header = () => {
    const header = document.createElement('header')
    header.classList.add('header')
    const l = logo( '../../../public/logo-1656528169.jpg','/', 'logo')
    const n = navbar()
    header.append(l,n)
    return header
}

