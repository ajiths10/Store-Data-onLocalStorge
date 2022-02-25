// sessionStorage.setItem('name','bob')
// localStorage.setItem('name','kyle')

// console.log(sessionStorage.getItem('name'))

// document.cookie='name=bob';
// console.log(document.cookie);


// let btn=document.querySelector('.btn')
// let namebox=document.querySelector('#name')
// let emailbox=document.querySelector('#email')

// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log(namebox.value);
//     console.log(emailbox.value);
//     localStorage.clear();
//     localStorage.setItem('Name', namebox.value);
//     localStorage.setItem('Email', emailbox.value);

// })

let myobj={
    name:"Ajith",
    age:24
};
let myobj_serialized=JSON.stringify(myobj);
console.log(myobj_serialized)
localStorage.setItem("myobj",myobj_serialized);
//console.log(localStorage);
let myobj_deserialized=JSON.parse(localStorage.getItem("myobj"));
console.log(myobj_deserialized);

//make new
let ele=document.createElement('h2');
ele.appendChild(document.createTextNode(`Name = ${myobj_deserialized.name}`));
document.body.appendChild(ele)
let ag=document.createElement('h2');
ag.appendChild(document.createTextNode(`Age = ${myobj_deserialized.age}`));
document.body.appendChild(ag);