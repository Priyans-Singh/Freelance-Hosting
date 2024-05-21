const recentOrders = [
    {
      'item':'Mens Black T-Shirts',
      'date':'20 Mar, 2023',
      'total':'$75.00',
      'status':'Processing'
    },
    {
      'item':'Essential Neutrals',
      'date':'19 Mar, 2023',
      'total':'$22.00',
      'status':'Processing'
    },
    {
      'item':'Sleek and Cozy Black',
      'date':'7 Feb, 2023',
      'total':'$57.00',
      'status':'Completed'
    },
    {
      'item':'MOCKUP Black',
      'date':'29 Jan, 2023',
      'total':'$30.00',
      'status':'Completed'
    },
    {
      'item':'Monochromatic Wardrobe',
      'date':'27 Jan, 2023',
      'total':'$27.00',
      'status':'Completed'
    },
];

const insertRowOrders = () =>{
  recentOrders.map( (order) =>{
        const row = document.createElement('tr');
        const content = `
        <td>${order.item}</td>
        <td>${order.date}</td>
        <td>${order.total}</td>
        <td>${order.status}</td>
        `;
        row.innerHTML = content;
        document.querySelector('.dashboard-table tbody').appendChild(row);
        console.log('done');
    } )
};

const clsBtn = document.getElementById('clsBtn');
const main = document.getElementById('main');
const popup1 = document.getElementById('popup1');
const colorVal = document.getElementById('code');
const colorBox = document.getElementById('color');
const tagBtn = document.getElementById('tagBtn');
const addBtn = document.getElementById('add');
colorVal.addEventListener('input', (e) =>{
    colorBox.value = e.target.value;
});

tagBtn.addEventListener('click', () => {
  popup1.style.display = 'flex';
  main.classList.toggle('blurMode');
}) 

addBtn.addEventListener('click', () => {
  popup1.style.display = 'none';
  main.classList.toggle('blurMode');
})

clsBtn.addEventListener('click', () => {
  popup1.style.display = 'none';
  main.classList.toggle('blurMode');
})

insertRowOrders();