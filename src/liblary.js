module.exports = class Glaphic {
	// canvas htmlキャンバスを取得
	// fileimage,imageWidth,imageHeight ファイル画像、画像幅、画像高さ
	// constructor(canvas,filename,imageWidth,imageHeight) {
	constructor(context,filename,imageWidth,imageHeight) {
		// this.context = canvas.getContext('2d');
		this.context = context;
		this.img = new Image();
		this.img.src = filename;
		this.width = imageWidth;
		this.height = imageHeight;
		//console.log(context);
		//console.log(this.context);
	}

	// drawImage
	paint(x,y){
		//console.log(this.context);
		//console.log(this.img);
		this.context.drawImage(this.img,x,y);
	}
}
