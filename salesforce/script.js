const faqItems = document.querySelectorAll(".faq-item");

            faqItems.forEach(item => {
                const question = item.querySelector(".faq-question");

                question.addEventListener("click", () => {
                    faqItems.forEach(i => {
                        i.classList.remove("active");
                        i.querySelector(".icon").textContent = "+";
                    });

                    item.classList.add("active");
                    item.querySelector(".icon").textContent = "−";
                });
            });