let scrollFun = (selector) => {
    let selectedElem = document.querySelector(selector)
    window.scrollTo({
        top: selectedElem.getBoundingClientRect().y + window.scrollY,
        behavior: "smooth"
    })
}