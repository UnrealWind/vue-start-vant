
// 解决移动端click事件300毫秒延迟方法
import FastClick from 'fastclick'

if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    function() {
      FastClick.attach(document.body)
    },
    false
  )
}
