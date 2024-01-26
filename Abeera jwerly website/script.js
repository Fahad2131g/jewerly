window.addEventListener("scroll", ()=> {
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

const header = document.querySelector("header")

const sr = ScrollReveal({
    distance: "75px",
    duration: '2600',
    delay: 450,
    reset: true
});
sr.reveal('.maintext h1', {delay:200, origin: 'left' });
sr.reveal('.maintext h5', {delay:250, origin: 'right' });
sr.reveal('header', {delay:250, origin: 'right' });
sr.reveal('.maintext', {delay:250, origin: 'left' });
sr.reveal('.trending, .updatenews', {delay:450, origin: 'top' });
sr.reveal('.contactinfo p', {delay:250, origin: 'right' });

const typed = new Typed(".multipletext", {
    strings: ["There's Nothing Like Trend", "Excellent Quality Availaible", "We are World Wide!", "Enter Coupons for Discounts.","Order Now!"],
    typeSpeed: 30,
    backSpeed: 25,
    backDelay: 1200,
    loop: true,
}); 

const togglebtn = document.querySelector('.togglebtn')
const togglebtnIcon = document.querySelector('.togglebtn i')
const dropdownmenu = document.querySelector('.dropdown')

togglebtn.onclick = function(){
    dropdownmenu.classList.toggle('open');
    const isOpen = dropdownmenu.classList.contains('open')

    togglebtnIcon.classList = isOpen
    ? "ri-close-line"
    : "ri-menu-line"
}

function goup(){
    window.scrollTo(0,0)
}

