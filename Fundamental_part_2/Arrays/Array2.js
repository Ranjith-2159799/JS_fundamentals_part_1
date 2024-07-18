let customers = [
    {
       'id': 001,
       'f_name': 'Abby',
       'l_name': 'Thomas',
       'gender': 'M',
       'married': true,
       'age': 32,
       'expense': 500,
       'purchased': ['Shampoo', 'Toys', 'Book']
    },
    {
       'id': 002,
       'f_name': 'Jerry',
       'l_name': 'Tom',
       'gender': 'M',
       'married': true,
       'age': 64,
       'expense': 100,
       'purchased': ['Stick', 'Blade']
    },
    {
       'id': 003,
       'f_name': 'Dianna',
       'l_name': 'Cherry',
       'gender': 'F',
       'married': true,
       'age': 22,
       'expense': 1500,
       'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Book']
    },
    {
       'id': 004,
       'f_name': 'Dev',
       'l_name': 'Currian',
       'gender': 'M',
       'married': true,
       'age': 82,
       'expense': 90,
       'purchased': ['Book']
    },
    {
       'id': 005,
       'f_name': 'Maria',
       'l_name': 'Gomes',
       'gender': 'F',
       'married': false,
       'age': 7,
       'expense': 300,
       'purchased': ['Toys']
    }
 ];
//  add full_name to existing list where married Female its Mrs, unmarried female its Ms., for all male its Mr.
// example : 
// 'full_name': Ms.Maria Gomes

customers.forEach(customer=>{
    if (customer.gender === 'M'){
        customer.name = `Mr.${customer.f_name} ${customer.l_name}`;

    } else if (customer.gender === 'F' &&customer.married){
        customer.name = `Mrs. ${customer.f_name} ${customer.l_name}`;
    }else if (customer.gender === "F" && !customer.married){
        customer.name =`Ms. ${customer.f_name} ${customer.l_name}`;
    }
});
customers.forEach(customer=>{
    console.log(customer.name);
})
 
 
