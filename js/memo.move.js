//이동 처리할 변수
var moveToNode = {};

/**
 * 이동모드로 변경
 * @param index
 */
function moveDataMode(index) {
	
	var node = findDefaultData(index, defaultData);
	var fullIndex = node.up;
	console.log('moveDataMode.node=' + node.key + ", " + node.text + ", " + node.up);
	//console.log('moveDataMode.a=' + node.up);
	//console.log('moveDataMode.b=' + fullIndex);
	
	jsonIndex = index;
		
	$("#treeBodyDiv").html("");

		//console.log('moveDataMode.up=' + up);
	var tmp =  
	  "<div>"
	+ "<button align=\"right\" type='button' class='btn btn-outline-primary btn-block' onclick='moveData(\""+index+"\",\""+fullIndex+"\");return false;'>post</button>"
	+ "</div>"
	+ "<div>"
	+ "<button align=\"right\" type='button' class='btn btn-outline-success btn-block' onclick='moveTopData(\""+index+"\",\""+fullIndex+"\");return false;'>move top</button>"
	+ "</div>";
	$("#btnBodyDiv").html(tmp);
	
	tmp ="<div class='col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12'>";

	//console.log('treeShowDetail.data.val=' + node);
	//console.log('treeShowDetail.data=' + data);
	var title = "";
	var gbn = "";
	var memo = "";
	
	if(node != null) {
		title = "<font color='red'>" + node.text + "</font><br><br><div id='moveTreeView' />";
	}
	    	
	$("#treeBodyDiv").append(tmp + title + gbn + "</div>");
	  		
	var initMoveTree = function() {
    	return $('#moveTreeView').treeview({
    		showTags: true, //건수
          	//expandIcon: "glyphicon glyphicon-stop",
          	//collapseIcon: "glyphicon glyphicon-unchecked",
        	levels: 1,
        	data: defaultData,
        	multiSelect: $('#chk-select-multi').is(':checked'),
        	onNodeSelected: function(event, node) {
        		moveToNode = node;
        		console.log("move.Selected.up=" + moveToNode);
        		//showDetail(node.key);
        		//$('#selectable-output').prepend('<p>' + node.text + ' was selected</p>');
          	},
          	onNodeUnselected: function (event, node) {
          		console.log("move.Unselected.node=" + node.text + node.key);
          		moveToNode = {};
          		//$("#treeBodyDiv").html("");
          		//$('#selectable-output').prepend('<p>' + node.text + ' was unselected</p>');
          	}
        });
    };
    var $disabledTree = initMoveTree();
/*
    var findDisabledNodes = function() {
        return $disabledTree.treeview('search', [ node.text, { ignoreCase: false, exactMatch: false } ]);
      
    };
*/        
    var tmpNode = $disabledTree.treeview('keyNode', [index]);
	console.log("moveDataMode.tmpNode=" + tmpNode);
    $disabledTree.treeview('revealNode', [ tmpNode, { silent: false , selected: true}]);        
    $disabledTree.treeview('disableNode', [ tmpNode, { silent: false }]);
	
    //$disabledTree.treeview('disableNode', [ disabledNodes, { silent: true }]);
	  	
}

/**
 * 이동모드에서 이동 처리
 * @param index
 * @param fullIndex
 */
function moveData(index, fullIndex) {
	if(moveToNode.key != null) {
		console.log('moveData.moveToNode=' + moveToNode.key + ", up" + moveToNode.up);
	console.log('moveData.node=' + index + ", " + fullIndex);
	
	var rootRef = firebase.database().ref();
	rootRef.child('memo_txt/'+auth.currentUser.uid+'/'+index+'/up').set(moveToNode.up);
	
	var memoQuery = rootRef.child("memo/"+auth.currentUser.uid+"/" + fullIndex);
	memoQuery.once('value', function(data){
  		//console.log("moveDataProcess.index=" + index + ", up=" + up + ", fullUp=" + fullUp);
  		
	  	var tmp = data.val();
  		
  		rootRef.child('memo/'+auth.currentUser.uid+'/'+moveToNode.up+'/sub/' + index).set(tmp);
  		rootRef.child('memo/'+auth.currentUser.uid+'/'+fullIndex).set(null);
	  	
  		memoDataLoad();
  		selectNodeByKey(index);
	});  
	
	} else {
		alert('이동할 위치를 선택해야 합니다.');
	}
}

/**
 * 이동모드에서 최상위로 이동 처리
 * @param index
 * @param fullIndex
 */
function moveTopData(index, fullIndex) {
console.log('moveTopData.moveToNode=' + moveToNode.key + ", up" + moveToNode.up);
console.log('moveTopData.node=' + index + ", " + fullIndex);

var rootRef = firebase.database().ref();
	rootRef.child('memo_txt/'+auth.currentUser.uid+'/'+index+'/up').set("");

var memoQuery = rootRef.child("memo/"+auth.currentUser.uid+"/" + fullIndex);
	memoQuery.once('value', function(data){
  		//console.log("moveTopDataProcess.index=" + index + ", up=" + up + ", fullUp=" + fullUp);
  		
	  	var tmp = data.val();
  		
  		rootRef.child('memo/'+auth.currentUser.uid+'/'+ index).set(tmp);
  		rootRef.child('memo/'+auth.currentUser.uid+'/'+fullIndex).set(null);
	  	
  		memoDataLoad();
  		selectNodeByKey(index);
	});  
}

/**
 * 이동모드에서 이동 버튼 클릭 처리
 * @param index
 * @param up
 * @param fullUp
 */
function moveDataProcess(index, up, fullUp) {
	var rootRef = firebase.database().ref();
		
	if(up == "") {
		up = index;
	}
		
	var rootRef = firebase.database().ref();
	var memoQuery = rootRef.child("memo_txt/"+auth.currentUser.uid+"/" + up);
	memoQuery.once('value', function(data){
  		console.log("moveDataProcess.index=" + index + ", up=" + up + ", fullUp=" + fullUp);
	  		
	  	var tmp = data.val();
  		var tmpUp = tmp.up;

  		console.log("moveDataProcess.tmpUp=[" + tmpUp + "]");
  		
  		if(tmpUp != null && tmpUp != "") {
  	  		fullUp = tmpUp + "/sub/" + fullUp;
  	  		moveDataProcess(index, tmpUp, fullUp);
  		} else {

  		var path = 'memo/'+auth.currentUser.uid+'/';
		if(fullUp != '') {
			path += fullUp;
		}
  		console.log('moveDataProcess.up=' + up);
  		console.log('moveDataProcess.path=' + path);
  		
  		//rootRef.child(path + index).remove();
  		//rootRef.child('memo_txt/'+auth.currentUser.uid+'/'+index).remove()
  	
  	    jsonIndex = "";
  		//memoDataLoad();
  		return path + index;
  		}
	  	
	});  		
}
