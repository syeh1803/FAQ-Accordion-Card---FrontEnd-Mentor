// select all accordion-question and loop through each item
document.querySelectorAll('.accordion-question').forEach(item => {
    item.addEventListener('click', () => {
        // toggle - font weight becomes bolder
        item.classList.toggle('open');
        // toggle - show accordion-content
        item.nextElementSibling.classList.toggle('show');
    })
})
