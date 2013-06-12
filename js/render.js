
var Render = Object();
Render.funnySticker = function(stickerId, imgSrc, label) {
	return '<div id="'+stickerId+'" class="sticker_div"><table class="well sticker"><tr><td class = "number imgMy" style="background-image:url('+imgSrc+');">&nbsp;</td></tr><tr><td align = "center"><div class ="btn-group text-right row-fluid"> <button class="btn btn-small funny-label" onclick="Event.changeLabel(this);">'+label+'</button><button class="btn btn-small dropdown-toggle down-arrow2" data-toggle="dropdown"><span class="caret"></span></button><ul class="dropdown-menu right text-left"><li><a href="#" onclick="return Event.changeLabel(this);">Change label</a></li><li><a href="#" onclick="return Event.deleteThis(this);">Delete</a></li></ul></div></td></tr></table></div>';
}
Render.simpleSticker = function(stickerId, stickerNumber, messageCount, specialType) {
	if (typeof(specialType) === "undefined") {specialType='';}
	return '<div id="'+stickerId+'" class="sticker_div"><table class="well sticker"><tr><td class = "number '+specialType+'">'+stickerNumber+'</td></tr><tr><td align = "center"><div class ="btn-group text-right dropdown"> <button class="btn btn-small btn-success" onclick="Event.okClick(this);">:)</button><button class="btn btn-small btn-warning" onclick="Event.warningClick(this);">:(</button><button class="btn btn-small btn-danger" onclick="Event.errorClick(this);">:\'(</button><button class="btn btn-small btn-info" onclick="Event.messageClick(this);"><span class="message_counter">'+messageCount+'</span> <i class="icon-envelope"></i></button><button class="btn btn-small dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button><ul class="dropdown-menu right text-left"><li><a href="#" onclick="return Event.changeNumber(this);">Change number</a></li><li><a href="#" onclick="return Event.clearThis(this);">Clear</a></li><li ><a href="#" onclick="return Event.deleteThis(this);">Delete</a></li></ul></div></td></tr></table></div>'

}

Render.messages = function(messages) {
	var s = '';
	if (messages == undefined) {
		return '';
	}
	for (i = 0; i < messages.length; i++) {
		s = s + '<tr><td class = "message">'+messages[i]+'</td>';
		s = s + '<td class = "del"><button type="button" class="close" onclick="Event.deleteMessage('+i+');">×</button></td></tr>';
	}
	return s;
}

Render.labels = Array("Лениться", "Спать", "Пить чай", "Гулять");


Render.allFunny = function(stickerId) {
	var s = '';
	for (i = 0; i < 4; i++) {
		s = s + "<li>"+Render.funnySticker(stickerId, '/img/'+i+'.jpg', Render.labels[i])+"</li>" + '\n';	
	}	
	
		s = s + "<li>"+Render.simpleSticker(stickerId, 0, ' ')+"</li>" + '\n';	
	return s;
}
