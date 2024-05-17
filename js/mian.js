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
    const vecherQstForm = document.querySelector("form#vecherqst");
    const submitButton = vecherQstForm.querySelector(".vecher-question-btn");
    const formCheckInputs = vecherQstForm.querySelectorAll(".form-check-input");

    vecherQstForm.addEventListener("submit", (event) => {
        event.preventDefault(); // 防止默认表单提交

        // 禁用按钮
        submitButton.disabled = true;

        // 获取选中的input
        const selectedInput = vecherQstForm.querySelector(".form-check-input:checked");

        if (selectedInput) {
            // 隐藏所有的 vecher-qst-progress
            const allProgressDivs = vecherQstForm.querySelectorAll(".vecher-qst-progress");
            allProgressDivs.forEach(div => div.classList.add("d-none"));

            // 准备数据
            const formData = new FormData();
            formData.append(selectedInput.name, selectedInput.value);

            // 发送请求到后端
            fetch("YOUR_BACKEND_ENDPOINT", {
                method: "POST",
                body: formData
            })
                .then(response => response.text()) // 获取原始文本响应
                .then(text => {
                    try {
                        const data = JSON.parse(text); // 尝试解析为 JSON
                        console.log("Parsed JSON:", data); // 输出解析后的 JSON 数据

                        // 更新前端
                        data.forEach(item => {
                            const progressDiv = vecherQstForm.querySelector(`#${item.id}`).closest('li').querySelector('.vecher-qst-progress');
                            progressDiv.classList.remove("d-none");
                            progressDiv.querySelector(".card-text").innerText = item.count;
                            progressDiv.querySelector(".progress-bar").style.width = `${item.percentage}%`;
                        });
                    } catch (error) {
                        console.error("Error parsing JSON:", error);
                        console.log("Received text:", text); // 输出原始文本以便调试
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                })
                .finally(() => {
                    // 重新启用按钮
                    submitButton.disabled = false;
                });
        } else {
            // 没有选中的input时重新启用按钮
            submitButton.disabled = false;
        }
    });
});



