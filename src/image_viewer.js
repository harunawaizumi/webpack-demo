import okonomiyaki from './okonomiyaki.jpg'
import '../styles/image_viewer.css'

console.log(okonomiyaki)

const imgCreate = function(url) {
    const element = document.createElement('div')
    const image = new Image();
    image.src = url
    element.appendChild(image)
    return element
}

document.body.appendChild(imgCreate(okonomiyaki))
