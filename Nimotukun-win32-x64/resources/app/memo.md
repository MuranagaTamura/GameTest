画像描画はonloadの中でやる。

for文を先に回すな！(imageオブジェクト配列のonloadでのfor文はOK！)

つまり、

```
OK!
for(var i in srcs){
    images[i].onload = function(){
        for(var y = 0; y < STAGE_HEIGHT;y++)
        {
            for(var x = 0;x < STAGE_WIDTH;x++)
            {
                var img_x = x * IMAGE_SIZE;
                var img_y = y * IMAGE_SIZE;
                var imgIndex = bufferedStage[y * STAGE_HEIGHT + x];
                console.log("x : " + img_x + ",y : " + img_y);
                context.drawImage(
                    images[imgIndex],
                    img_x,
                    img_y,
                    IMAGE_SIZE,
                    IMAGE_SIZE
                );
            }
        }
    }
}

// NG
for(var y = 0; y < STAGE_HEIGHT;y++)
{
    for(var x = 0;x < STAGE_WIDTH;x++)
    {
        var img_x = x * IMAGE_SIZE;
        var img_y = y * IMAGE_SIZE;
        var imgIndex = bufferedStage[y * STAGE_HEIGHT + x];
        console.log("x : " + img_x + ",y : " + img_y);
        images[imgIndex].onload = function(){
            context.drawImage(
                images[imgIndex],
                img_x,
                img_y,
                IMAGE_SIZE,
                IMAGE_SIZE
            );
        }
    }
}
```
