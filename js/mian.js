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
        if (text.length > 250) {
            text = text.substring(0, 250) + '...';
        }
        element.textContent = text;
    });
    let reactions = document.querySelectorAll('.reaction');
    let reactionSpan = document.querySelector('.article-reaction-span');
    reactions.forEach(e => {
        e.onclick = function () {
            reactionSpan.classList.remove('d-none');
            let icon = e.querySelector("i");
            reactions.forEach(el => {
                let i = el.querySelector("i");
                i.classList.remove("fa-solid");
                i.classList.remove(el.getAttribute("id").toString());

            });
            icon.classList.toggle(e.getAttribute("id").toString());
            icon.classList.toggle("fa-solid");
        }
    });
    let tagSwiper = null;
    const initTagSwiper = function () {
        if (this.window.outerWidth < 992) {
            tagSwiper = new Swiper(".partner-swiper", {
                slidesPerView: 3,
                spaceBetween: 32,
                freeMode: true,
            });
        } else {
            tagSwiper = new Swiper(".partner-swiper", {
                slidesPerView: 10,
                spaceBetween: 20,
                freeMode: true,
            });
        }
    };
    window.addEventListener("resize", function () {
        initTagSwiper();
    }

    );
    initTagSwiper();

    window.addEventListener('scroll', function () {
        var footer = document.querySelector('footer');
        var fulltextLeftCard = document.querySelector('.fulltext-left-card');

        if (footer && fulltextLeftCard) {
            var footerTop = footer.getBoundingClientRect().top;

            if (footerTop < window.innerHeight) {
                fulltextLeftCard.classList.remove('fixed-right');
            } else {
                fulltextLeftCard.classList.add('fixed-right');
            }
        }
    });
});
$(function () {
    $("#pagination").pagination({
        items: 43,
        itemsOnPage: 3,
        currentPage: 1,
        displayedPages: 3,
        prevText: 'Назад',
        nextText: 'Вперед',
        displayedPages: $(window).width() < 768 ? 1 : 3,
        onPageClick: function (pageNumber, event) {
            //  // @* window.location.href = "/@language/article/list?@Html.Raw(catagoryId > 0 ? $"cId = { catagoryId } & " : "")@Html.Raw(tagId > 0 ? $"tagId = { tagId } & " : "")@Html.Raw(!string.IsNullOrEmpty(keyWord) ? $"keyWord = { keyWord } & " : "")page=" + pageNumber; * @
        }
    });
});


