// facebook.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyARBO9oPgt-pmCvov2Bm0IaVAFuhSNgxqU",
  authDomain: "tomomarry-chat.firebaseapp.com",
  projectId: "tomomarry-chat",
  storageBucket: "tomomarry-chat.firebasestorage.app",
  messagingSenderId: "624206410989",
  appId: "1:62420641099:web:3051a950068f3e9852c8e4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Facebook認証プロバイダーを作成
const provider = new FacebookAuthProvider();
provider.addScope('email');  // emailスコープの追加

// Facebookログインボタンのクリックイベント
$("#facebook-login-button").on("click", function () {
  const auth = getAuth();
  
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("ログイン成功:", user);
      
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      console.log("アクセストークン:", accessToken);

      // ログイン後のリダイレクト
      location.href = "index.html";
    })
    .catch((error) => {
      console.error("ログインエラー:", error.message);
      $("#message").html("Facebookログインに失敗しました。");
    });
});
