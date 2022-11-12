const header = document.getElementById('header')
const headerClassList = header.classList
window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        if (!headerClassList.contains('scrollHide')) {
            headerClassList.add('scrollHide')
        }
    } else {
        if (headerClassList.contains('scrollHide')) {
            headerClassList.remove('scrollHide')
        }
    }
})
