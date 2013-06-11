var Stickers = Array();

// status: 0 - not read, 1 - warning, 2 - bad, 3 - ok
Stickers.simpleSticker = function(stickerNumber) {
	this.simple = true;
	this.status = 0;
	this.messages = Array();
	this.stickerNumber = stickerNumber;
}

Stickers.funnySticker = function(stickerType, label) {
	this.simple = false;
	this.stickerType = stickerType;
	this.label = label;
}
// return number of last add
Stickers.add = function(sticker) {
	return Stickers.push(sticker) - 1;
}


var Order = Array();





function test() {
	var simple = new Stickers.simpleSticker(4);
	console.log(Stickers.add(simple));
	var simple = new Stickers.funnySticker('enot', 'Еда');
	console.log(Stickers.add(simple));
	console.log(Stickers.length);
}
