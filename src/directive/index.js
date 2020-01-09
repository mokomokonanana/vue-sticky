// IEでスクロールがガタつく問題対応
const wheel = (event) => {
  event.preventDefault()
  event.currentTarget.eventParam.target.scrollTop += event.deltaY
}

const scroll = (event) => {
  stickyTop(event.target.eventParam)
  stickyLeft(event.target.eventParam)
}

const stickyTop = (sticky)=>{
  if(!sticky.top || isNaN(sticky.top)) return
  const items = Array.from(sticky.target.children).slice(0, sticky.top)
  items.forEach(item => {
    item.style.position = 'relative'
    item.style.top = `${sticky.target.scrollTop}px`
  })
}

const stickyLeft = (sticky)=>{
  if(!sticky.left || isNaN(sticky.left)) return
  sticky.target.children.forEach(row => {
    const items = Array.from(row.children).slice(0, sticky.left)
    items.forEach((item, index) => {
      item.style.width = `${item.clientWidth}px`
      item.style.position = 'relative'
      item.style.left = `${sticky.target.scrollLeft}px`
    })
  })
}

const test = {
  bind: function(el, binding, vnode) {
    // IEの場合スクロールがガタつくので対応（IE11のみ）
    if(navigator.userAgent.match(/Trident\/7\./))
      vnode.elm.addEventListener('wheel', wheel)
    // 固定ヘッダ用
    vnode.elm.addEventListener('scroll', scroll)
    vnode.elm.eventParam = {
      target: vnode.elm,
      top : binding.value.top,
      left : binding.value.left
    }
  },
  unbind: function(el, binding, vnode){
    vnode.elm.removeEventListener('wheel', wheel)
    vnode.elm.removeEventListener('scroll', scroll)
    vnode.elm.eventParam = undefined
  },
}
export default test