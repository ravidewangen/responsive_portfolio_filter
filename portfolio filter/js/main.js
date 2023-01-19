const lists = document.querySelectorAll('.list');


lists.forEach((ele) => ele.addEventListener('click', addActiveClass));

let headerText = '';

function addActiveClass() {
    lists.forEach(link => link.className = 'list');
    this.className = 'list active';
    headerText = this.innerText.toLowerCase();
    filterPortfolio();
}

function filterPortfolio() {
    let allBx = document.querySelectorAll('.filter-body .bx');
    let showBx = document.querySelectorAll('.' + headerText);

    if (headerText == 'all') {
        allBx.forEach(bx => bx.classList.remove('hide'));
        allBx.forEach(bx => bx.classList.add('show'));
    } else {
        allBx.forEach(bx => bx.classList.add('hide'));
        showBx.forEach(bx => bx.classList.remove('hide'));
        showBx.forEach(bx => bx.classList.add('show'));
    }
}


window.onload = () => {
    headerText = 'all';
    filterPortfolio();
}
