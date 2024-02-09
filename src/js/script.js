// Nav Fix
window.onscroll = function() {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// aos kanan
function aos_kanan() {
  var allKanan = document.querySelectorAll(".aos-kanan");

  for (var i = 0; i < allKanan.length; i++) {
    var windowHeightKanan = window.innerHeight;
    var elementTopKanan = allKanan[i].getBoundingClientRect().top;
    var elementVisibleKanan = 150;

    if (elementTopKanan < windowHeightKanan - elementVisibleKanan) {
      allKanan[i].classList.add("active");
    } else {
      allKanan[i].classList.remove("active");
    }
  }
}
  
window.addEventListener("scroll", aos_kanan);
aos_kanan()

// aos kiri
function aos_kiri() {
  var allKiri = document.querySelectorAll(".aos-kiri");

  for (var i = 0; i < allKiri.length; i++) {
    var windowHeightKiri = window.innerHeight;
    var elementTopKiri = allKiri[i].getBoundingClientRect().top;
    var elementVisibleKiri = 150;

    if (elementTopKiri < windowHeightKiri - elementVisibleKiri) {
      allKiri[i].classList.add("active");
    } else {
      allKiri[i].classList.remove("active");
    }
  }
}
  
window.addEventListener("scroll", aos_kiri);
aos_kiri()

// bawah
function aos_bawah() {
  var allBawah = document.querySelectorAll(".aos-bawah");

  for (var i = 0; i < allBawah.length; i++) {
    var windowHeightBawah = window.innerHeight;
    var elementTopBawah = allBawah[i].getBoundingClientRect().top;
    var elementVisibleBawah = 150;

    if (elementTopBawah < windowHeightBawah - elementVisibleBawah) {
      allBawah[i].classList.add("active");
    } else {
      allBawah[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", aos_bawah);
aos_bawah()