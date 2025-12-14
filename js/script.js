// const menu = document.querySelector('.navbar');
// const menuItems = document.querySelectorAll('.navlink');
// const hamburger = document.querySelector('.mobile-nav');
// const closeIcon = document.querySelector('.closeIcon');
// const menuIcon = document.querySelector('.menuIcon');

// function toggleMenu() {
//   if (menu.classList.contains('showMenu')) {
//     menu.classList.remove('showMenu');
//     closeIcon.style.display = 'none';
//     menuIcon.style.display = 'block';
//   } else {
//     menu.classList.add('showMenu');
//     closeIcon.style.display = 'block';
//     menuIcon.style.display = 'none';
//     menuItems.style.display = 'block';
//   }
// }

// hamburger.addEventListener('click', toggleMenu);

// menuItems.forEach(function (menuItem) {
//   menuItem.addEventListener('click', toggleMenu);
// });

// // const btnNavEl = document.querySelector('.mobile-nav');
// // const headerEl = document.querySelector('.header');

// // btnNavEl.addEventListener('click', function () {
// //   headerEl.classList.toggle('nav-open');
// // });

// // // smooth scrolling
// // const allLinks = document.querySelectorAll('a:link');

// // allLinks.forEach(function (link) {
// //   link.addEventListener('click', function (e) {
// //     e.preventDefault();
// //     const href = link.getAttribute('href');

// //     if (href === '#') {
// //       window.scrollTo({ top: 0, behavior: 'smooth' });
// //     }

// //     if (href !== '#' && href.startsWith('#')) {
// //       const sectionEl = document.querySelector(href);
// //       sectionEl.scrollIntoView({ behavior: 'smooth' });
// //     }

// //     if (link.classList.contains('navlink'))
// //       headerEl.classList.toggle('nav-open');
// //   });
// // });
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

//smooth scrolling
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');
    // console.log(href);

    //scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    //scroll to other links / sections
    if (href !== 'href' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);

      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    //close mobile navigation
    if (link.classList.contains('main-navlink'))
      headerEl.classList.toggle('nav-open');
  });
});

const sectionHeroEl = document.querySelector('#hero-section');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHeroEl);
