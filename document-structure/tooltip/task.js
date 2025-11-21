
let tooltip = document.querySelectorAll('.has-tooltip');
let elementA = document.querySelectorAll('[title]');
tooltip.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        let tooltipText = item.getAttribute('title');
        let newDiv = document.createElement('div');
        newDiv.className = 'tooltip_active';
        newDiv.textContent = tooltipText;
        item.appendChild(newDiv);
        item.addEventListener('mouseenter', () => {
            newDiv.style.display = 'block';
            newDiv.style.left = event.clientX + 30 + 'px';
            newDiv.style.top = event.clientY + 30 + 'px';
        });
        item.addEventListener('mouseleave', () => {
            newDiv.style.display = 'none';
        });
    })
});

