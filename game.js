// ステージの幅、高さの定数
const STAGE_WIDTH = 8;
const STAGE_HEIGHT = 8;
// 画像の大きさの定数
const IMAGE_SIZE = 64;

// Player位置の変数
var player_x = 5,player_y = 2;

// FPS
const fps = 30;
var ms = 1000 / fps ;
var count = 0;

// ステージのマップ
var stage = [
    1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,1,
    1,0,3,0,3,0,0,1,
    1,0,2,0,2,0,0,1,
    1,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,
];

//2Dコンテキストのオブジェクトを生成する
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

//画像オブジェクトを生成
var srcs = [
    "img/none.png",
    "img/wall.png",
    "img/block.png",
    "img/goal.png",
    "img/player.png"
];
var images = [];
for(var i in srcs)
{
    images[i] = new Image();
    images[i].src = srcs[i];
}

function playerMove(){
    document.onkeydown = function()
    {
        var player_x_t = player_x;
        var player_y_t = player_y;
        switch (event.keyCode) {
            case 87: // W
                player_y_t += -1;
                break;
            case 65: // A
                player_x_t += -1;
                break;
            case 83: // S
                player_y_t += 1;
                break;
            case 68: // D
                player_x_t += 1;
                break;
        }

        if(player_x_t > 0
        && player_x_t < STAGE_WIDTH - 1
        && player_y_t > 0
        && player_y_t < STAGE_HEIGHT - 1)
        {
            player_x = player_x_t;
            player_y = player_y_t;
        }
    }
}

function putPlayer(x,y)
{
    var img_x = x * IMAGE_SIZE;
    var img_y = y * IMAGE_SIZE;

    context.drawImage(
        images[4],
        img_x,
        img_y
    );
};

function draw(){
    // canvasクリア
    context.clearRect(0,0,canvas.width,canvas.height);

    // 要素を描画
    context.beginPath();
    for(var i in srcs){
        for(var y = 0; y < STAGE_HEIGHT;y++)
        {
            for(var x = 0;x < STAGE_WIDTH;x++)
            {
                var img_x = x * IMAGE_SIZE;
                var img_y = y * IMAGE_SIZE;
                var imgIndex = stage[y * STAGE_HEIGHT + x];
                context.drawImage(
                    images[imgIndex],
                    img_x,
                    img_y
                );
            }
        }
    }
    putPlayer(player_x,player_y);
};

function loop(){
    playerMove();
    draw();
    setTimeout("loop()",ms);
};

loop();
