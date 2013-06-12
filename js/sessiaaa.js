var Stickers = Array();

// status: 0 - not read, 1 - ok, 2 - warning, 3 - bad
Stickers.simpleSticker = function(stickerId, stickerNumber, status, messageCount) {
	this.simple = true;
	this.stickerId = stickerId;
	this.stickerNumber = stickerNumber;
	this.status = status;
	this.messageCount = messageCount;
}

Stickers.funnySticker = function(stickerId, stickerType, label) {
	this.simple = false;
	this.stickerType = stickerType;
	this.label = label;
}

Stickers.allInf = function(allTickers, messages, counter) {
	this.allTickers = allTickers;
	this.messages = messages;
	this.counter = counter;
}

Stickers.getAllStickers = function() {
	var all = Array();
	$("#sortable").children().each(function(index) {
		var it = $(this).find(">div").first().get(0);
		if (it == undefined) {
			return;
		}
		var id = Util.getNumber(it.id);
		if ($(it).find(".funny-label").length > 0) { // e.t. funny Sticker
			var label = $(it).find(".funny-label").html();
			var imgUrl = $(it).find(".imgMy").css("background-image");
			var stickerType = Util.getFunnyType(imgUrl);
			
			all[index] = new Stickers.funnySticker(id, stickerType, label);
		} else {
			var number = $(this).find(".number").html();
			var messageCount = $(this).find(".message_counter").html();
			var status = 0;
			if ( $(this).find(".number.text-success").length > 0) {
				status = 1;
			}
			if ( $(this).find(".number.text-warning").length > 0) {
				status = 2;
			}
			if ( $(this).find(".number.text-error").length > 0) {
				status = 3;
			}
			all[index] = new Stickers.simpleSticker(id, number, status, messageCount);
		}
	});	
	return all;
}

var MessagesMap = Array();


////------------------------------------------------ Events -----------------------------------------------

var Event = Object();
Event.saveAll = function() {
	
} 


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
		$("#st"+id+" .funny-label").html(value);
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
	$("#value_input").val($("#st"+id+" .funny-label").html());
	
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
Util.getFunnyType = function(url) {
	var start = url.indexOf("img/") + 4;
	var end = url.length - 6;
	return parseInt(url.substring(start, end)) + 0;
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


////------------------------------------------------ utils -----------------------------------------------

function log(message) {
	$("#myLabel").html(message);
	console.log(message);
	Event.saveAll();
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
