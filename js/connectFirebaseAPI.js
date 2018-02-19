// Initialize Firebase & Connect FireBase API
//hptanappads

var config = {
  apiKey: "AIzaSyBvEgDexqUNE0nO_ZE9zJhcb3zSDrm_8Nw",
  authDomain: "imageuploader-3b27c.firebaseapp.com",
  databaseURL: "https://imageuploader-3b27c.firebaseio.com",
  projectId: "imageuploader-3b27c",
  storageBucket: "imageuploader-3b27c.appspot.com",
  messagingSenderId: "285832792911"
};
firebase.initializeApp(config);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Get a reference to the database service
var database = firebase.database();
