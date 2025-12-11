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

document.addEventListener('DOMContentLoaded', () => {
  const messages = [
    { user: 'Tasha', text: 'OMG this scene is crazy 😂' },
    { user: 'Liam', text: 'Sync is perfect on my end!' },
    { user: 'Grace', text: 'Drop the next episode!' },
    { user: 'Leo', text: 'Invite me to the room 😭' },
    { user: 'Drew', text: 'This trailer looks clean 🔥' },
  ];

  let index = 0;

  function addChatBubble() {
    const chatList = document.getElementById('chat-list');
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.innerHTML = `<strong>${messages[index].user}</strong>: ${messages[index].text}`;
    chatList.appendChild(bubble);
    chatList.scrollTop = chatList.scrollHeight;
    index = (index + 1) % messages.length;
  }

  setInterval(addChatBubble, 1800);

  // Load initial messages
  addChatBubble();
  addChatBubble();
});
