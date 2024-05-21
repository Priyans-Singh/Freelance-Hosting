const clsBtn = document.getElementById('clsBtn');
const main = document.getElementById('main');
const popup1 = document.getElementById('popup2');
const filterBtn = document.getElementById('filterBtn');
const apply = document.getElementById('apply');

filterBtn.addEventListener('click', () => {
    popup2.style.display = 'flex';
    main.classList.toggle('blurMode');
  })
  
clsBtn.addEventListener('click', () => {
    popup2.style.display = 'none';
    main.classList.toggle('blurMode');
  })

apply.addEventListener('click', () => {
    popup2.style.display = 'none';
    main.classList.toggle('blurMode');
  })