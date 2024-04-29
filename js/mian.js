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
window.addEventListener('scroll', function () {
    var footer = document.querySelector('footer'); // 获取 footer 元素
    var fulltextLeftCard = document.querySelector('.fulltext-left-card'); // 获取具有 fulltext-left-card 类的卡片元素

    var footerTop = footer.getBoundingClientRect().top; // 获取 footer 元素顶部相对于视口的位置

    if (footerTop < window.innerHeight) { // 如果 footer 已经进入视口
        fulltextLeftCard.classList.remove('fixed-right'); // 移除固定样式
    } else {
        fulltextLeftCard.classList.add('fixed-right'); // 否则添加固定样式
    }
});
