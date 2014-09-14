chrome.contextMenus.create({
	"title"   : "引用してTweet",
	"type"    : "normal",
	"contexts": ["selection"],
	"onclick" : function(info) {
		var text = '"' + info.selectionText + '" ' + info.pageUrl;
		// Tweet字数制限の対応
		console.log(text.length);
		if(text.length > 137){
			text = '"' + info.selectionText.slice(0, 137-text.length) + '..." ' + info.pageUrl;
		}
		var tweet_url = "https://twitter.com/intent/tweet?text="+encodeURIComponent(text);
		chrome.windows.create({
			url   : tweet_url,
			width : 600,
			height: 250,
			type  : "popup"});
	}
});