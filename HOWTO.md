# 動かし方
## 1. このリポジトリをクローン

## 2. 必要なライブラリをインストール
クローンしたリポジトリに入り、`npm i`を実行。

## 3. Firebaseのプロジェクトを作成する。
https://console.firebase.google.com/ にアクセス。  
`プロジェクトを追加`をクリック。  
プロジェクト名に`Wakashio`と入力して`続行`をクリック。  
`このプロジェクトでGoogleアナリティクスを有効にする`をOFFにして`プロジェクトを作成`をクリック。  
しばらく待って`新しいプロジェクトの準備が出来ました`と表示されたら`続行`をクリック。  

## 4. Webアプリを追加する
3.で作ったプロジェクトの画面にて`</>` をクリック。  
アプリのニックネームに`Wakashio`と入力。`このアプリの Firebase Hosting も設定します。`にはチェックを入れない。`アプリを登録`をクリック。  
`Firebase SDK の追加`という項目とともに以下のようなJavaScriptコードが表示される。  
```JavaScript=
const firebaseConfig = {
  apiKey: "apiKey_is--here",
  authDomain: "wakashio-XXXX.firebaseapp.com",
  projectId: "wakashio-XXXX",
  storageBucket: "wakashio-XXXX.appspot.com",
  messagingSenderId: "XXXXXXXXXXXX",
  appId: "appId:is:here"
};
```
上記コードについて、オブジェクトの中身(`apiKey`の行から`appId`の行まで)のみコピーして、`src/environments
/environment.development.ts`に貼り付ける。  
`src/environments
/environment.development.ts`には元々ダミーの情報が書かれているので、書き方はそちらを参考にすること。  
`コンソールに戻る`をクリック。  

## 5. ローカルでサーバを動かす
リポジトリにルートディレクトリにて`ng server --open`を実行。  
ブラウザでアプリが開く。  
