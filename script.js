function toggleSearchBar() {
    const searchBar = document.querySelector('.search-bar-container');
    searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
}

function searchItems() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const title = card.querySelector('.title').textContent.toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function addToCart() {
    let notification = document.querySelector('.notification');
    notification.style.display = 'block';
    notification.style.opacity = '1';
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 300);
    }, 2000);
}
