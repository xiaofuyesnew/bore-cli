import '../public/index.html'
import './index.scss'
import '../public/util/util'

window.onload = () => {
  // $.init({

  // })
}

$(function () {
  $('.main').html('333')
  console.log('test')
  console.log($.pop)
  console.log($.loading())
  console.log($.cName('黄河水'))

  console.log($.loader.show())
})