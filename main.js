import { header } from './src/components/Header/Header'
import './style.css'

const body = document.querySelector('body')

const h = header()
body.append(h)
