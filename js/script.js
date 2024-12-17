// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";


import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 
  authDomain:
  projectId:
  storageBucket:
  messagingSenderId:
  appId:
};
// Initialize Firebase
initializeApp(firebaseConfig);

//新規登録ページ
$("#signup-button").on("click", function () {
  const email = $("#signup-email").val();
  const password = $("#signup-password").val();
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
  .then(function (userCredential) {
	 // うまくいったとき
  })
  .catch(function (error) {
	 // 失敗したとき
	});

  createUserWithEmailAndPassword(auth, email, password)
    .then(function (userCredential) {
      location.href = "index.html";
    })
    .catch(function (error) {
			$("#message").html(error);
    });
});

//ログインページ
$("#login-button").on("click", function () {
  const email = $("#login-email").val();
  const password = $("#login-password").val();
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then(function (userCredential) {
      location.href = "index.html";
    })
    .catch(function (error) {
			$("#message").html(error);
    });
});

