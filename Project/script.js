function change_theme() {
let theme = document.getElementById('theme');
if (theme.querySelector('i').classList.contains('fa-moon')) {
    theme.querySelector('i').classList.remove('fa-moon');
    theme.querySelector('i').classList.add('fa-sun');
    theme.querySelector('i').style.color = 'white';
    document.body.style.backgroundColor = 'rgb(5, 2, 25)';
    // document.getElementById('section2').style.backgroundColor = '#052174';
    document.querySelectorAll('a').forEach(link => {
    link.style.color = 'white';
    });
    document.querySelectorAll('h4,h2').forEach(link => {
    link.style.color = 'white';
});
document.getElementById('idea-point').style.color='white';
    document.querySelector('nav').style.borderBottomColor='white';
    document.querySelector('footer').style.borderTopColor='white';
    document.getElementById('name_pro').style.color='white';
    document.querySelector('.fa-bars').style.color='white';
    
    // document.getElementById('h12').style.color = 'white';
} else {
    theme.querySelector('i').classList.remove('fa-sun');
    theme.querySelector('i').classList.add('fa-moon');
    theme.querySelector('i').style.color = 'rgb(25, 2, 25)';
    document.body.style.backgroundColor = 'white';
    document.querySelectorAll('a').forEach(link => {
        link.style.color = ''; // Reset color to default
    });
    document.querySelector('nav').style.borderBottomColor='';
    document.querySelector('footer').style.borderTopColor='';
    document.querySelectorAll('h4,h2').forEach(link => {
        link.style.color = ''; // Reset color to default
    });
    // document.getElementById('h12').style.color = ''; // Reset color to default
    // document.getElementById('section2').style.backgroundColor = '';
    document.getElementById('idea-point').style.color='';
    document.getElementById('name_pro').style.color='';
    document.querySelector('.fa-bars').style.color='';

}

}
function hover_a(link)
    {
    
        link.style.color='blue';
    }
    function hover_link(link)
    {
        let theme = document.getElementById('theme');
        if (theme.querySelector('i').classList.contains('fa-moon')) {
        link.style.color='';
    }else{
        link.style.color='white';
    }
    }


var swiper = new Swiper(".mySwiper", {
slidesPerView: 1,
spaceBetween: 10,
autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
breakpoints: {
    640: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 40,
    },
    1024: {
        slidesPerView: 4,
        spaceBetween: 50,
    },
},
});
// swiper for photos
var swiper = new Swiper('.Slider-container', {
effect: 'cards',
grabCursor: true,
centerdSlides: true,
loop: true,
});

function show_sidebar()
{
    document.querySelector(".sidebar").style.display="block";
    document.querySelector(".fa-solid.fa-bars").style.display="none";
}
function hide_sidebar()
{
    document.querySelector(".sidebar").style.display="none";
    document.querySelector(".fa-solid.fa-bars").style.display="block";
}