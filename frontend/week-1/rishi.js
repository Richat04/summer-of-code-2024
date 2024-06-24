document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createaccount");
    const forgotPass = document.querySelector("#forgotpassword");

    document.querySelector("#linkcreateaccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
        forgotPass.classList.add("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
        forgotPass.classList.add("form--hidden");
    });

    document.querySelector("#linkgoLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
        forgotPass.classList.add("form--hidden");
    });

    document.querySelector("#linkforgotpassword").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.add("form--hidden");
        forgotPass.classList.remove("form--hidden");
    });

    document.getElementById('login').addEventListener('submit', function(event) {
        var email = document.getElementById('name').value;
        var password = document.getElementById('pass').value;

    
    });

    document.getElementById('createaccount').addEventListener('submit', function(event) {
        var newemail = document.getElementById('logname').value;
        var newpass = document.getElementById('logpass').value;
        var confpass = document.getElementById('conf').value;

        if (newpass !== confpass) {
            alert('Passwords do not match. Password and Confirm Password should be same to proceed.');
            event.preventDefault();
        }
    });  
    
    document.getElementById('forgotpassword').addEventListener('submit', function(event) {
        var foremail = document.getElementById('forname').value;
        var forpass = document.getElementById('forpass').value;
        var confforpass = document.getElementById('confpass').value;

        if (forpass !== confforpass) {
            alert('Passwords do not match. New Password and Confirm Password should be same to proceed.');
            event.preventDefault();
        }
    });
});

    
