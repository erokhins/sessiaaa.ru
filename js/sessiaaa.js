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



var Event = Object();
Event.changeNumber = function(it) {
	return log("changeNumber");
}
Event.changeLabel = function(it) {
	return log("changeLabel n:" + Util.getId(it));
}
Event.deleteThis = function(it) {
	return log("deleteThis n:" + Util.getId(it));
}
Event.clearThis = function(it) {
	return log("clearThis n:" + Util.getId(it));
}
Event.okClick = function(it) {
	return log("okCLick n:" + Util.getId(it));
}
Event.warningClick = function(it) {
	return log("warningCLick n:" + Util.getId(it));
}
Event.errorClick = function(it) {
	return log("errorCLick n:" + Util.getId(it));
}
Event.messageClick = function(it) {
	return log("messageCLick n:" + Util.getId(it));
}


var Util = Object();
Util.getNumber = function(id) {
	return parseInt(id.substring(2)) + 0;
}
Util.getId = function(it) {
	temp = it;
	while(temp != null) {
		if (temp.className == "sticker_div") {
			return Util.getNumber(temp.id);
		}
		temp = temp.parentNode;
	}
}

function log(message) {
	$("#myLabel").html(message);
	console.log(message);
	return false;
}

function test() {
	
	log(Util.getNumber("st13"));
	var simple = new Stickers.simpleSticker(4);
	//console.log(Stickers.add(simple));
	var simple = new Stickers.funnySticker('enot', 'Еда');
	//log(Stickers.add(simple));
	//log(Stickers.length);
}
