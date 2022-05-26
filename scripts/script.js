const isFieldValid = (inputOrEvent) => {
    // check if it's an input or event
    console.log(inputOrEvent.type);
    let input = inputOrEvent.target;
    let errorText;
    let isValid = true;

    if (input.classList.contains("form-name")) {
        if (!isNameValid(input)) {
            isValid = false;
            const whichName = input.id === "firstName" ? "first" : "last";
            errorText = `Please enter your ${whichName} name`;
        }
    }

    if (!isValid) {
        input.parentElement.classList.add("form-inputGroup-invalid");
        input.nextElementSibling.textContent = errorText;
        if (inputOrEvent.type === "blur") {
            // input.removeEventListener("change", isValid);
            input.addEventListener("input", isFieldValid);
        }
    } else {
        input.parentElement.classList.remove("form-inputGroup-invalid");
        if (inputOrEvent.type === "blur") {
            input.removeEventListener("input", isFieldValid);
        }
    }
    return isValid;
};

const isNameValid = (input) => {
    return input.validity.valid;
};

const inputs = document.querySelectorAll(".form-input");
inputs[0].addEventListener("blur", isFieldValid);
