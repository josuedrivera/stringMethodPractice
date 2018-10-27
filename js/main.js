console.log("connected");

// this function will add whatever is typed in the textarea and publish to the body
function publish(){

	var article = document.getElementsByTagName("textarea")[0].value;
	document.body.innerHTML += "<p class="article-p">" + article.split("\n").join("</p><hr><p class="article-p">") + "</p>";
}