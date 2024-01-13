//트리뷰 초기화
var initSelectableTree = function() {
	console.log("initSelectableTree");
	return $('#treeview1').treeview({
		showTags: true, //건수
      	//expandIcon: "glyphicon glyphicon-stop",
      	//collapseIcon: "glyphicon glyphicon-unchecked",
    	levels: 1,
    	data: defaultData,
    	multiSelect: $('#chk-select-multi').is(':checked'),
    	onNodeSelected: function(event, node) {
    		//console.log("Selected.node=" + node.key + ", " + node.text + ", " , node.up);
    		showDetail(node.cd1, node.cd2, node.cd3);
      		//$("#bookmarkDiv").hide();
    		//$('#selectable-output').prepend('<p>' + node.text + ' was selected</p>');
    		
    		var tmpNode = $('#treeview1').treeview('keyNode', [ node.key ]);
    		$('#treeview1').treeview('expandNode', [ tmpNode, { silent: true }]);
      	},
      	onNodeUnselected: function (event, node) {
      		//console.log("Unselected.node=" + node.text + node.key);
      		$("#btnBodyDiv").html("");
      		$("#treeBodyDiv").html("");
      		//$("#bookmarkDiv").show();
      		//$('#selectable-output').prepend('<p>' + node.text + ' was unselected</p>');
/*
    		var tmpNode = $('#treeview1').treeview('keyNode', [ node.key ]);
    		$('#treeview1').treeview('collapseNode', [ tmpNode, { silent: true }]);
*/
      	}
    });
};