
var Render = Object();
Render.funnySticker = function(stickerId, imgSrc, label) {
	return '<div id="'+stickerId+'" class="sticker_div"><table class="well sticker"><tr><td class = "number imgMy" style="background-image:url('+imgSrc+');">&nbsp;</td></tr><tr><td align = "center"><div class ="btn-group text-right row-fluid"> <button class="btn btn-small aaa" onclick="Event.changeLabel(this);">'+label+'</button><button class="btn btn-small dropdown-toggle aaa2" data-toggle="dropdown"><span class="caret"></span></button><ul class="dropdown-menu right text-left"><li><a href="#" onclick="return Event.changeLabel(this);">Change label</a></li><li><a href="#" onclick="return Event.deleteThis(this);">Delete</a></li></ul></div></td></tr></table></div>';
}
Render.simpleSticker = function(stickerId, stickerNumber, messageCount) {
	return '<div id="'+stickerId+'" class="sticker_div"><table class="well sticker"><tr><td class = "number">'+stickerNumber+'</td></tr><tr><td align = "center"><div class ="btn-group text-right dropdown"> <button class="btn btn-small btn-success" onclick="Event.okClick(this);">:)</button><button class="btn btn-small btn-warning" onclick="Event.warningClick(this);">:(</button><button class="btn btn-small btn-danger" onclick="Event.errorClick(this);">:\'(</button><button class="btn btn-small btn-info" onclick="Event.messageClick(this);"><span class="message_counter">'+messageCount+'</span> <i class="icon-envelope"></i></button><button class="btn btn-small dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button><ul class="dropdown-menu right text-left"><li><a href="#" onclick="return Event.changeNumber(this);">Change number</a></li><li><a href="#" onclick="return Event.clearThis(this);">Clear</a></li><li ><a href="#" onclick="return Event.deleteThis(this);">Delete</a></li></ul></div></td></tr></table></div>'

}

Render.allFunny = function(stickerId) {
	var s = '';
	for (i = 0; i < 4; i++) {
		s = s + "<li>"+Render.funnySticker(stickerId, '/img/'+i+'.jpg', "label: " + i)+"</li>" + '\n';	
	}	
	return s;
}
