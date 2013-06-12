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
Event.enterValueInput = function() {
	$("#value_modal").modal('hide');
	Event.applyChangeValue();
}
Event.applyChangeValue = function() {
	var id = $("#value_id").val();
	var value = $("#value_input").val();
	if ($("#value_type").val() == 0) { // changeNumber
		$("#st"+id+" .number").html(value);
	} else {
		$("#st"+id+" .aaa").html(value);
	}
	return log("applyChangeValue");
}
Event.showValueModal = function() {
	$("#value_modal").modal();
	setTimeout('$("#value_input").focus();', 1000);
	return log("applyChangeValue");
}
Event.changeNumber = function(it) {
	var id = Util.getId(it);
	Event.showValueModal();
	$("#value_id").val(id);
	$("#value_type").val(0);
	$("#value_input").val($("#st"+id+" .number").html());
	return log("changeNumber");
}
Event.changeLabel = function(it) {
	var id = Util.getId(it);
	$("#value_id").val(id);
	$("#value_type").val(1);
	$("#value_input").val($("#st"+id+" .aaa").html());
	
	Event.showValueModal();
	return log("changeLabel n:" + Util.getId(it));
}
Event.deleteThis = function(it) {
	var id = Util.getId(it);
	$("#st"+id).parent().remove();
	return log("deleteThis n:" + Util.getId(it));
}
Event.clearThis = function(it) {
	var id = Util.getId(it);
	$("#st"+id+" .number").removeClass(Event.allTextClasses)
	return log("clearThis n:" + Util.getId(it));
}

Event.allTextClasses = "text-success text-warning text-error";
Event.okClick = function(it) {
	var id = Util.getId(it);
	$("#st"+id+" .number").removeClass(Event.allTextClasses).addClass("text-success");
	return log("okCLick n:" + Util.getId(it));
}
Event.warningClick = function(it) {
	var id = Util.getId(it);
	$("#st"+id+" .number").removeClass(Event.allTextClasses).addClass("text-warning");
	return log("warningCLick n:" + Util.getId(it));
}
Event.errorClick = function(it) {
	var id = Util.getId(it);
	$("#st"+id+" .number").removeClass(Event.allTextClasses).addClass("text-error");
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


$.fn.enterKey = function (fnc) {
    return this.each(function () {
        $(this).keypress(function (ev) {
            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {
                fnc.call(this, ev);
            }
        })
    })
}
