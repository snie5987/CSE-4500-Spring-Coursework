var disName;

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

document.getElementById("acCreate").addEventListener("click", accountSignUp);

function accountSignUp() {

    let email = document.getElementById("signUpEmail").value;
    let password = document.getElementById("signUpPassword").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(e => { console.log(e) });

    disName = document.getElementById("displayName").value;

    document.getElementById("signUpCont").style.visibility = "hidden";

    if (disName != null) {

        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: disName
        }).then(function () {
            //Update Successfull
        }).catch(function (error) {
            //An error happened
        });
    }
}

document.getElementById("acLogin").addEventListener("click", accountLogin);

function accountLogin() {

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    var check = false;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(e => {
        console.log(e)
        window.alert(e.message)
        check = true; 
    });

    if (check == false ) {

        document.getElementById("loginCont").style.visibility = "hidden";
    }

}

document.getElementById("accountCont").addEventListener("click", currentUserProfile);

function currentUserProfile() {

    var user = firebase.auth().currentUser;
}


function signOut() {

    firebase.auth().signOut().catch(function (err) { });

    document.getElementById("accountCont").style.visibility = "hidden";
}


firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log(user)

    }
    else {

    }
});

function showAccount() {
    document.getElementById("accountCont").style.visibility = "visible";
}
function hideAccount() {
    document.getElementById("accountCont").style.visibility = "hidden";
}

