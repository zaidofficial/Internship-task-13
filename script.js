// filter by category
const box = document.getElementById("lightbox");
const bigImg = document.getElementById("lightbox-img");

document.addEventListener("click", function (event) {
    if (event.target.tagName === "IMG" && event.target.closest(".project-card")) {
        bigImg.src = event.target.src;
        box.style.display = "flex";
    }

    if (event.target === box || event.target === bigImg) {
        box.style.display = "none";
    }
});

//scroll button
const scrollBtn = document.querySelector(".scroll-btn");

    window.addEventListener("scroll", () => {
        scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

//animation on scroll
const observer = new IntersectionObserver((entries) =>
    {
        entries.forEach((entry) =>
            {
                console.log(entry);
                if (entry.isIntersecting)
                {
                    entry.target.classList.add('show');
                }else
                    {
                        entry.target.classList.remove('show');
                }
        })
})

const hiddenElmt = document.querySelectorAll('.project-card');
hiddenElmt.forEach((el) => observer.observe(el));