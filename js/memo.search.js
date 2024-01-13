/**
 * 조회상태에서 수정모드로 변경
 */
function searchEditData(index) {
	console.log('searchEditData.index=' + index);
	jsonIndex = index;
	
	var rootRef = firebase.database().ref();
	var memoQuery = rootRef.child("memo_txt/"+auth.currentUser.uid+"/" + index);
	memoQuery.once('value', function(data){ //once value, child_removed, child_changed, child_moved
		memoJson = data.val();
		var title = memoJson.title;
		var memo = memoJson.memo;
 		var gbn = memoJson.gbn;
 		if(gbn == undefined) {
 			gbn = "";
 		}
 		var up = memoJson.up;
 		if(up == undefined) {
 			up = "";
 		}
 		var tmp = "<div>" 
    	+ "<button align=\"right\" type='button' class='btn btn-outline-primary btn-block' onclick='searchSaveData(\""+index+"\");return false;'>post</button>"
    	+ "</div>"
    	
    	+ "<div>"
    	+ "<button align=\"right\" type='button' class='btn btn-outline-danger btn-block' onclick='searchShowDetail(\""+index+"\");return false;'>cancel</button>"
    	+ "</div>";
    	$("#btnBodyDiv").html(tmp);
    	
    	tmp = "<div class='col-md-12 col-lg-12 col-xl-12 col-sm-12'>"
    	+ "<textarea id='edMemo'></textarea>"
    	+ "</div>"
    	;
    	$("#treeBodyDiv").html(tmp);
    	
    	$("#edMemo").html(memo);
    	CKEDITOR.replace('edMemo'); //kama, office2003,v2
	});
	
	return false;
}

/**
 * 조회모드 상태에서 저장처리
 */
function searchSaveData(index) {
	var memo = CKEDITOR.instances.edMemo.getData(); //$("#edMemo").val();

	var rootRef = firebase.database().ref();
	rootRef.child('memo_txt/'+auth.currentUser.uid+'/'+index+'/memo').set(memo);

    jsonIndex = "";
	
	var node = findDefaultData(index, defaultData);
	node.memo = memo;
 		
	selectNodeByKey(index);
}
