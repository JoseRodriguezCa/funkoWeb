import { handleSearch } from './src/components/Buscador/Buscador'
import { header } from './src/components/Header/Header'
import { printProductsContent } from './src/components/Main/main'
import { PRODUCTS } from './src/components/MookProducts/MookProducts'
import { handleSubMenu } from './src/components/enlacesHeader/EnlacesHeader'
import './style.css'

const body = document.querySelector('body')
const firstChild = document.body.firstChild;
const h = header()
body.insertBefore(h, firstChild)
printProductsContent(PRODUCTS)
handleSearch()

