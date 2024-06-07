// Countdown Timer
var countDownDate = new Date("Dec 31, 2024 15:37:25").getTime();
var countdownfunction = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFVP3AQtcYDBzMxV-zkH6JA_fLK71qTJs",
  authDomain: "coming-soon-app-c8b4a.firebaseapp.com",
  databaseURL: "https://coming-soon-app-c8b4a-default-rtdb.firebaseio.com",
  projectId: "coming-soon-app-c8b4a",
  storageBucket: "coming-soon-app-c8b4a.appspot.com",
  messagingSenderId: "531384959588",
  appId: "1:531384959588:web:ac0161b23aede2c173d571",
  measurementId: "G-4TF0ZQ1LH4",
};

firebase.initializeApp(firebaseConfig);
let comingSoonPageDB = firebase.database().ref("coming-soon-app");

document.getElementById("subbtn").addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();
  let emailid = getElementval("email");
  saveEmail(emailid);
}

let getElementval = (id) => {
  return document.getElementById(id).value;
};

function saveEmail(email) {
  let newEmailRef = comingSoonPageDB.push();
  newEmailRef.set({
    email: email,
  });
}
