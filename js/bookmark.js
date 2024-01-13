
//북마크 변경
function editBookmark(_self, _key) {
	var _on = $(_self).attr('on');
	//console.log("editBookmark._on=" + _on + ", _key=" + _key);
	if(_on == "off") {
		_on = "Y";
		$(_self).attr('on','on');
		$(_self).html('bookmark on');
	} else {
		_on = "N";
		$(_self).attr('on','off');
		$(_self).html('bookmark off');
	}
	var rootRef = firebase.database().ref();
	rootRef.child('memo_txt/'+auth.currentUser.uid+'/'+_key+'/bookmark').set(_on);
	getBookmark("bookmarkDiv");
}

function getBookmarkShow(_getBookmark) {
    console.log("getBookmarkShow._getBookmark=" + _getBookmark);
    var data = "";
  	for(var _key in _getBookmark) {
  			console.log("getBookmark._key=" + _key + ", " + _getBookmark[_key].title + ", " + _getBookmark[_key].title + ", " + _getBookmark[_key].category);

  			data += "<div><h4><a href='javascript:selectNodeByKey(\"" +_getBookmark[_key].s_key+"\");'>"+_getBookmark[_key].title+"</a><small>&nbsp;"+_getBookmark[_key].category+"</small>"
  			+"<a href='javascript:viewBookmark(\""+_getBookmark[_key].s_key+"\");'>"
  			+"<img src='/img/ic_open.png' style=\"height:25px;\"/></a>"
  			+"</h4>"
  			+"<div id='bDiv_"+_getBookmark[_key].s_key+"'></div>"
  			+"<div>";
 		}
 		if(data != "") {
 			data = "<div class='col-sm-12 bg-white'><h3>Bookmark</h3></div>" + data;
 		}
 		$("#"+div).html(data);
    console.log("getBookmark.data=" + data);
	
}

function getBookmark(div) {
  var userAgent=navigator.userAgent;
  console.log("getBookmark.userAgent" + userAgent);
  
  if(userAgent.indexOf("sinyMemo") > 0) {
    //var _getBookmark = JSON.parse(window.Bridge.getBookmarkList());
	  window.Bridge.getBookmarkList();
	  
    
  } else {
  	var rootRef = firebase.database().ref();
  	var memoQuery = rootRef.child("memo_txt/"+auth.currentUser.uid).orderByChild("bookmark").equalTo("Y");
  	//console.log("getBookmark=" + memoQuery);
  	
  	var data = "";
  	
  	memoQuery.once('value', function(_data){
//  		console.log("getBookmark._data=" + _data.val());
    	for(var _key in _data.val()) {
  			//console.log("getBookmark._key=" + _key + ", " + _data.val()[_key].title + ", " + _data.val()[_key].gbn);
  			data += "<div class='form-row'><h4><a href='javascript:selectNodeByKey(\""+_key+"\");'>"+_data.val()[_key].title+"</a><small>&nbsp;"+_data.val()[_key].gbn+"</small>"
  			+"<a href='javascript:viewBookmark(\""+_key+"\");' >"
  			+"<img src='/img/ic_open.png' style=\"height:25px;\"/></a>"
  			+"</h4>"
  			+"<div  id='bDiv_"+_key+"' class='col-12' style='word-break:break-all; display:inline-block; margin-left:5px; margin-right:5px;'></div>"
  			+"<div>";
  		}
  		if(data != "") {
  			data = "<div class='col-sm-12 bg-white'><h3>Bookmark</h3></div>" + data;
  		}
  		$("#"+div).html(data);
  	});

  }
}

function viewBookmarkNative(_key) {
	var _getBookmark = window.Bridge.BookmarkMemo();
	
	console.log("viewBookmarkNative=" + _getBookmark);
	
	$("#bDiv_"+_key).html(_getBookmark);
}

function viewBookmark(_key) {

	if($("#bDiv_"+_key).html() == "") {
		var userAgent=navigator.userAgent;
		console.log("viewBookmark.key=" + _key + ", userAgent" + userAgent);
	  

		if(userAgent.indexOf("sinyMemo") > 0) {
			window.Bridge.viewBookmark(_key);
			
		} else {
			var rootRef = firebase.database().ref();
			var memoQuery = rootRef.child("memo_txt/"+auth.currentUser.uid+ "/"+_key);
			memoQuery.once('value', function(_data){
				var data = "";
				if(_data.val() != null) {
					console.log("getBookmark._data=" + _data.val().memo);
					$("#bDiv_"+_key).html(_data.val().memo+"<hr>");
		  	  		if(_data.val().color != null) {
		  	  			$("#bDiv_"+_key).css('background-color', _data.val().color);
		  	  		}
				}
			});
		}
	} else {
		$("#bDiv_"+_key).html("");
	}
	
}