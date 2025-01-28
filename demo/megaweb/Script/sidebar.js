document.getElementById('menu-icon').addEventListener('click', function () {
    document.getElementById('sidebar').style.left = '0';
});

// Close sidebar
document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('sidebar').style.left = '-250px';
});




function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}



