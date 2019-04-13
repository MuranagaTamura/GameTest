"use strct";

// Electronのモジュール
const electron = require("electron");

// アプリケーションをコントロールするモジュール
const app = electron.app;

// ウィンドウを作成するモジュール
const BrowserWindow = electron.BrowserWindow;

// メインウィンドウはGCされないようにグローバル宣言
let mainWindow = null;

// 全てのウィンドウが閉じたら終了
app.on("window-all-closed", function() {
    if (process.platform != "darwin") {
        app.quit();
    }
});


// Electronの初期化完了後に実行
app.on("ready", function() {
    //ウィンドウサイズを1280*720（フレームサイズを含まない）に設定する
    mainWindow = new BrowserWindow({width: 530, height: 575});
    //使用するhtmlファイルを指定する
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // ウィンドウが閉じられたらアプリも終了
    mainWindow.on("closed", function(){
        mainWindow = null;
    });
});
