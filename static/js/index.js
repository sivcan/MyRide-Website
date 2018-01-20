
var config = {
    apiKey: "AIzaSyD9bzX7IOqvn90c0hAH3xjngbNaNec_dDw",
    authDomain: "myride-699ea.firebaseapp.com",
    databaseURL: "https://myride-699ea.firebaseio.com",
    projectId: "myride-699ea",
    storageBucket: "",
    messagingSenderId: "367642555523"
};
firebase.initializeApp(config);

var database = firebase.database().ref('myride-users');

document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var username = e.target.username.value;
    var email = e.target.email.value;
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (reg.test(email) === false) {
        alert("Please enter a correct email");
    }
    else if((/^([a-zA-Z ]){2,30}$/).test(username) === false) {
        alert("Please enter a correct name");
    }
    else {
        saveInfo(username, email);
    }
}

function saveInfo(username, email) {
    document.getElementById('username').value = "";
    document.getElementById('email').value = "";
    var newUser = database.push();
    newUser.set({
        name: username,
        email: email
    });
}

function hideLoading() {
    $(".loading").fadeOut("slow");
    $(".myride").fadeIn("slow");
}

Pace.on('done', () => {
       this.hideLoading();
});

// Disable scroll on touch devices.
var fixed = document.getElementsByClassName('myride')[0];
fixed.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);

