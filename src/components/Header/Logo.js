

export const logo = (src, href, c) => {
    const logo = document.createElement('div')
    const a = document.createElement('a')
    const img = document.createElement('img')
    logo.classList.add(c)
    img.src = src
    a.href = href
    a.append(img)
    logo.append(a)
    return logo
}