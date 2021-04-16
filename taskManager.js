function switchStatus() {
    var isChecked = document.getElementById("switchValue").checked;
    if (isChecked == true) {
        document.body.style.backgroundColor = "rgb(32, 32, 32)";
        document.getElementById("webName").style.background = "rgb(56, 56, 56)";
        document.getElementById("dMText").innerHTML = "Dark Mode On";
    }
    else {
        document.getElementById("dMText").innerHTML = "Dark Mode Off";
        document.body.style.backgroundColor = "darkgray";
        document.getElementById("webName").style.background = "rgb(21,34,56)";
    }
}

function lForm() {

    document.getElementById("loginCont").style.visibility = "visible";
    document.getElementById("signUpBtn").style.visibility = "hidden";
    document.getElementById("loginBtn").style.visibility = "hidden";
}

function sUpForm() {

    document.getElementById("signUpCont").style.visibility = "visible";
    document.getElementById("signUpBtn").style.visibility = "hidden";
    document.getElementById("loginBtn").style.visibility = "hidden";
}



function accountLogin() {
    document.getElementById("loginCont").style.visibility = "visible";
    document.getElementById("loginBtn").style.visibility = "hidden";
    var form = document.getElementById("loginForm");
    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);
    console.log("Login Worked");
}

function accountSignUp(){
    var form = document.getElementById("signUpForm");
    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);
    console.log("Sign Up Worked");
}

function showAccount() {
    document.getElementById("accountCont").style.visibility = "visible";
}
