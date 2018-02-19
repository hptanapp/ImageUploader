function CheckUserStatus(){
	user = firebase.auth().currentUser;

	if (user) {
	  // User is signed in.
	  btnLogin.innerHTML = "Sign Out";
	  userLogon = false;
	} else {
	  // No user is signed in.
	  btnLogin.innerHTML = "Sign in With Google";
	  userLogon = true;
	}
}

function GoogleSignInOut() {
	user = firebase.auth().currentUser;
	if (user) {
	  // User is signed in.
	  GoogleSignOut();
	} else {
	  // No user is signed in.
	  GoogleSignIn();
	}
}

function GoogleSignIn(){
	var provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().signInWithPopup(provider).then(function(result) {
	  // This gives you a Google Access Token. You can use it to access the Google API.
	  var token = result.credential.accessToken;
	  // The signed-in user info.
	  var user = result.user;
	  // ...
	  CheckUserStatus();
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
}

function GoogleSignOut() {
	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	  CheckUserStatus();
	}).catch(function(error) {
	  // An error happened.
	  alert("Sign Out Failed. Please try again.");
	});
}