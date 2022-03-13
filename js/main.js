// bahan
const open = document.getElementById('open');
const close = document.getElementById('close');
const sections = document.querySelectorAll('section');
const nav = document.querySelectorAll('nav ul li');

// proses menu hamburger

open.addEventListener('click', () => {
  document.getElementById("myNav").style.width = "100%";
})

close.addEventListener('click', () => {
  document.getElementById("myNav").style.width = "0%";
})
// function openNav() {
//   document.getElementById("myNav").style.width = "100%";
// }
  
// function closeNav() {
//   document.getElementById("myNav").style.width = "0%";
// }

// buttom from kontak

function kirimPesan() {
  alert("Terkirim");
  prompt("Siapa namamu ?");
}

function luasBujurSangkar(sisi) {
  console.log(sisi * sisi);
}

luasBujurSangkar(8);
luasBujurSangkar(4);

// scroll effect
window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 0;
  if (window.innerWidth <= 650) {
    header.classList.remove('scrolling-active', windowPosition);
  } else {
    header.classList.toggle('scrolling-active', windowPosition);
  }
})

// scroll animation
window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset > (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  })

  nav.forEach( li => {
    li.classList.remove('active');

    if (li.classList.contains(current)) {
      li.classList.add('active');
    }
  })
})