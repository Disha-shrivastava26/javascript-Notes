
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
