const customers=[
    {
        'initials':'EH',
        'name':'Eshter Howard',
        'email':'esther.howard@gmail.com',
        'sa': '8642 Yule Street, Arvada CO 80007'
    },
    {
        'initials':'WW',
        'name':'Wade Warren',
        'email':'wade.warren@gmail.com',
        'sa': '5331 Rexford Court, Montgomery AL 36116'
    },
    {
        'initials':'RF',
        'name':'Robert Fox',
        'email':'robert.fox@gmail.com',
        'sa': '2436 Naples Avenue, Panama City FL 32405'
    },
    {
        'initials':'DR',
        'name':'Dianne Russell',
        'email':'dianne.russell@gmail.com',
        'sa': '6095 Terry Lane, Golden CO 80403'
    },
    {
        'initials':'RE',
        'name':'Ralph Edwards',
        'email':'ralph.edwards@gmail.com',
        'sa': '4001 Anderson Road, Nashville TN 37217'
    },
    {
        'initials':'RE',
        'name':'Ralph Edwards',
        'email':'ralph.edwards@gmail.com',
        'sa': '4001 Anderson Road, Nashville TN 37217'
    },
    {
        'initials':'AM',
        'name':'Arlene McCoy',
        'email':'arlene.mccoy@gmail.com.',
        'sa': '2613 Cottonwood Street, Anchorage AK 99508'
    }
];

const insertRowCustomers = ()=>{
    customers.map( (item)=>{
        const row = document.createElement("tr"); 
        const content = `
        <td class="initials"><p>${item.initials}</p></td>
        <td class="name">${item.name}</td>
        <td class="email">${item.email}</td>
        <td class="sa">${item.sa}</td>
        <td class="action">...</td>
        `;
        row.innerHTML = content;
        document.querySelector('.customer-table tbody').appendChild(row);
    } )
};

insertRowCustomers();
