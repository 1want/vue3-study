import './index.css'

function message({ msg = '', time = 2000, type = 'primary' }) {
  const body = document.getElementsByTagName('body')[0]
  const dom = init(msg)
  fadeIn(dom, body)
  setColor(type, dom)
  fadeOut(dom, time, body)
}

function init(msg) {
  const dom = document.createElement('div')
  dom.className = 'msg-wrapper'
  dom.innerHTML = msg
  return dom
}

function setColor(type, dom) {
  switch (type) {
    case 'success':
      dom.style.background = 'rgb(129 128 207)'
      break
    case 'fail':
      dom.style.background = 'rgb(121 121 124)'
      break
    case 'primary':
      dom.style.background = '#83d0b3'
      break
  }
}

function fadeIn(dom, body) {
  body.append(dom)
  dom.style.animation = 'all .5s ease-in forwards'
  dom.style.animationName = 'myOpen'
}

function fadeOut(dom, time, body) {
  setTimeout(() => {
    dom.style.animation = 'all .5s ease-out forwards'
    dom.style.animationName = 'myClose'
  }, time)
  setTimeout(() => {
    body.removeChild(dom)
  }, time + 1000)
}
export { message }
