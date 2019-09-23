var myUI;

myUI = {
	init: function(){
		var page = createEle("div");

		page.innerHTML = "talkings";

		body.append(page);
	}
};

window.onload = function(){
	myUI.init();
};