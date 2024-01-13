//로그인 처리
var auth = firebase.auth();
auth.onAuthStateChanged(function(user) {
	if (user) { 
//  			console.log('onAuthStateChanged.user로그인 : ',JSON.stringify(user));

//
/*
  			console.log('user.displayName=' + user.displayName);
  		    for(var objVarName in user) {
  	  			console.log('user=' + objVarName);
  		    }
  			console.log('user.toJSON=' + user.toJSON);
  			console.log('user.photoURL=' + user.photoURL);  			
*/

		$("#signIn").html("<img src='" + user.photoURL + "' height='30px' class='img-circle'>&nbsp;&nbsp;" + user.displayName);
		memoDataLoad();
		//loadEnv();
		getBookmark("bookmarkDiv");
	} else { 
		console.log('onAuthStateChanged.로그아웃', user);
	} 
	
 	window.user = user; // user is undefined if no user signed in
});

//로그인 처리
function login() {
	if(auth.currentUser == null) {
		var googleProvider = new firebase.auth.GoogleAuthProvider(); 
		auth.signInWithPopup(googleProvider).then(
			function(result) {
				console.log('로그인 성공. ' + result + auth.currentUser.uid);
				memoDataLoad();
				//loadEnv();
				getBookmark("bookmarkDiv");
			}).catch(
				function(error) { 
					alert('로그인에 실패하였습니다'); 
					console.error('구글 로그인 과정 에러',error); 
				}
		);
	} else {
		memoDataLoad();
	}
}

//로그아웃 처리
function logout() {
	console.log("logout");
	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	  console.log("logout.successful");
	  $("#signIn").attr("href", "javascript:login();");
	  $("#signIn").html("Sign In");

	  $("#bodyDiv").html("");

	  auth.currentUser = null;
	}).catch(function(error) {
	  // An error happened.
	});
}
