//=================导航栏悬停涂鸦效果======================
var NavigationHover = function() {
	$("#Home").mouseenter(function() {
		// $(".Home-hover").css("display","block");
		$(".Home-hover").fadeIn(100);
	});
	$("#Home").mouseleave(function() {
		// $(".Home-hover").css("display","none");
		$(".Home-hover").fadeOut(100);
	});

	$("#Archives").mouseenter(function() {
		$(".Archives-hover").fadeIn(100);
	});
	$("#Archives").mouseleave(function() {
		$(".Archives-hover").fadeOut(100);
	});

	$("#Tags").mouseenter(function() {
		$(".Tags-hover").fadeIn(100);
	});
	$("#Tags").mouseleave(function() {
		$(".Tags-hover").fadeOut(100);
	});

	$("#Github").mouseenter(function() {
		$(".Github-hover").fadeIn(100);
	});
	$("#Github").mouseleave(function() {
		$(".Github-hover").fadeOut(100);
	});

}

/*var NavigationHover = function() {
	var Home = document.getElementById('Home');
	var Archives = document.getElementById('Archives');
	var Tags = document.getElementById('Tags');
	var Github = document.getElementById('Github');

	var HomeHover = document.getElementsByClassName('Home-hover')[0];
	var ArchivesHover = document.getElementsByClassName('Archives-hover')[0];
	var TagsHover = document.getElementsByClassName('Tags-hover')[0];
	var GithubHover = document.getElementsByClassName('Github-hover')[0];


	Home.addEventListener('mouseover', function() {
		console.log('test');
		HomeHover.style.display = 'blcok';
	});
	Archives.addEventListener('mouseover', function() {
		ArchivesHover.style.display = 'blcok';
	});
	Tags.addEventListener('mouseover', function() {
		TagsHover.style.display = 'blcok';
	});
	Github.addEventListener('mouseover', function() {
		GithubHover.style.display = 'blcok';
	});
}
*/


/*var mouseOver = function(event) {
	var currentElement = event.target.parentNode.firstElementChild;
	currentElement.style.display = "block";
}

var mouseOut = function(event) {
	var currentElement = event.target.parentNode.firstElementChild;
	currentElement.style.display = "none";
}*/


//================tag-icon颜色==========================

var tagIcons = [
	{
		"id": 0,
		"color": "#fd0f02"		//红色
	},
	{
		"id": 1,
		"color": "#42ba01"		//绿色

	},
	{
		"id": 2,
		"color": "#8a1eff"		//紫色

	},
	{
		"id": 3,
		"color": "#fe9402"		//橙色
	},
	{
		"id": 4,
		"color": "#0136fe"		//深蓝
	}
]


var getTagIcon = function(str) {
	var tagLength = str.length;

	if(tagLength <= 4) {
		return tagIcons[tagLength - 1].color;
	} else {
		return tagIcons[4].color;
	}
}

var TagBackgroundColor = function() {

	var tagsAll = $(".article-tag-list-link");
	// console.log(tagsAll);
	tagsAll.each(function() {
		$(this).css("background-color", getTagIcon($(this).text()));
	})
}


//===============页面主函数===========================
$(document).ready(function() {
	//导航栏悬停涂鸦效果
	NavigationHover();

	//tag背景颜色
	TagBackgroundColor();

})