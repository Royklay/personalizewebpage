let userform = document.getElementById("userForm");

userform.addEventListener("submit",function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age =Number(document.getElementById("age").value);
    
    document.getElementById("greeting").textContent =
      "Hello" + name + "!Welcome to my webpage.";

    document.getElementById("ageMessage").textContent =
      "Your" + age + "years old.";

