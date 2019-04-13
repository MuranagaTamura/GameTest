module.exports = class Glaphic {
	// context : Canvasの2dのコンテキスト
	// filename : ファイル名
	// imageWidth : 画像幅
	// imageHeight : 画像高さ
	constructor(context,filename,imageWidth,imageHeight) {
		this.context = context;
		this.img = new Image();
		this.img.src = filename;
		this.width = imageWidth;
		this.height = imageHeight;
	}

	setSrc(filename){
		this.img.src = filename;
	}
	// drawImage
	paint(x,y){
		this.context.drawImage(this.img,x,y);
	}
}
