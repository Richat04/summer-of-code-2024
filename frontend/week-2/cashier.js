const ele = document.getElementById('logout');
ele.addEventListener('click', e => {
    e.preventDefault()
    alert('do you wish to logout?')
    window.location.replace("http://127.0.0.1:5500/frontend/week-1/index.html")
    
   
});
const a = document.getElementById('home');
a.addEventListener('click', e => {
    e.preventDefault()
    
    window.location.assign("http://127.0.0.1:5500/frontend/week-1/cashier.html")
   
});
const b = document.getElementById('new-customer');
b.addEventListener('click', e => {
    e.preventDefault()
    
    window.location.assign("http://127.0.0.1:5500/frontend/week-1/templates/customer.html")
   
});

