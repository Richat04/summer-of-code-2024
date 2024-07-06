const ele = document.getElementById('logout');
ele.addEventListener('click', e => {
    e.preventDefault()
    alert('do you wish to logout?')
    window.location.replace("http://127.0.0.1:5500/frontend/week-1/index.html")
});

const a = document.getElementById('home');
a.addEventListener('click', e => {
    e.preventDefault()
    
    window.location.assign("http://127.0.0.1:5500/frontend/week-1/admin.html")
});

const b = document.getElementById('recent');
b.addEventListener('click', e => {
    e.preventDefault()
    
    window.location.assign("http://127.0.0.1:5500/frontend/week-1/templates/recent_orders.html")
});

const c = document.getElementById('top');
c.addEventListener('click', e => {
    e.preventDefault()
    
    window.location.assign("http://127.0.0.1:5500/frontend/week-1/templates/top_stocks.html")
});

const d = document.getElementById('urgent');
d.addEventListener('click', e => {
    e.preventDefault()
    
    window.location.assign("http://127.0.0.1:5500/frontend/week-1/templates/to-be-ordered.html")
});