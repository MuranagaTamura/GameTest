var Glaphic = require('./src/Glaphic');

//2Dコンテキストのオブジェクトを生成する
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.font = "48px serif";

// FPS
var fps = 30;
var ms = 1000 / fps ;
var count = 0;

// ボタン
var button = new Glaphic(context,'img/button_off.png',200,64);

// マウスポジション取得
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX,
        y: evt.clientY
    };
}

function draw(){
    // canvasクリア
    context.clearRect(0,0,canvas.width,canvas.height);

    // 要素を描画
    context.beginPath();

    // 背景
    var background = new Glaphic(context,'img/background.png',512,512);
    background.paint(0,0);

    // タイトル文字
    context.fillStyle = "black";
    context.fillText("Norimonokun", 110, 100);

    // ボタン
    button.paint(150,200);

    // マウスイベントリスナー(MouseMove)
    canvas.addEventListener('mousemove', function (evt) {
        var mousePos = getMousePosition(canvas, evt);

        if(mousePos.x > 150
        && mousePos.x < 350
        && mousePos.y > 200
        && mousePos.y < 264){
            // ボタン
            button.setSrc('img/button_on.png');
        }else{
            button.setSrc('img/button_off.png');
        }
        //console.log(message);
    }, false);

    // マウスイベントリスナー(MouseDown)
    canvas.addEventListener('mousedown', function (evt) {
        var mousePos = getMousePosition(canvas, evt);

        if(mousePos.x > 150
        && mousePos.x < 350
        && mousePos.y > 200
        && mousePos.y < 264){
            if(count == 0){
                // topのscriptを取得
                var parent = document.getElementById('top');

                var src = document.createElement('script');
                src.setAttribute("id","game"); // id追加
                src.setAttribute('src', 'src/game.js'); // src追加

                var dst = document.getElementById('home');

                count = 1; // 一回実行させるため

                parent.replaceChild(src , dst);
            }
        }
        //console.log(message);
    }, false);
}


function loop(){
    draw();
    setTimeout("loop()",ms);
};

loop();
