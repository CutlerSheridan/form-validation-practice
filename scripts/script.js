const isFieldValid = (inputOrEvent) => {
    // check if it's an input or event
    let input;
    console.log(inputOrEvent);
    if (inputOrEvent.target) {
        input = inputOrEvent.target;
    } else {
        input = inputOrEvent;
    }
    let errorText;
    let isValid = true;

    if (input.classList.contains("form-password") || input.classList.contains("form-confirmPassword")) {
        if (input.classList.contains("form-password")) {
            isValid = isPasswordValid();
        } else {
            isValid = isConfirmPasswordValid();
        }
    } else {
        isValid = input.validity.valid;
    }

    if (!isValid) {
        input.parentElement.classList.add("form-inputGroup-invalid");
        if (inputOrEvent.type === "blur") {
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

const isPasswordValid = () => {
    const password = document.querySelector(".form-password").value;
    let isValid = true;

    const reqs = [
        ...document.querySelectorAll(".form-password ~ .form-passwordReq:not(.form-password + .form-passwordReq"),
    ];
    reqs.forEach((req) => {
        let isReqValid = false;
        if (req.classList.contains("req-length")) {
            if (password.length >= 12) {
                isReqValid = true;
            }
        } else if (req.classList.contains("req-uppercase")) {
            if (password.search(/[A-Z]/) !== -1) {
                isReqValid = true;
            }
        } else if (req.classList.contains("req-lowercase")) {
            if (password.search(/[a-z]/) !== -1) {
                isReqValid = true;
            }
        } else if (req.classList.contains("req-number")) {
            if (password.search(/\d/) !== -1) {
                isReqValid = true;
            }
        } else if (req.classList.contains("req-special")) {
            if (password.search(/[^a-zA-Z0-9\s]/) !== -1) {
                isReqValid = true;
            }
        }

        if (isReqValid) {
            req.classList.add("form-passwordReq-valid");
        } else {
            req.classList.remove("form-passwordReq-valid");
            isValid = false;
        }
    });
    const confirmPassword = document.querySelector(".form-confirmPassword");
    if (
        confirmPassword.nextElementSibling.classList.contains("form-passwordReq-valid") ||
        confirmPassword.parentElement.classList.contains("form-inputGroup-invalid")
    ) {
        isFieldValid(confirmPassword);
    }
    return isValid;
};
const isConfirmPasswordValid = () => {
    const firstPassword = document.querySelector(".form-password").value;
    const secondPassword = document.querySelector(".form-confirmPassword").value;
    const reqMatch = document.querySelector(".form-confirmPassword + .form-passwordReq");
    let isValid = true;
    if (firstPassword === secondPassword && secondPassword.length > 0) {
        reqMatch.classList.add("form-passwordReq-valid");
    } else {
        reqMatch.classList.remove("form-passwordReq-valid");
        isValid = false;
    }
    return isValid;
};

const inputs = document.querySelectorAll(".form-input");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("blur", isFieldValid);
}
inputs[inputs.length - 2].addEventListener("input", isPasswordValid);
inputs[inputs.length - 1].addEventListener("input", isConfirmPasswordValid);
