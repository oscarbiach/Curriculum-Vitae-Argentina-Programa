function disableBlur() {
    const blurContainers = document.getElementsByClassName('blur')
    for(let container of blurContainers){
        container.style.filter = 'none'
    }
}

function enableBlur() {
    const blurContainers = document.getElementsByClassName('blur')
    for(let container of blurContainers){
        container.style.filter = 'blur(3px)'
    }
}