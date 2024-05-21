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
    document.querySelectorAll('h4,h1').forEach(link => {
      link.style.color = 'white';
    });
    document.querySelector('nav').style.borderBottomColor='white';
    document.querySelector('footer').style.borderTopColor='white';
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
    document.querySelectorAll('h4,h1').forEach(link => {
      link.style.color = ''; // Reset color to default
    });
    // document.getElementById('h12').style.color = ''; // Reset color to default
    // document.getElementById('section2').style.backgroundColor = '';
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


const data = [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit",
    "Sed do eiusmod tempor incididunt",
    "Ut labore et dolore magna aliqua",
    "Ut enim ad minim veniam",
    "Quis nostrud exercitation ullamco laboris",
    "Nisi ut aliquip ex ea commodo consequat",
    "Duis aute irure dolor in reprehenderit",
    "Voluptate velit esse cillum dolore eu fugiat",
    "Nulla pariatur"
];

document.getElementById('Search_Form').addEventListener('submit',function(event){//id belongs to form 
  event.preventDefault();
  var query = document.getElementById('searchInput').value;   //belongs to inpput 
  window.open('../Project/'+ query + '.html?= '+ encodeURIComponent(query),'_self');
});

document.addEventListener('DOMContentLoaded', function() {
var carousel = document.getElementById('testimonialCarousel');
var bsCarousel = new bootstrap.Carousel(carousel);

var carouselInterval = setInterval(function() {
bsCarousel.next();
}, 3000);
});
// featured projects
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 2.5,
      slideShadows: true,
    },
    autoplay:{
  
      delay:2000,
      disableOnInteraction:false,
    }
  
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