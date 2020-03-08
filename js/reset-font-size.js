resetFontSize()
function resetFontSize(){
// 获取屏幕宽度或叫可视区宽度 , 这里叫视口(viewport)
  // 方法1.
  var w = window.screen.width
  // 方法2. var w = document.ducumentElement.clientWidth
  // 方法3. var w = window.innerWidth
  document.documentElement.style.fontSize = w/10 + 'px'
}