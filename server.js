// server.js

const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();

// 証明書と秘密鍵を読み込む
const options = {
  key: fs.readFileSync('localhost.key'), // 秘密鍵
  cert: fs.readFileSync('localhost.crt'), // 証明書
};

// HTTPSサーバーを起動
https.createServer(options, app).listen(3000, () => {
  console.log('HTTPSサーバーがlocalhost:3000で起動しました');
});

// ルートの設定
app.get('/', (req, res) => {
  res.send('Hello, HTTPS!');
});