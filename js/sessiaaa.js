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
	this.stickerId = stickerId;
	this.stickerType = stickerType;
	this.label = label;
}

Stickers.allInf = function(allStickers, messages, counter) {
	this.allStickers = allStickers;
	this.messages = messages;
	this.counter = counter;
}

Stickers.renderAllStickers = function(all) {
	var s = '';
	for (i = 0; i < all.length; i++) {
		if(all[i] != null) {
			var it = all[i];
			if (it.simple) { ////-----------
				var specialType = '';
				if (it.status == 1) {
					specialType = "text-success";
				}
				if (it.status == 2) {
					specialType = "text-warning";
				}
				if (it.status == 3) {
					specialType = "text-error";
				}
				s = s + "<li>"+Render.simpleSticker("st"+ it.stickerId, it.stickerNumber, it.messageCount, specialType) + "</li>";
			} else {
				s = s + "<li>"+ Render.funnySticker("st"+it.stickerId, "/img/"+it.stickerType+".jpg", it.label) + "</li>";
			}
		}
	}
	return s;
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
			log(imgUrl);
			var stickerType = Util.getFunnyType(imgUrl);
			log(stickerType);
			
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

Stickers.createAllInf = function() {
	return new Stickers.allInf(Stickers.getAllStickers(), MessagesMap, Event.counter);
}

Stickers.createNewInf = function(count) {
	var all = Array();
	for (i = 0; i< count; i++) {
		all[i] = new Stickers.simpleSticker(i+1, i+1, 0, ' ');
	}
	return new Stickers.allInf(all, Array(), count+2);
}

var MessagesMap = Array();


////------------------------------------------------ Events -----------------------------------------------


var Event = Object();
Event.counter = 10;

Event.saveAll = function() {
	$.post("/ajax.php", {"saveAll": JSON.stringify(Stickers.createAllInf())});
} 

Event.loadSaveAll = function(ob) {
//	var ob = jQuery.parseJSON(saveAll);
	MessagesMap = ob.messages;
	Event.counter = ob.counter;
	$("#sortable").html(Stickers.renderAllStickers(ob.allStickers));
	Event.dragEnd(false);
}

Event.dragEnd = function(update) {
	$("#sortable_menu").html(Render.allFunny('st' + Event.counter));
	Event.counter = Event.counter + 1;
	log(document.counter);
	Event.saveAll();
}


///////-------- 

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
	
	Event.saveAll();
	return log("applyChangeValue");
}
Event.showValueModal = function() {
	$("#value_modal").modal();
	setTimeout('$("#value_input").focus();', 700);
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
	
	Event.saveAll();
	return log("deleteThis n:" + Util.getId(it));
}
Event.clearThis = function(it) {
	var id = Util.getId(it);
	$("#st"+id+" .number").removeClass(Event.allTextClasses);
	
	Event.saveAll();
	return log("clearThis n:" + Util.getId(it));
}

Event.allTextClasses = "text-success text-warning text-error";
Event.okClick = function(it) {
	var id = Util.getId(it);
	$("#st"+id+" .number").removeClass(Event.allTextClasses).addClass("text-success");
	
	Event.saveAll();
	return log("okCLick n:" + Util.getId(it));
}
Event.warningClick = function(it) {
	var id = Util.getId(it);
	$("#st"+id+" .number").removeClass(Event.allTextClasses).addClass("text-warning");
	
	Event.saveAll();
	return log("warningCLick n:" + Util.getId(it));
}
Event.errorClick = function(it) {
	var id = Util.getId(it);
	$("#st"+id+" .number").removeClass(Event.allTextClasses).addClass("text-error");
	
	Event.saveAll();
	return log("errorCLick n:" + Util.getId(it));
}

Event.showMessageModal = function() {

	$("#message_modal").modal();
	setTimeout('$("#message_text").focus();', 700);
	return log("applyChangeValue");
}

Event.messageClick = function(it) {
	var id = Util.getId(it);
	if (MessagesMap[id] == undefined) {
		MessagesMap[id] = Array();
	}
	Event.setMessages(id);
	$("#message_id").val(id);
	$("#message_text").html('');
	
	Event.showMessageModal();
	return log("messageCLick n:" + Util.getId(it));
}

Event.deleteMessage = function(index) {
	var id = $("#message_id").val();
	MessagesMap[id].splice(index, 1);
	Event.setMessages(id);
	Event.updateMessageCounter(id);
	
	
}

Event.addMessage = function() {
	var id = $("#message_id").val();
	var value = $("#message_text").val().replace("\n", "<br />");
	MessagesMap[id].push(value);
	
	$("#message_text").val('');
	Event.setMessages(id);
	Event.updateMessageCounter(id);
}

Event.updateMessageCounter = function(id) {
	var length = MessagesMap[id].length;
	if (length == 0) {
		length = ' ';
	}
	$("#st" + id + " .message_counter").html(length);
	
	Event.saveAll();
}

Event.setMessages = function(id) {
	$("#message_table").html(Render.messages(MessagesMap[id]));
}


var Util = Object();
Util.getNumber = function(id) {
	return parseInt(id.substring(2)) + 0;
}
Util.getFunnyType = function(url) {
	var start = url.indexOf("img/") + 4;
	var end = url.indexOf(".jpg");
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
