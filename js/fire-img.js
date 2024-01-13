//firebase을 사용할 수 있어야함.
//common.js 사용
//firebase storage을 통한 이미지 파일 처리

//이미지 표시
var viewImage = function(index, imgTag, ext) {
	var storageRef = firebase.storage().ref();
	storageRef.child("memo/"+auth.currentUser.uid+"/" + index + "/" + imgTag + "." + ext).getDownloadURL().then(function(url) {
	    console.log('getDownloadURL=' + ext + ", " + url);
		if(ext === 'pdf' 
		|| ext === 'ppt' || ext === 'pptx'
		|| ext === 'xls' || ext === 'xlsx'
		|| ext === 'doc' || ext === 'docx'
		|| ext === 'txt'
		|| ext === 'c'
		|| ext === 'zip'
		) {
		    $('#' + imgTag).attr('href', url);
		    $('#' + imgTag).show();
	    } else {
		    $('#' + imgTag).attr('src', url);
		    $('#' + imgTag).show();
	    }
	});
}

//이미지 삭제
var imageRemove = function(index, imgTag, ext) {
	var storageRef = firebase.storage().ref();
	var delRef = storageRef.child("memo/"+auth.currentUser.uid+"/" + index + "/" + imgTag + "." + ext);
	console.log('imageRemove.delRef=' + delRef);
	// Delete the file
	delRef.delete().then(function() {
		console.log('imageRemove.successfully');
		$("#"+imgTag).hide();
		$("#"+imgTag+"_del").hide();
	}).catch(function(error) {
		console.log('imageRemove.error=' + error);
	});
	
	var rootRef = firebase.database().ref();
	rootRef.child('memo_txt/'+auth.currentUser.uid+'/'+index+'/image/' + imgTag + '/use').set('N');
}

//파일 업드로 처리
var onFileUpLoad = function(fileInput, imgIndex, div) {
	if(!confirm("파일을 업로드 하시겠습니까?")) {
		return false;
	}

	var tmpImgTag = "&nbsp;<div id='progress'/>";
	$("#" + div).append(tmpImgTag);
	  		
	var newKeys = [];
	
	console.log('onFileUpLoad.file.length=' + fileInput.files.length);
  	for(var i=0; i<fileInput.files.length; i++) {
  	    var file = fileInput.files[i];

		var rootRef = firebase.database().ref();
  		var newKey = rootRef.child('memo_txt/'+auth.currentUser.uid+'/'+imgIndex+'/image').push().key;
		var ext = getExtensionOfFilename(file.name);
		rootRef.child('memo_txt/'+auth.currentUser.uid+'/'+imgIndex+'/image/' + newKey + '/use').set('Y');
		rootRef.child('memo_txt/'+auth.currentUser.uid+'/'+imgIndex+'/image/' + newKey + '/ext').set(ext);
		rootRef.child('memo_txt/'+auth.currentUser.uid+'/'+imgIndex+'/image/' + newKey + '/name').set(file.name);
		
		var newKeyMap = {};
		newKeyMap.key= newKey;
		newKeyMap.ext= ext;

		newKeys.push(newKeyMap);
		
		console.log('onFileUpLoad.file.name=' + file.name + ',ext=' + ext + ', ' + file.type + ', index=' + imgIndex + ", newKey=" + newKey);
		
  	  	var storageRef = firebase.storage().ref();
		var imgRef = storageRef.child("memo/"+auth.currentUser.uid+"/" + imgIndex +"/" + newKey + "." + ext);  	  	
		var uploadTask = imgRef.put(file);
		
		uploadTask.on('state_changed', 
			function(snapshot) {
				// Observe state change events such as progress, pause, and resume
				// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
				var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				//console.log('Upload is ' + progress + '% done');
				switch (snapshot.state) {
					case firebase.storage.TaskState.PAUSED: // or 'paused'
						console.log('Upload is paused');
						break;
					case firebase.storage.TaskState.RUNNING: // or 'running'
						$('#progress').show();
						$('#progress').html(parseInt(progress) + '%');
						//console.log('Upload is running newKey=' + newKey + ', ' + parseInt(progress) + '%');
						break;
				}
			}, function(error) {
			// Handle unsuccessful uploads
			}, function() {
				// Handle successful uploads on complete
				// For instance, get the download URL: https://firebasestorage.googleapis.com/...
				console.log('uploadTask.snapshot.ref=' , uploadTask.snapshot.ref);
				uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
					console.log('File available key=' , newKeys[0].key + ', ext=' + newKeys[0].ext);
  					var tmpImgTag = "&nbsp;<img id='"+newKeys[0].key+"' src='' class='img-responsive' style='max-width: 80px;' />";
   	  	  	  		$("#" + div).append(tmpImgTag);
   	  	  	  		$('#progress').hide();
					viewImage(imgIndex, newKeys[0].key, newKeys[0].ext);
					newKeys.splice(0,1);
				});
			}
		);
  	}
  	
    return false;    //중요! false를 리턴해야 버튼으로 인한 submit이 안된다.
}
