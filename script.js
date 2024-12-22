let formbutton = document.getElementById("form-button");

let Confirmation_Message_Container = document.getElementById("Confirmation-Message");

let Main_container = document.getElementById("Main-container");

let subscribing_button = document.getElementById("subscribing-button")

let form_input = document.getElementById("email")

let label_to_hide_for_validation = document.getElementById("label-to-hide-for-validation")

formbutton.addEventListener("click", function(e){
    e.preventDefault();
    
    let email_value = form_input.value.trim();

    if(email_value == "" ||  !form_input.checkValidity()) {
        form_input.style.backgroundColor = "#FFE8E6";
        form_input.style.border = "2px solid #FFE8E6";
        form_input.style.outline = "1.2px solid rgb(255, 97, 82)";
        label_to_hide_for_validation.style.display = "block";
        label_to_hide_for_validation.style.color = "rgb(255, 97, 82)";
    } else{
        Main_container.style.display = "none";

        Confirmation_Message_Container.style.display = "block";
    }

    

})


subscribing_button.addEventListener("click", function(){
    Confirmation_Message_Container.style.display = "none";

    Main_container.style.display = "flex";
})


