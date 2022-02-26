// sessionStorage.setItem('name','bob')
// localStorage.setItem('name','kyle')

// console.log(sessionStorage.getItem('name'))

// document.cookie='name=bob';
// console.log(document.cookie);


let btn=document.querySelector('.btn')
let namebox=document.querySelector('#name')
let emailbox=document.querySelector('#email')
let i=0;

window.addEventListener("DOMContentLoaded",() => {
    console.log("Testing...")
    const localStorageobj=localStorage;
    const localStoragekeys= Object.keys(localStorageobj);

    for(var i=0;i<localStoragekeys.length;i++){
        const key = localStoragekeys[i]
        const userdetailsStrings= localStorageobj[key];
        const userdeailsObj = JSON.parse(userdetailsStrings)
        ShowNewUser(userdeailsObj)
    }
});


btn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    let myobj={
        name:namebox.value,
        email:emailbox.value
    };
    let myobj_serialized=JSON.stringify(myobj);
    //console.log(myobj_serialized)
    localStorage.setItem(myobj.email,myobj_serialized);
    //console.log(localStorage);
    let myobj_deserialized=JSON.parse(localStorage.getItem(myobj.email));
    //console.log(myobj_deserialized);
    
    // //make new
    // let cent=document.getElementById('newdiv');
    // let ele=document.createElement('li');
    // ele.appendChild(document.createTextNode(`Name = ${myobj_deserialized.name}`));
    // //document.body.appendChild(ele)
    // cent.appendChild(ele)
    // let ag=document.createElement('li');
    // ag.appendChild(document.createTextNode(`Email = ${myobj_deserialized.email}`));
    // cent.appendChild(ag);

   ShowNewUser(myobj) 
})

function ShowNewUser(userdetails){
    let MainNodeVariable=document.getElementById('itemss');
    let childHtml=`<li> <b>Name:</b> ${userdetails.name} -<b> Email:</b> ${userdetails.email} </li> `;
    MainNodeVariable.innerHTML=MainNodeVariable.innerHTML + childHtml;
}

