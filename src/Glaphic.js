module.exports = class Glaphic {
	// context : Canvasの2dのコンテキスト
	// filename : ファイル名
	// imageWidth : 一セルの画像幅
	// imageHeight : 一セル画像高さ
	constructor(context,filename,imageWidth,imageHeight) {
		this.context = context;
		this.img = new Image();
		this.img.src = filename;
		this.width = imageWidth;
		this.height = imageHeight;
		this.x = 0;
		this.y = 0;
	}

	// img.srcを変更
	setSrc(filename){
		this.img.src = filename;
	}

	// 画像を描画する
	// x,y : cancas上の表示座標(左上)
	// col,row : 画像指定の開始位置(左上)の行列番号
	//           未定義なら、無視される
	paint(x,y,col,row){
		this.x = x; // 画像を映す左上座標X
		this.y = y; // 画像を映す左上座標Y

		if(col == undefined && row == undefined){
			try{
				this.context.drawImage(this.img,this.x,this.y);
			}catch(err){
				this.context.putImageData(this.img, this.x, this.y);
			}
		}else{
			var targetY = col * this.height, // 指定した開始頂点X
			targetX = row * this.width; // 指定した開始頂点X

			var message = targetX+","+targetY+","+this.width+","+this.height+","+this.x+","+this.y;
			console.log(message);
			try{
				this.context.drawImage(
					this.img,
					targetX,targetY,
					this.width,this.height,
					this.x,this.y,
					this.width,this.height);
			}catch(err){
				//this.context.putImageData(this.img,this.x,this.y);
			}
		}
		//context . drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
	}

	// 指定色(srcR,G,B)を(ｄｓｔR,G,Bに)変更する
	// なぜかちらつくので非推奨
	changeColor(srcRed,srcGreen,srcBlue,dstRed,dstGreen,dstBlue) {
		// 自身の画像幅高さを取得
		var imgLength = this.height * this.width;

		// 変更後のデータをここに格納
		var changedImg = new Image();
		changedImg = this.context.getImageData(this.x, this.y, this.width, this.height);

		// 各々の画素データを取得
		for (var i = 0; i < imgLength * 4; i += 4) {
			if(srcRed   == changedImg.data[i] && srcGreen == changedImg.data[i + 1] && srcBlue  == changedImg.data[i + 2]){
				changedImg.data[i] = dstRed;
				changedImg.data[i + 1] = dstGreen;
				changedImg.data[i + 2] = dstBlue;
			}
		}
		this.context.putImageData(changedImg, this.x, this.y);
		this.img = changedImg;
	}
}
