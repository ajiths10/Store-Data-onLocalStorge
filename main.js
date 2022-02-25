// sessionStorage.setItem('name','bob')
// localStorage.setItem('name','kyle')

// console.log(sessionStorage.getItem('name'))

// document.cookie='name=bob';
// console.log(document.cookie);


let btn=document.querySelector('.btn')
let namebox=document.querySelector('#name')
let emailbox=document.querySelector('#email')
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(namebox.value);
    console.log(emailbox.value);
    localStorage.clear();
    localStorage.setItem('Name', namebox.value);
    localStorage.setItem('Email', emailbox.value);
    
})