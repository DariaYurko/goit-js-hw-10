import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form')

formEl.addEventListener('submit', (event) => {
   event.preventDefault();

   const delay = Number(formEl.elements.delay.value);
   const radioEl = formEl.elements.state.value

   const thisIsPromis = new Promise((resolve, reject) => {
      setTimeout(() => {
         if (radioEl === 'fulfilled') {
            resolve(`Fulfilled promise in ${delay}ms`);
         } else if (radioEl === 'rejected') {
           reject(`Rejected promise in ${delay}ms`);
         }
      }, delay)
   })

   thisIsPromis
     .then(value => {
       // Promise fulfilled
       console.log(value);
     })
     .catch(error => {
       // Promise rejected
       console.log(error);
     });

   // console.log(delay);
   // console.log(radioEl);
   // console.log(thisIsPromis);
   
})


