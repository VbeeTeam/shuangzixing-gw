var winWidth = document.documentElement.offsetWidth ||
	document.body.offsetWidth
winWidth = winWidth < 1366 ? 1366 : winWidth
var oHtml = document.getElementsByTagName('html')[0]
oHtml.style.fontSize = 100 * winWidth / 1920 + 'px'

window.addEventListener('resize', function() {
	var winWidth = document.documentElement.offsetWidth || document.body.offsetWidth
	winWidth = winWidth < 1400 ? 1400 : winWidth
	var oHtml = document.getElementsByTagName('html')[0]
	oHtml.style.fontSize = 100 * winWidth / 1920 + 'px'
})
