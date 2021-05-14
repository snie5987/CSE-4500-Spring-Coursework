var disName;
var uid;
var userUid;

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
            console.log("updateProfile function error");
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

function signOut() {

    firebase.auth().signOut().catch(function (err) { });

    var displayName = document.getElementById("accountDisplayName");
    var email = document.getElementById("accountEmail");

    displayName.innerHTML = "Name:";
    email.innerHTML = "You are logged in as:"

    document.getElementById("accountCont").style.visibility = "hidden";
}


firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log(user);
        console.log(user.uid);
        uid = user.uid;
        userUid = "users/" + user.uid;

    }
    else {

    }
});

function userData() {
    firebase.database().ref(userUid).on('value', (snapshot) => {
        console.log(snapshot.val())
        })
}

function accountDetails() {
    document.getElementById("accountCont").style.visibility = "visible";
    var displayName = document.getElementById("accountDisplayName");
    var email = document.getElementById("accountEmail");
    var user = firebase.auth().currentUser;

    if (user) {
        displayName.innerHTML = "Name: " + user.displayName;
        email.innerHTML = "You are logged in as: " + user.email;

    } else {
        console.log("No user found");
    }
}
function closeAccount() {
    document.getElementById("accountCont").style.visibility = "hidden";
}
``

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        var task = document.getElementById("myUL").appendChild(li);
        var user = firebase.auth().currentUser;
        var uid = "users/" + user.uid;
        let obj = {
            task: inputValue
        }
        firebase.database().ref(uid).set(obj)
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}