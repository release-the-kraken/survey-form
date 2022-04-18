let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);
let userName = id("name"),
    email = id("email"),
    age = id("age"),
    form = id("survey-form");
    
let errorMessage = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");
    
let validateFormInput = (id, index, message) => {
    if(id.value === ""){
        errorMessage[index].innerHTML = message;
        failureIcon[index].style.opacity = "1";
        successIcon[index].style.opacity = "0";
    }else{
        errorMessage[index].innerHTML = "";
        failureIcon[index].style.opacity = "0";
        successIcon[index].style.opacity = "1";
    }
}

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        validateFormInput(userName, 0, "Name cannot be blank.");
        validateFormInput(email, 1, "Email cannot be blank.");
        validateFormInput(age, 2, "Age cannot be blank.")

    })


