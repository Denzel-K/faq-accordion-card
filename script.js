const faqs = document.querySelectorAll('.question');

for (i=0; i<faqs.length; ++i) {
    faqs[i].addEventListener('click', change);
    function change() {
        this.classList.toggle('active');
    };
};
