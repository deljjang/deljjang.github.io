//전체 목록
var defaultData = [];
/* defaultData 형식
var node = {
	text: title,
	full_text: "- " + title,
	href: 'javascript:showDetail(\""+key+"\");'  ,
	key: key,
	up: key,
	up_key: "",
	gbn: gbn,
	bookmark: json.bookmark,
	memo:json.memo
};
*/

//조회모드 여부 : true:조회모드, false:전체모드
var searchWordYN = false;

/**
트리에 메모 내용 전체 읽기
google.auth.js -> auth.onAuthStateChanged에서 호출
*/
function memoDataLoad() {

  console.log("page="+window.location.href);
  console.log("edSearch="+$("#edSearch") + ", " + $("#edSearch").val());

	var rootRef = firebase.database().ref();
	//rootRef.onDisconnect().cancel();

	defaultData = [];

	if($("#edSearch") == null || $("#edSearch").val() == undefined || $("#edSearch").val() == "") {
		searchWordYN = false;
  		rootRef.child("memo/"+auth.currentUser.uid).orderByChild('title').on('value', function(data){ //once value, child_removed, child_changed, child_moved

  			defaultData = [];
  		
  		    //console.log('memoDataLoad.memo.data=' , data.val());
  		    //console.log('memoQuery.memo.data=' , data.val());
  		  	var json = [];
  		  	
  		  	for(var tmp in data.val()) {
  		  		var dataVal = data.val()[tmp];
  		  		//console.log('memoDataLoad.tmp=' , tmp , " " + dataVal);
  		  		dataVal.key = tmp;
  		  		json.push(dataVal);
  		  	}
  		  	/* 정렬시 사용
  		  	json.sort(function(a, b) { // 오름차순
  		      return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
  			});
			*/
  		  	treeDataAll(json);
  		});  		
		
	} else {
		searchWordYN = true;
		var word = $("#edSearch").val();
		//"\uf8ff" "[a-zA-Z0-9]*"
  		rootRef.child("memo_txt/"+auth.currentUser.uid).orderByChild('title')//.equalTo(word) //startAt("%${"+word+"}%").endAt(word+"\uf8ff")
  		.once('value', function(data){ //once value, child_removed, child_changed, child_moved

  		    //console.log('memoDataLoad.memo.data=' , data.val());
  		    //console.log('memoQuery.memo.data=' , data.val());
  		  	var json = [];
  		  	
  		  	for(var key in data.val()) {
  		  		var dataVal = data.val()[key];
  		  		//console.log('memoDataLoad.tmp=' , tmp , " " + dataVal);
  		  		dataVal.key = key;
  		  		var tmp = dataVal.memo + "";
  		  		if(tmp.toLowerCase().indexOf(word.toLowerCase()) > -1) {
  		  			console.log('memoDataLoad.key=' , key + ", " + dataVal.up + ", " + dataVal.title);
	  		  		json.push(dataVal);
  		  		}
  		  	}
  		  	/* 정렬시 사용
  		  	json.sort(function(a, b) { // 오름차순
  		      return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
  			});
  		  	*/
  		    //console.log('memoDataLoad.memo.json=' , json);
  		  	treeDataAll(json);
  		});  		
	}
}

//key값으로 노드찾아서 이동
function selectNodeByKey(key){
	console.log("selectNodeByKey.key=" + key);
	//console.log("selectNodeByKey.treeview1=" + $('#treeview1').html());
	if($('#treeview1').html() == null) {
	  showDetail(key);
  } else {
  	var tmpNode = $('#treeview1').treeview('keyNode', [ key ]);
  	$('#treeview1').treeview('unselectNode', [ tmpNode, { silent: false , selected: true}]);
  	$('#treeview1').treeview('selectNode', [ tmpNode, { silent: false , selected: true}]);
  	//console.log("selectNodeByKey.tmpNode=" + tmpNode.searchResult);
  	$('#treeview1').treeview('revealNode', [ tmpNode, { silent: false , selected: true}]);
	}
}

/**
 * defaultData에 데이터를 추가한다.
 * 
 * call
 * memoDataLoad
 * @param jsonAll
 */
function treeDataAll(jsonAll) {
	//$("#treeDiv").html("");
	//console.log("treeData.memoJson=" + memoJson);
	for(var tmp in jsonAll) {
		var json = jsonAll[tmp];
		var key = json.key;
		var title = json.title;
		var gbn = json.gbn;
		
		if(title == null) {
			title = "";
		}    		
		if(gbn == null) {
			gbn = "";
		}
		
		var node = {
			text: title,
			full_text: "- " + title,
			href: 'javascript:showDetail(\""+key+"\");'  ,
			key: key,
			up: key,
			up_key: "",
			gbn: gbn,
			bookmark: json.bookmark,
			memo:json.memo
		};

		var sub = json.sub;
	  	if(sub != undefined) {
	  		node.nodes = [];
	      	treeSubData(sub, key, "- " + title, 1, key+"/sub", node.nodes);
	      	
	      	//서브 노드수 표시
	      	var tag = 0;
	      	for(var tmp in sub) {
	      		tag++;
	      	}
	      	node.tags = [tag+""];
  		}
  		defaultData.push(node);    		
	}
	initSelectableTree();    	
}

/**
 * 조회 버튼 클릭
 */
function searchDataBtn() {
	memoDataLoad();
	//searchData($("#edCategory").val());
}

/**
 * 전체조회 모드에서 서브node 입력 처리
 * @param sub
 * @param key
 * @param full_text
 * @param depth
 * @param path
 * @param node
 */
function treeSubData(sub, key, full_text, depth, path, node) {

	//console.log("treeSubData.key=" + key + ", depth=" + depth + ", path=" + path);
	var jsonSort = [];
  	for(var tmp in sub) {
  		var dataVal = sub[tmp];
  		//console.log('treeSubData.tmp=' , tmp , " " + dataVal.title);
  		dataVal.key = tmp;
  		jsonSort.push(dataVal);
  	}
	
  	jsonSort.sort(function(a, b) { // 오름차순
  		return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
	});
	
	for(var subkey in jsonSort) {
		var json = jsonSort[subkey];
		//console.log('treeSubData.json.key=' , json.key);
		//json.key = subkey;
  		
		var title = json.title;
		var gbn = json.gbn;
		var sub2 = json.sub;
  		
		if(title == null) {
			title = "";
		}    		
		if(gbn == null) {
			gbn = "";
		}

		var nodes = {
				text: title,
				full_text: full_text+" > "+title,
				href: 'javascript:showDetail(\""+key+"\");'  ,
				key: json.key,
				up: path + '/'+json.key,
				up_key: key,
				memo: ''
			};
		node.push(nodes);
		
		if(sub2 != undefined) {
			
    		nodes.nodes=[];
    		//console.log("treeSubData.sub2=" + sub2 + ", objVarName=" + subkey);
			treeSubData(sub2, json.key, full_text+" > "+title, depth+1, path + "/" + json.key + "/sub", nodes.nodes);
			
        	//서브 노드수 표시
        	var tag = 0;
        	for(var tmp2 in sub2) {
        		tag++;
        	}
        	nodes.tags = [tag+""];
		}    		
		//console.log("treeSubData.sub=" + subkey + ". " + sub[subkey]);
	}
}

//index에 맞는 노드를 찾는다.
function findDefaultData(index, data) {
	for(var tmp in data) {
		var node = data[tmp];
		if(index == node.key) {
			console.log('findDefaultData.index=' + index + ', tmp=' + tmp + ", " + node.key + ", " + node.text);// + ", " + node.nodes);
			return node;
		}
		if(node.nodes != null) {
			var tmpNode = findDefaultData(index, node.nodes);
			if(tmpNode != null) {
				console.log('findDefaultData.tmpNode=' + tmpNode.key + ", " + tmpNode.text);
				return tmpNode;
			}
		}
	}
}

/**
 * showDetail에서 호출
 * html형식으로 화면을 표시한다.
 * 
 * call : showDetail
 * @param defaultDataNode
 */
function showHtmlDetail(defaultDataNode) {
	$("#treeBodyDiv").html("");
	$("#btnBodyDiv").html("");
	
	//console.log('showHtmlDetail._data=' + _data);
	var book = "bookmark off";
	var _on = "off";
	if(defaultDataNode.bookmark != null && defaultDataNode.bookmark == 'Y') {
		book = "bookmark on";
		_on = "on";
	}

	var title = "";
	var gbn = "";
	var memo = "";
	
	var image = "";
	if(defaultDataNode != null) {
		//console.log('showHtmlDetail._data.val=' + _data.val().image);
		if(defaultDataNode.gbn == null) {
			defaultDataNode.gbn = "";
		}
		if(defaultDataNode.full_text == null) {
			defaultDataNode.full_text = "";
		}
			
		title = "<font color='red'>" + defaultDataNode.text + "</font>&nbsp;&nbsp;";
		gbn = "<font color='gray'><b>" + defaultDataNode.gbn + "</b> "+ defaultDataNode.full_text + "</font><br>";
		if(defaultDataNode != null) {
			memo = defaultDataNode.memo;
		}
		
		$("#btnBodyDiv").append("<div class='col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12' style='word-break:break-all;'>" 
		  		+ "<a href='#' onclick='javascript:selectNodeByKey(\"" + defaultDataNode.key + "\");'>" + title + "</a>"
		  		+ gbn + "</div>");
		
		$("#treeBodyDiv").append("<a href=\"javascript:setColor('" + defaultDataNode.key + "','FFE3FF');\" style=\"background-color:#FFE3FF\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>");				
		$("#treeBodyDiv").append("<a href=\"javascript:setColor('" + defaultDataNode.key + "','FFC6FF');\" style=\"background-color:#FFC6FF\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>");
		$("#treeBodyDiv").append("<a href=\"javascript:setColor('" + defaultDataNode.key + "','FFC6C6');\" style=\"background-color:#FFC6C6\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>");
		$("#treeBodyDiv").append("<a href=\"javascript:setColor('" + defaultDataNode.key + "','FFFFC5');\" style=\"background-color:#FFFFC5\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>");
		$("#treeBodyDiv").append("<a href=\"javascript:setColor('" + defaultDataNode.key + "','E3FFDC');\" style=\"background-color:#E3FFDC\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>");		
		$("#treeBodyDiv").append("<a href=\"javascript:setColor('" + defaultDataNode.key + "','C6FFFF');\" style=\"background-color:#C6FFFF\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>");
		$("#treeBodyDiv").append("<a href=\"javascript:setColor('" + defaultDataNode.key + "','7ED2FF');\" style=\"background-color:#7ED2FF\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>");
		$("#treeBodyDiv").append("<a href=\"javascript:setColor('" + defaultDataNode.key + "','C7C6FF');\" style=\"background-color:#C7C6FF\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>");
		$("#treeBodyDiv").append("<a href=\"javascript:setColor('" + defaultDataNode.key + "','E1E1E1');\" style=\"background-color:#E1E1E1\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>");		
		$("#treeBodyDiv").append("<div id='bodyDiv' class='col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12' style='word-break:break-all;'>" + memo + "</div>");

		console.log('showHtmlDetail.defaultDataNode.color=' + defaultDataNode.color);
		$("#bodyDiv").css('background-color', defaultDataNode.color);
		
		var image = defaultDataNode.image;
		//console.log('showHtmlDetail.defaultDataNode.image=' + image);
		if(image != null) {
			for(var tmpImg in defaultDataNode.image) {
				var obj = defaultDataNode.image[tmpImg];
					
				console.log('showHtmlDetail.tmpImg=' + tmpImg + ",use= " + obj.use + ",ext= " + obj.ext);
				if(obj.use != null && obj.use == 'Y') {
					var tmpImgTag = ''; 
					if(obj.ext == '3gp' || obj.ext == 'mp4') {
						tmpImgTag = 
  	  					"<div class='col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12'>"
						+ "<video id='" + tmpImg + "' width='100%' height='100%' controls playsinline style='max-width: 600px;'>"
						+ "</video>"
						;
	  	  	  	  		$("#treeBodyDiv").append(tmpImgTag);
					} else 
					if(obj.ext == 'pdf' 
					|| obj.ext == 'ppt' || obj.ext == 'pptx'
					|| obj.ext == 'xls' || obj.ext == 'xlsx'
					|| obj.ext == 'doc' || obj.ext == 'docx'
					|| obj.ext == 'txt'
					|| obj.ext == 'c'
					|| obj.ext == 'zip'
					) {
						tmpImgTag = 
  	  					"<div class='col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12'>"
						+ "<a id='" + tmpImg + "' target='_blank'>" + obj.name + "</a>"
						+ "</div>"
						;						
	  	  	  	  		$("#treeBodyDiv").html(tmpImgTag+ $("#treeBodyDiv").html());
					} else {
						tmpImgTag = 
  	  					"<div class='col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12'>"
	  					+ "<br><img id='"+tmpImg+"' src='' class='img-responsive' style='display:none; max-width: 600px;' />" //;
						+ "</div>";
	  	  	  	  		$("#treeBodyDiv").append(tmpImgTag);
					}
					
  	  	  	  		viewImage(defaultDataNode.key, tmpImg, obj.ext);
				}
			}
		}
	}	
	
	var tmp =  
    "<div>"
	+ "<button align=\"right\" type='button' class='btn btn-outline-info btn-block' onclick='editMode(\""+defaultDataNode.key+"\");return false;'>edit</button>"
	+ "</div>"
	+ "<div>"
	+ "<button align=\"right\" type='button' class='btn btn-outline-warning btn-block' on='"+_on+"' onclick='editBookmark(this, \""+defaultDataNode.key+"\");return false;'>" + book +"</button>"
	+ "</div>"
	+ "<div>"
	+ "<button align=\"right\" type='button' class='btn btn-outline-primary btn-block' onclick='treeSubAppendData(\""+defaultDataNode.key+"\");return false;'>sub append</button>"
	+ "</div>"
	+ "<div>"
	+ "<button align=\"right\" type='button' class='btn btn-outline-success btn-block' onclick='moveDataMode(\""+defaultDataNode.key+"\");return false;'>move</button>"
	+ "</div>"
	+ "<div>"
	+ "<button align=\"right\" type='button' class='btn btn-outline-danger btn-block' onclick='delData(\""+defaultDataNode.key+"\");return false;'>delete</button>"
	+ "</div>"
	;
	$("#btnBodyDiv").append(tmp);
	
}

function setColor(key, c) {
	var rootRef = firebase.database().ref();
	rootRef.child('memo_txt/'+auth.currentUser.uid+'/'+key+'/color').set('#'+c);
	
	$("#bodyDiv").css('background-color', '#'+c);
	
	var defaultDataNode = findDefaultData(key, defaultData);
	defaultDataNode.color = '#'+c;
}

/*
 * 메모 내용 표시
 * tree클릭시 처리 
 */
function showDetail(index) {

	jsonIndex = index;

	if(searchWordYN) {
		searchShowDetail(index);
		return;
	}

	var defaultDataNode = findDefaultData(index, defaultData);
	var fullIndex = defaultDataNode.up;
	console.log('showDetail.defaultDataNode=' + index + ", " + defaultDataNode.key + ", " + defaultDataNode.up);// + " " + defaultDataNode.bookmark + " " + defaultDataNode.memo);
	console.log('showDetail.title=' + defaultDataNode.text);
	
	if(defaultDataNode.memo == null || defaultDataNode.memo == undefined || defaultDataNode.memo == "") {
		console.log('showDetail.memo.is.null');
		var rootRef = null;
		try {
			rootRef = firebase.database().ref();
		} catch (e) {
			firebase.initializeApp(config);
			rootRef = firebase.database().ref();
			console.log('showDetail.catch.rootRef=' + rootRef);
		}	
		rootRef.child("memo_txt/"+auth.currentUser.uid+"/" + index).once('value', function(_data){ //once value, child_removed, child_changed, child_moved
	  		if(_data.val() != null) {
	  	  		defaultDataNode.bookmark = _data.val().bookmark;		
	  	  		defaultDataNode.memo = _data.val().memo;		
	  	  		defaultDataNode.image = _data.val().image;
	  	  		var gbn = "";
	  	  		if(_data.val().gbn != null) {
	  	  			gbn = _data.val().gbn;	
	  	  		}
	  	  		defaultDataNode.gbn = gbn;
	  	  		
	  	  		var color = "";
	  	  		if(_data.val().color != null) {
	  	  		color = _data.val().color;	
	  	  		}
	  	  		defaultDataNode.color = color;	
	  	  		
				showHtmlDetail(defaultDataNode);
	  		} else {
	  			defaultDataNode.bookmark = "";	
	  			defaultDataNode.memo = "";
	  			defaultDataNode.color = "";
				showHtmlDetail(defaultDataNode);
	  			console.log('showDetail.data.null=' + defaultDataNode);
	  		}
		});		
	} else {
		console.log('showDetail.memo.not.null');
		showHtmlDetail(defaultDataNode);
	}
}

/**
 * 신규 메모 저장
 * @param index
 */
function saveNewData(index) {
	var map = new Object;
	map.title = $("#edNewTitle").val();
	map.gbn   = $("#edNewCategory").val();
	
	saveMemosGbn(map.gbn);

	map.memo = $("#edNewMemo").val();

	var rootRef = firebase.database().ref();
    var newPostKey = rootRef.child("memo/"+auth.currentUser.uid).push().key;
	console.log("newPostKey=" + newPostKey);
 	  
	console.log("map=" + map);

	//rootRef.child('memo').child(""+auth.currentUser.uid).set(map);  		
	//rootRef.child("memo/"+auth.currentUser.uid + "/" + newPostKey).update(map.title);
	rootRef.child("memo/"+auth.currentUser.uid + "/" + newPostKey + "/title").set(map.title);
	rootRef.child("memo/"+auth.currentUser.uid + "/" + newPostKey + "/gbn").set(map.gbn);  		
	rootRef.child("memo_txt/"+auth.currentUser.uid + "/" + newPostKey).set(map);  		

	$("#edNewTitle").val("");
	$("#edNewMemo").val("");
	
	memoDataLoad();
}

/**
 * 신규 메모 저장에서 구분자 저장
 * @param gbn
 */
function saveMemosGbn(gbn) {
	if(gbn != '') {
		var rootRef = firebase.database().ref();
	
		var gbns = gbn.split(' ');
		for(var i in gbns) {
			if(gbns[i] != "") {
				rootRef.child('memos_gbn').child(""+auth.currentUser.uid + "/" + gbns[i]).set(i+"");
			}
		}
	}
}

/**
 * 조회된 내용에서 메모내용 읽기
 * @param index
 */
function searchShowDetail(index) {
	$("#treeBodyDiv").html("");
	
	for(var tmp in defaultData) {
		var data = defaultData[tmp];
		if(index != data.key) continue;
		
  		//console.log("showDetail.data=" + tmp + ", " + data.memo);


		//console.log('treeShowDetail.data.val=' + data.val());
		//console.log('treeShowDetail.data=' + data);
		var title = "";
		var gbn = "";
		var memo = "";
		
		if(data != null) {
  			title = "<div class=\"col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12\"><font color='red'>" + data.text + "</font>&nbsp;&nbsp;";
  			gbn = "<font color='gray'>" + data.gbn + "</font></div>";
  			if(data != null) {
  				memo = "<div class='col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12' style='word-break:break-all;'>";
  				memo += data.memo + "</div>";
  			}
		}
  	    	
  		$("#treeBodyDiv").append(memo);

  		$("#btnBodyDiv").html(title+gbn);
  		
  		//console.log('treeShowDetail.up=' + up);
  		var tmp =  
  	    "<div>"
    	+ "<button align=\"right\" type='button' class='btn btn-outline-info btn-block' onclick='searchEditData(\""+index+"\");return false;'>edit</button>"
    	+ "</div>"
  	    + "<div>"
    	+ "<button align=\"right\" type='button' class='btn btn-outline-danger btn-block' onclick='delData(\""+index+"\");return false;'>delete</button>"
    	+ "</div>"
    	;
  		
  		$("#btnBodyDiv").append(tmp);
  		  		
  		return;
	}
}

/**
 * 새메모모드로 변경
 */
function newMemoBtn() {
	console.log('newMemoBtn');

	var tmp = "<div>" 
	+ "<button align=\"right\" type='button' class='btn btn-outline-primary btn-block' onclick='saveNewData();return false;'>post</button>"
	+ "</div>"
	;
	$("#btnBodyDiv").html(tmp);
	
	tmp = "<div class='col-md-12 col-lg-12 col-xl-12 col-sm-12'>"
	+ "<input id='edNewTitle' class='form-control form-control-md' type='text' placeholder=\"타이틀\"/>&nbsp;&nbsp;"
	+ "<input id='edNewCategory' class='form-control form-control-md' type='text' placeholder=\"category\"/>"
	+ "<textarea id='edNewMemo'></textarea>"
	+ "</div>"
	;
	$("#treeBodyDiv").html(tmp);
	
	CKEDITOR.replace('edNewMemo');

	return false;
}

/**
 * 수정모드로 변경
 * @param index
 * @returns {Boolean}
 */
function editMode(index) {
	console.log('editMode.index=' + index);
	jsonIndex = index;

	var defaultDataNode = findDefaultData(index, defaultData);
	var fullIndex = defaultDataNode.up;
	console.log('findDefaultData=' + defaultDataNode.key + ", " + defaultDataNode.up + " " + defaultDataNode.bookmark);
	
	memoJson = defaultDataNode;
	var title = defaultDataNode.text;
	var memo = defaultDataNode.memo;
	var gbn = defaultDataNode.gbn;
	if(gbn == undefined) {
		gbn = "";
	}
	var up = defaultDataNode.up;
	if(up == undefined) {
		up = "";
	}
	var tmp = "<div>" 
	+ "<button align=\"right\" type='button' class='btn btn-outline-primary btn-block' onclick='saveData(\""+index+"\");return false;'>post</button>"
	+ "</div>"
	+ "<div>"
	+ "<button align=\"right\" type='button' class='btn btn-outline-danger btn-block' onclick='showDetail(\""+index+"\");return false;'>cancel</button>"
	+ "</div>"
	;
	$("#btnBodyDiv").html(tmp);
	
	tmp = "<div class='col-md-12 col-lg-12 col-xl-12 col-sm-12'>"
	+ "<input id='edTitle' class='form-control form-control-md' type='text' />&nbsp;&nbsp;"
	+ "<input id='edGbn' class='form-control form-control-md' type='text' placeholder=\"category\"/>"
	+ "<div id='imgDiv'>" //style='display:none; max-height: 100px;'
	+ "<button id='attach_name' class='btn btn-outline-success' onclick='javascript:onFileOpen(\""+index+"\"); return false;'>이미지 파일 첨부</button>"
	+ "</div>"
	+ "<textarea id='edMemo'></textarea>"
	+ "</div>"
	;
	$("#treeBodyDiv").html(tmp);
	
	$("#edTitle").val(title);
	$("#edGbn").val(gbn);
    	
	//$("#edMemo").append(memo);
	$("#edMemo").val(memo);
	CKEDITOR.replace('edMemo');
	//CKEDITOR.replace('edMemo',{skin:'office2003'}); //kama, office2003,v2, moono, moono-lisa

	$("#edTitle").focus();
	
	var image = defaultDataNode.image;
	if(image != null) {
		for(var obj in image) {
	    	console.log('editMode.image=' + obj + ', ' + image[obj].use + ', ' + image[obj].ext);
			if(image[obj].use == 'Y') {
				var tmpImgTag = //"<span>" +
				"&nbsp;<img id='"+obj+"' src='' class='img-responsive' style='max-width: 80px;' />"
				+ "<a id='"+obj+"_del' href='#' onClick='imageRemove(\""+index+"\",\""+obj+"\",\""+image[obj].ext+"\"); return false;' style='cursor:pointer;'>"
				+ "<img src='/img/btn_close_pop.png' alt='' width='15px' height='15px' />"
				+ "</a>"  	  					
				//+ "</span>"
				;
				//imageRemove(index, obj, image[obj].ext);
  	  	  		$("#imgDiv").append(tmpImgTag);
  	  	  		viewImage(index, obj, image[obj].ext);
			}
		}
	}
		
	return false;
}

//서브 내용 추가 모드로 변경
function treeSubAppendData(index) {
	
	var defaultDataNode = findDefaultData(index, defaultData);
	var fullIndex = defaultDataNode.up;
	
	console.log('treeSubAppendData=' , index + ", fullIndex=" + fullIndex);
	jsonIndex = index;
		
	var tmp = "<div>" 
	+ "<button align=\"right\" type='button' class='btn btn-outline-primary btn-block' onclick='treeSubSaveData(\""+index+"\",\""+fullIndex+"\");return false;'>post</button>"
	+ "</div>"
	
	+ "<div>"
	+ "<button align=\"right\" type='button' class='btn btn-outline-danger btn-block' onclick='showDetail(\""+index+"\");return false;'>cancel</button>"
	+ "</div>";
	$("#btnBodyDiv").html(tmp);
	
	tmp = "<div class='col-md-12 col-lg-12 col-xl-12 col-sm-12' col-xs-12>"
	+ "<input id='edTitle' class='form-control form-control-md' type='text' placeholder=\"title\" />&nbsp;&nbsp;"
	//+ "<p class='font-weight-light mb-0'>"
	+ "<input id='edGbn' class='form-control form-control-md' type='text' placeholder=\"category\"/>"
	//+ "</p>"
	+ "<textarea id='edMemo'></textarea>"
	+ "</div>"
	;
	$("#treeBodyDiv").html(tmp);
	CKEDITOR.replace('edMemo');
		
	$("#edTitle").focus();
	
	return false;
}

/**
 * step 2.삭제할 노드를 찾는다.
 */
function delFindDefaultData(index, parentKey, upIndex, data) {
	for(var tmp in data) {
		var node = data[tmp];
		//console.log('delFindDefaultData.index=' + index + ", u="+ upIndex + ', tmp=' + tmp + ", " + node.key + ", " + node.text);// + ", " + node.nodes);
		if(index == node.key) {
			node.fkey = upIndex + "/sub/" + node.key;
			node.parentKey = parentKey;
			return node;
		}
		if(node.nodes != null) {
			var tmpUp = "";
			if(upIndex == "") {
				tmpUp = "/" + node.key;	
			} else {
				tmpUp = upIndex + "/sub/" + node.key;
			}
			
			var tmpNode = delFindDefaultData(index, node.key, tmpUp, node.nodes);
			if(tmpNode != null) {
				//console.log('delFindDefaultData.tmpNode=' + tmpNode.key + ", " + tmpNode.text + ", upIndex="+upIndex);
				return tmpNode;
			}
		}
	}
}

/**
 * step 1.삭제 버튼 클릭
 */
function delData(index) {
	
	if(confirm('하위 자료가 있는경우 같이 삭제됩니다.\n삭제하시겠습니까?')) {
		//delDataProcess(index, '', '');
		//console.log("testData.index=" + index);
		//console.log("testData.defaultData=" + defaultData);
		
		//삭제할 노드를 찾는다.
		var node = delFindDefaultData(index, "", "", defaultData);
		
		console.log("testData.key=" + node.text + " ," + node.key);
		console.log("testData.fkey=" + node.text + " ," + node.fkey);
		console.log("testData.parentKey=" + node.text + " ," + node.parentKey);
		
		if(node.nodes != null) {
			delNode(node.nodes);
		}
		
		var moveParent = node.parentKey;
		
		var rootRef = firebase.database().ref();
		rootRef.child('memo/'+auth.currentUser.uid + "/"+node.key).remove();
		rootRef.child('memo/'+auth.currentUser.uid + node.fkey).remove();
		
	    jsonIndex = "";
		
		//트리에 메모 내용 전체 읽기
		memoDataLoad();
		if(moveParent != null && moveParent != "") {
			selectNodeByKey(moveParent);	
		}
	}

}

/**
 * step 3.memo_txt : 메모 내용 삭제
 * 
 * @param index
 * @param node
 */
function delNode(data) {
	var rootRef = firebase.database().ref();

	for(var tmp in data) {
		var node = data[tmp];
		console.log('delNode.tmp=' + tmp + ", " + node.key + ", " + node.text);// + ", " + node.nodes);
		rootRef.child('memo_txt/'+auth.currentUser.uid + '/' + node.key).remove();
		
		if(node.nodes != null) {
			delNode(node.nodes);
		}
	}
}

/**
저장 버튼 클릭
call : editMode
*/
function saveData(index) {
	var memo = new Object();
	memo.title = $("#edTitle").val();
	memo.gbn = $("#edGbn").val();
	//memo.memo = $("#edMemo").val();
	memo.memo = CKEDITOR.instances.edMemo.getData();
	//alert('saveData=' + memo.memo);

	var defaultDataNode = findDefaultData(index, defaultData);
	var fullIndex = defaultDataNode.up;
	console.log('saveData=' + defaultDataNode.key + ", " + defaultDataNode.up_key + ", " + defaultDataNode.up + ", " + memo.title);
	
	var rootRef = firebase.database().ref();
	rootRef.child('memo_txt/'+auth.currentUser.uid+'/'+index+'/title').set(memo.title);
	rootRef.child('memo_txt/'+auth.currentUser.uid+'/'+index+'/gbn').set(memo.gbn);
	rootRef.child('memo_txt/'+auth.currentUser.uid+'/'+index+'/memo').set(memo.memo);
	rootRef.child('memo_txt/'+auth.currentUser.uid+'/'+index+'/up').set(defaultDataNode.up_key);

	rootRef.child('memo/'+auth.currentUser.uid+'/'+fullIndex +'/title').set(memo.title);
	rootRef.child('memo/'+auth.currentUser.uid+'/'+fullIndex +'/gbn').set(memo.gbn);
	rootRef.child('memo/'+auth.currentUser.uid+'/'+fullIndex +'/up').set(index);

    jsonIndex = "";
	memoDataLoad();
	selectNodeByKey(index);
}

//서브 내용 저장 처리
function treeSubSaveData(index, fullIndex) {
	var memo = new Object();
	memo.title = $("#edTitle").val();
	memo.gbn = $("#edGbn").val();
	//memo.memo = $("#edMemo").val();
	memo.memo = CKEDITOR.instances.edMemo.getData();

	var rootRef = firebase.database().ref();
	var newKey = rootRef.child("memo_txt/"+auth.currentUser.uid).push().key;
	console.log('treeSubSaveData.index=' + index + ", newKey=" + newKey);

	memo.up = index;

	rootRef.child('memo_txt/'+auth.currentUser.uid+'/'+newKey+'/up').set(index);
	rootRef.child('memo_txt/'+auth.currentUser.uid+'/'+newKey+'/title').set(memo.title);
	rootRef.child('memo_txt/'+auth.currentUser.uid+'/'+newKey+'/gbn').set(memo.gbn);
	rootRef.child('memo_txt/'+auth.currentUser.uid+'/'+newKey+'/memo').set(memo.memo);

	rootRef.child('memo/'+auth.currentUser.uid+'/'+fullIndex + '/sub/' + newKey+'/title').set(memo.title);
	rootRef.child('memo/'+auth.currentUser.uid+'/'+fullIndex + '/sub/' + newKey+'/gbn').set(memo.gbn);
	rootRef.child('memo/'+auth.currentUser.uid+'/'+fullIndex + '/sub/' + newKey+'/up').set(index);
	
    jsonIndex = "";
    
    //트리에 메모 내용 전체 읽기
	memoDataLoad();

	selectNodeByKey(newKey);
}
