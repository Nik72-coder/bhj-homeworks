
let tooltip = document.querySelector('.tooltip');
let link = document.querySelectorAll('.has-tooltip');
link.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const tooltipText = event.target.getAttribute('title');
        tooltip.textContent = tooltipText;
        const cursorX = event.clientX;
        const cursorY = event.clientY;
        tooltip.style.left = `${cursorX}px`;
        tooltip.style.top = `${cursorY}px`;
        tooltip.style.transform = 'translate(15px, 15px)';
        tooltip.classList.add('tooltip_active');
    });
});
document.addEventListener('click', (event) => {
    if (event.target.classList.value !== 'has-tooltip') {
        tooltip.classList.remove('tooltip_active');
    };
});