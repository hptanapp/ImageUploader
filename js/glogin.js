function CheckUserStatus(){
	var user = firebase.auth().currentUser;
	var btnLogin = document.getElementById ("btn_login");

	if (user) {
	  // User is signed in.
	  btnLogin.text = "Logout"
	} else {
	  // No user is signed in.
	  btnLogin.text = "Login With Google"
	}
}

function GoogleSignIn() {
	var provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().signInWithPopup(provider).then(function(result) {
	  // This gives you a Google Access Token. You can use it to access the Google API.
	  var token = result.credential.accessToken;
	  // The signed-in user info.
	  var user = result.user;
	  // ...
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	  alert(errorMessage);
	  // ...
	});
	CheckUserStatus();
}

function GoogleSignOut() {
	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	}).catch(function(error) {
	  // An error happened.
	});
	CheckUserStatus();
}