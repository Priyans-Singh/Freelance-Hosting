const orders = [
    {
      'src':`./Asset/T-shirt.png`,
      'order':'Raw Black T-Shirt Lineup',
      'date': '20 Mar, 2023',
      'Id': '#36234',
      'user':'brookyln.simons@gmail.com',
      'action':'...'
    },
    {
      'src':`./Asset/T-shirt.png`,
      'order':'Raw Black T-Shirt Lineup',
      'date': '20 Mar, 2023',
      'Id': '#36234',
      'user':'brookyln.simons@gmail.com',
      'action':'...'
    },
    {
      'src':`./Asset/T-shirt.png`,
      'order':'Raw Black T-Shirt Lineup',
      'date': '20 Mar, 2023',
      'Id': '#36234',
      'user':'brookyln.simons@gmail.com',
      'action':'...'
    },
    {
      'src':`./Asset/T-shirt.png`,
      'order':'Raw Black T-Shirt Lineup',
      'date': '20 Mar, 2023',
      'Id': '#36234',
      'user':'brookyln.simons@gmail.com',
      'action':'...'
    },
    {
      'src':`./Asset/T-shirt.png`,
      'order':'Raw Black T-Shirt Lineup',
      'date': '20 Mar, 2023',
      'Id': '#36234',
      'user':'brookyln.simons@gmail.com',
      'action':'...'
    },
    {
      'src':`./Asset/T-shirt.png`,
      'order':'Raw Black T-Shirt Lineup',
      'date': '20 Mar, 2023',
      'Id': '#36234',
      'user':'brookyln.simons@gmail.com',
      'action':'...'
    },
    {
      'src':`./Asset/T-shirt.png`,
      'order':'Raw Black T-Shirt Lineup',
      'date': '20 Mar, 2023',
      'Id': '#36234',
      'user':'brookyln.simons@gmail.com',
      'action':'...'
    },
    {
      'src':`./Asset/T-shirt.png`,
      'order':'Raw Black T-Shirt Lineup',
      'date': '20 Mar, 2023',
      'Id': '#36234',
      'user':'brookyln.simons@gmail.com',
      'action':'...'
    }
];

const insertRowOrders = ()=>{
    orders.map( (item)=>{
        const row = document.createElement("tr"); 
        const content = `
        <img src=${item.src} alt="">
        <td class="name">${item.order}</td>
        <td class="date">${item.date}</td>
        <td class="Id">${item.Id}</td>
        <td class="user">${item.user}</td>
        <td class="action">${item.action}</td>
        `;
        row.innerHTML = content;
        document.querySelector('.orders-table tbody').appendChild(row);
    } )
};

insertRowOrders();