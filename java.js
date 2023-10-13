let myButton2=document.getElementById('myButton2');
myButton2.addEventListener('click',function() {
    if (typeof (Storage) !== "undefined") {
        // Retrieve
        let localStorage2 = document.getElementsByClassName("localstorage")[1];
        let firstName=localStorage.firstname;
        let lastName=localStorage.lastname;
        localStorage2.innerHTML=`
        <p>Name:${firstName}<p>
        <p> Surname:${lastName}<p>
        `   
        console.log(firstName,lastName)
    }
    else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
});
 // Store
let myButton = document.getElementById('myButton');
myButton.addEventListener('click',function(){
    let name = document.getElementsByName('name');
    let lastname = document.getElementsByName('lastname');
    localStorage.firstname=name[0].value;
    localStorage.lastname=lastname[0].value;
})