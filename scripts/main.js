// variables
const firstName = "Jacob";
const lastName = "Ou";
const fullName = firstName + " " + lastName;

// update h1
document.querySelector("h1").textContent = fullName;

// update age
let age = 13
document.querySelector("#age").textContent = "Age:" + age

// new paragraph for age in 20 years
const futureAge = age + 20;
const p = document.createElement("p");
p.textContent = "In 20 years, I will be " + futureAge + " years old.";
document.querySelector("#age").after(p);

