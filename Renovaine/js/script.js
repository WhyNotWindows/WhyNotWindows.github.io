const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('#closeModalBtn');

function scrollTrigger(selector, options = {}) {
    let els = document.querySelectorAll(selector);
    els = Array.from(els);
    els.forEach(el => {
        addObserver(el, options);
    });
    window.addEventListener('scroll', () => {
        if(window.pageYOffset < 1) {
            els.forEach(el => {
                el.classList.remove('text_active');
            });
        }
    })
}

function addObserver(el, options) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('text_active');
                //observer.unobserve(entry.target);
            }
        })
    }, options)
    observer.observe(el);
}
scrollTrigger(".text", {
    rootMargin: '-200px'
})

//calendly & modal
function isCalendlyEvent(e) {
    return e.data.event === 'calendly.event_scheduled';
};
   
window.addEventListener("message", function(e) {
    if(isCalendlyEvent(e)) {
        fbq('track', 'Schedule');
        overlay.classList.add('overlay_active');
        document.getElementsByTagName("body")[0].style.overflow = 'hidden';
        console.log('Scheduled');
    }
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('overlay_active');
    document.getElementsByTagName("body")[0].style.overflow = '';
});
closeModalBtn.addEventListener('click', () => {
    overlay.classList.remove('overlay_active');
    document.getElementsByTagName("body")[0].style.overflow = '';
});