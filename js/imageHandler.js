// For image handling & functions

function UploadFrontFile() {
  input = document.getElementById('Front_Pic');
  thisFile = input.files[0];
  if (thisFile != null){
    thisFileName = uniqueIdToImageFront;

    var file = thisFile // use the Blob or File API

    // Create a root reference
    var storageRef = firebase.storage().ref();
    
    // Upload the file and metadata
    //var uploadTask = storageRef.child('download.jpg').put(file, metadata);
    var uploadTask = storageRef.child(thisFileName).put(file);
    
    // ref.put(file).then(function(snapshot) {
    //   console.log('Uploaded a blob or file!');
    // });

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', function(snapshot){
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, function(error) {
      // Handle unsuccessful uploads
      alert("Upload Error");
    }, function() {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      var downloadURL = uploadTask.snapshot.downloadURL;
      alert ("Front Card - Upload is completed");
      UploadBackFile();
    });
  }
}

function UploadBackFile() {
  input = document.getElementById('Back_Pic');
  thisFile = input.files[0];
  if (thisFile != null){
    thisFileName = uniqueIdToImageBack;

    var file = thisFile // use the Blob or File API

    // Create a root reference
    var storageRef = firebase.storage().ref();
    
    // Upload the file and metadata
    //var uploadTask = storageRef.child('download.jpg').put(file, metadata);
    var uploadTask = storageRef.child(thisFileName).put(file);
    
    // ref.put(file).then(function(snapshot) {
    //   console.log('Uploaded a blob or file!');
    // });

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', function(snapshot){
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, function(error) {
      // Handle unsuccessful uploads
      alert("Upload Error");
    }, function() {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      var downloadURL = uploadTask.snapshot.downloadURL;
      alert ("Back Card - Upload is completed");
    });
  }
}


function showimage() {
   var storageRef = firebase.storage().ref();
   var Filter = document.getElementById ("filter");
   var filterString = Filter.value;
   storageRef.child(filterString).getDownloadURL().then(function(url) {
       var test = url;
       document.querySelector('img').src = test;
       var loading = document.getElementById ("showimage");
       loading.style.visibility = "visible";
   }).catch(function(error) {
   });
 }