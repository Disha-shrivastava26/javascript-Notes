'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// if we want to select a class having multiple element
// we use querySelectorAll
const btnsOpenModal = document.querySelectorAll('.show-modal');

//function to open the modal
const openModal = function () {
  console.log('button Clicked');
  modal.classList.remove('hidden'); // we are passing a class name in the remove() method of classlist
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden'); // we are passing a class name in the remove() method of classlist
  overlay.classList.add('hidden');
};

// here we can loop the different elements
for (let i = 0; i < btnsOpenModal.length; i++)
  // console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', openModal);

// now if we click on the close button the box should get hidden
btnCloseModal.addEventListener('click', closeModal);

// same if we clicked outside the box we get to close the window

overlay.addEventListener('click', closeModal);

// how to add keyboard event
// keyboard are global-events => any key press will create an event and then
// js will create an object of that event and send to event handler

// three types of keyboard events
// keydown
// key up
// key press

document.addEventListener('keydown', function (e) {
  console.log('button is pressed');
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
