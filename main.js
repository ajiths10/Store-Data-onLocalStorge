// sessionStorage.setItem('name','bob')
// localStorage.setItem('name','kyle')

// console.log(sessionStorage.getItem('name'))

// document.cookie='name=bob';
// console.log(document.cookie);


let btn=document.querySelector('.btn')
let namebox=document.querySelector('#name')
let emailbox=document.querySelector('#email')
let i=0;

//scan all existing element from localStorage 
window.addEventListener("DOMContentLoaded",() => {
    console.log("Testing...");
    const localStorageobj=localStorage;
    const localStoragekeys= Object.keys(localStorageobj);

    for(var i=0;i<localStoragekeys.length;i++){
        const key = localStoragekeys[i]
        const userdetailsStrings= localStorageobj[key];
        const userdeailsObj = JSON.parse(userdetailsStrings);
        ShowNewUser(userdeailsObj)
    }
});

//Adding new user details
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    let myobj={
        name:namebox.value,
        email:emailbox.value,
    };

    let myobj_serialized=JSON.stringify(myobj);
    localStorage.setItem(myobj.email,myobj_serialized);
    // let myobj_deserialized=JSON.parse(localStorage.getItem(myobj.email));
    // console.log(myobj_deserialized)
    ShowNewUser(myobj) 
})

function ShowNewUser(userdetails){
    document.getElementById('email').value='';
    document.getElementById('name').value='';

    if(localStorage.getItem(userdetails.email)!== null){
        //console.log(userdetails.email)
        removeUserFromScreen(userdetails.email)
    }

    let MainNodeVariable=document.getElementById('itemss');
    let childHtml=`<li id=${userdetails.email}> 
                        <b>Name:</b> ${userdetails.name} -<b> Email:</b> ${userdetails.email} 
                        <button onclick=deleteser('${userdetails.email}')> Remove </button> 
                        <button onclick=removeuser('${userdetails.email}','${userdetails.name}')> edit </button> 
                    </li> `;
    MainNodeVariable.innerHTML=MainNodeVariable.innerHTML + childHtml;
}

//remove details from the localstorage
function deleteser(userid){
    console.log(userid);
    localStorage.removeItem(userid);
    removeUserFromScreen(userid);
}

//remove user from the frontend
function removeUserFromScreen(userid){
    const parentNode=document.getElementById('itemss');
    const childNodeToBeDeleted = document.getElementById(userid);
    if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted);
    }
}

//edit user details
function removeuser(useremail, username){
    let Namebox=document.getElementById('name');
    let EmailBox=document.getElementById('email');

    Namebox.value = username;
    EmailBox.value = useremail;
    deleteser(useremail)
}