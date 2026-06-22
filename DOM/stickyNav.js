
// two coords
#part1

const initalCoords = section1.getBoundingClientRect();
console.log(initalCoords);

//coord jis section se sticky navigation milega

window.addEventListener('scroll', function () {
  if (window.scrollY > initalCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

//usign IntersectionObserver APIs

//sticky nav using IntersectionObserver

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  //console.log(entry);

  //agar intersection==false tab class add kar do baki remove kar do

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const stickyNavoptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const headerObserver = new IntersectionObserver(stickyNav, stickyNavoptions);
headerObserver.observe(header);

