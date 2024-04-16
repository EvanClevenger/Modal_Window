'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //querySelectorAll selects all show-modal classess

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// func adds hidden class to close modal

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//function removes hidden class to make modal visble

for (let i = 0; i < btnsOpenModal.length; i++)
  // for loop selects all three btns at the same time
  btnsOpenModal[i].addEventListener('click', openModal);
// btnsOpenModal[i] = current btn element in each ideration of loop

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (any) {
  if (any.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// if modal class does NOT contain 'hidden' then closeModal()
