import './main.css'

const articulos = [
    {articulo1:'https://res.cloudinary.com/dtgsaqjwa/image/upload/v1708905870/latiendadefunkopop_slider_novedades_octubre22_compress_l1nhkk.jpg',
    href:'/'
    },
    {articulo2:'https://res.cloudinary.com/dtgsaqjwa/image/upload/v1708905902/latiendadefunkopop_sliders_secundarios_camiseta_funko_10octubre22_q8njs7.jpg',
    href:'/'
    },
    {articulo3:'https://res.cloudinary.com/dtgsaqjwa/image/upload/v1708905908/latiendadefunkopop_sliders_secundarios_camiseta_funko_10octubre22-2_aln749.jpg',
    href:'/'
    }
]

export const main = () => {
    const main = document.createElement('main')
    const section = document.createElement('section')
    section.className='sectionContainer'
    main.append(section)

    articulos.forEach((articulo, index) =>{
        const article = document.createElement('article')
        article.classList='artContenedor'
        const a = document.createElement('a')
        const img = document.createElement('img')
        img.src=articulo[`articulo${index + 1}`]
        article.append(img)
        a.append(article)
        a.target='_blank'
        a.href=articulo.href
        section.append(a)
    } )
    return main
}