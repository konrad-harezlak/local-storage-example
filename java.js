function MyFunction() {
    if (typeof (Storage) !== "undefined") {
        // Store
        
        // Retrieve
        document.getElementById("localstorage").innerHTML = "Imie: " + localStorage.firstname
        document.getElementById("result").innerHTML = "Nazwisko: " + localStorage.getItem("lastname");
    }
    else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}
let myButton = document.getElementById('myButton');
myButton.addEventListener('click',function(){
    let name = document.getElementsByName('name');
    let lastname = document.getElementsByName('lastname');
    localStorage.firstname=name[0].value;
    localStorage.lastname=lastname[0].value;
})