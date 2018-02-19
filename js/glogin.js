function CheckUserStatus(){
	user = firebase.auth().currentUser;
	console.log(user);

	if (user) {
	  // User is signed in.
	  btnLogin.innerHTML = "Logout";
	  if ( btnLogin.classList.contains('btn-google') ){
	  	btnLogin.classList.remove('btn-google');
	  }
	  if ( btnLogin.classList.contains('btn-si') ){
	  	btnLogin.classList.remove('btn-si');
	  }
	} else {
	  // No user is signed in.
	  btnLogin.innerHTML = "Login With Google";
	  if ( btnLogin.classList.contains('btn-google') ){
  		// nothing
	  } else {
	  	btnLogin.classList.add('btn-google');
	  }
	  if ( btnLogin.classList.contains('btn-si') ){
  		// nothing
	  } else {
	  	btnLogin.classList.add('btn-si');
	  }
	}
}

function GoogleSignInOut() {
	user = firebase.auth().currentUser;
	if (user) {
	  // User is signed in.
	  console.log("Logging Out");
	  GoogleSignOut();
	} else {
	  // No user is signed in.
	  console.log("Logging In");
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
	});
}