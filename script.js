let userform = document.getElementById("userForm");

userform.addEventListener("submit",function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age =Number(document.getElementById("age").value);

    localStorage.setItem("userName", name);
    localStorage.setItem("userAge", age);

    let savedName = localStorage.getItem("userName");
    let savedAge = localStorage.getItem("userAge");

    console.log(savedName);
    console.log(savedAge);
    
    document.getElementById("greeting").textContent =
      "Hello" + name + "!Welcome to my webpage.";

    document.getElementById("ageMessage").textContent =
      "Your" + age + "years old.";

    if(age <18){
        document.getElementById("ageMessage").textContent =
        "You are young! Keep learning and growing.";
    } else{
        document.getElementById("ageMessage").textContent =
         "Your are an adult! Keep working towards your goals.";
    }

     let months = age*12;
    document.getElementById("ageMessage").textContent +=
      "That is" + months + "months!";

    let quote ="";
    for (let i= 1;i<=5; i++){
        quote += "Believe in yourself and keep going!<br>";
    }
    document.getElementById("quote").innerHTML = quote;
 });

let savedName = localStorage.getItem("userName");
let savedAge = localStorage.getItem("userAge");

if(savedName!== null && savedAge !==null){
    document.getElementById("name").value=savedName;
    document.getElementById("age").value=savedAge;

    document.getElementById("greeting").textContent=
     "Hello" + savedName + "!Welcome to my webpage.";

    document.getElementById("ageMessage").textContent=
     "You are" + savedAge + "years old.";
 }


