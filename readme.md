# プロダクト名

友情結婚マッチングアプリ

## 課題内容（どんな作品か）

- アプリの新規登録機能・ログイン画面

## 作ったアプリケーション用の ID または Password がある場合

- ID: 〇〇〇〇〇〇〇〇
- PW: 〇〇〇〇〇〇〇〇

## 工夫した点・こだわった点

- Firebase Authentication を利用し、アプリの認証機能を作成しました。
- メールアドレスとfacebookで認証できるようにしています。
- メールアドレスでの認証ではメールアドレス・パスワードを活用した新規登録、ログインができるようにしました。location.hrefを使って自動で以前作成した自己プロフィール設定画面にとぶようにしました。
- facebook認証では、Meta for DevelopersよりFacebookの開発者アカウントを作成し、IDとpassを発行し、
firebaseのプロジェクトと紐づけしました。理解できない用語が多くFacebookの開発者ページの設定に苦労しました。
facebook認証のエラー→設定、facebook認証のエラー→設定…の連続でした。

## 難しかった点・次回トライしたいこと(又は機能)

- facebookの認証機能の以下のエラーを改善したいです。
「情報の転送の際にtomomarryがセキュアな接続を使用していないことがFacebookにより検出されました。
tomomarryのセキュリティ設定が更新されるまで、Facebookでこのアプリにログインすることはできません。」

## 質問・疑問・感想、シェアしたいこと等なんでも

- [質問]上記エラーの改善方法について
- [感想]firbaseではアカウント作成時の特別メソッドがある。　ログイン「createUserWithEmailAndPassword」でアカウント作成、「signInWithEmailAndPassword()」ログイン。
- [参考記事]
  - 1. https://firebase.google.com/docs/auth/web/password-auth?hl=ja
  - 2. [URL をここに記入]
