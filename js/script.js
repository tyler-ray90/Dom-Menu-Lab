var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


// Task 1.0 
let mainEl = document.getElementsByTagName('main')[0];
// Task 1.1
mainEl.style.backgroundColor = '#4a4e4d';
// Task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
// Task 1.3 
mainEl.className = 'flex-ctr';

// Task 2.0
let topMenuEl = document.querySelector('nav');
console.log(topMenuEl);
// Task 2.1
topMenuEl.style.height = '100%';
// Task 2.2
topMenuEl.style.backgroundColor = '#0e9aa7';
// Task 2.3
topMenuEl.className = 'flex-around';

// Task 3.0
// Had alot of help from after hours with this task. Still not full understanding it. 
menuLinks.forEach(function(link){
    var para = document.createElement('a');
    para.innerHTML = link.text
    para.setAttribute('href', link.href)
    topMenuEl.appendChild(para)
});
