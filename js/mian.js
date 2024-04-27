document.addEventListener("DOMContentLoaded", function () {
    const dropdownItems = document.querySelectorAll('.dropdown-item'),
        maxTitle = document.querySelectorAll('.vercher-max-title');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function () {
            dropdownItems.forEach(item => {
                item.classList.remove('active');
            });
            const allCheckIcons = document.querySelectorAll('.vercher-nav-check');
            allCheckIcons.forEach(icon => {
                icon.classList.add('d-none');
            });
            this.classList.add('active');
            const checkIcon = this.querySelector('.vercher-nav-check');
            if (checkIcon) {
                checkIcon.classList.remove('d-none');
            }
        });
    });
    maxTitle.forEach(element => {
        let text = element.textContent.trim();
        if (text.length > 200) {
            text = text.substring(0, 200) + '...';
        }
        element.textContent = text;
    });
});
