import sum  from './sum'
import css from '../styles/image_viewer.css'
import './image_viewer.js'

function component(){
    const element = document.createElement('div')
    element.innerHTML = 'Hello'
    element.classList.add('hello')
    return element
}
document.body.appendChild(component())
const total = sum(10, 5)
console.log('total', total)