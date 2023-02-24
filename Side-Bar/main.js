let hiddenText = document.getElementById('hidden-text');

function openMenu(e) {
    hiddenText.classList.remove('hidden-text');
    hiddenText.classList.add('show-text');
}
function closeMenu(e) {
    hiddenText.classList.add('hidden-text');
    hiddenText.classList.remove('show-text');
}