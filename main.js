import { header } from './src/components/Header/Header'
import { main } from './src/components/Main/main'
import './style.css'

const body = document.querySelector('body')

const h = header()
const m = main()
body.append(h,m)
