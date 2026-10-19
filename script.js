let userform = document.getElementById("userForm");

userform.addEventListener("submit",function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age =Number(document.getElementById("age").value);
