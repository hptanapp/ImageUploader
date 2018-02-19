function Upload(){
  console.log("Upload ...");

  if (userLogon){
    // get user.uid
    uniqueUser = user.uid;
  }
  else{
    GetUniqueGeo();
  }
}

function GetUniqueGeo(){
  console.log("GetUniqueGeo ...");

  $.getJSON('https://www.freegeoip.net/json/?callback=?', function(data) {
    console.log(JSON.stringify(data, null, 2));
    retString = JSON.stringify(data, null, 2);
    var list_geoInfo = retString.split(',');
    for (i = 0; i < list_geoInfo.length; i++) {
      if ( list_geoInfo[i].includes("latitude")){
        mylatitude = list_geoInfo[i];
        mylatitude = mylatitude.split(':')[1].trim();
      }
      if ( list_geoInfo[i].includes("longitude")){
        mylongitude = list_geoInfo[i];
        mylongitude = mylongitude.split(':')[1].trim();
      }
    }

    uniqueUser = mylatitude + "_" + mylongitude;
    uniqueUser = uniqueUser.replace(/\./g,":");

    GetUniqueFilesName();
  });
}

function GetUniqueFilesName(){
  console.log("GetUniqueFilesName ...");

  uniqueUserTime = uniqueUser + "_" + Submitter_Date;
  uniqueIdToImageFront = "FrontImg_" + uniqueUserTime;
  uniqueIdToImageBack = "BackImg_" + uniqueUserTime;

  console.log(uniqueUser);
  console.log(uniqueUserTime);
  console.log(uniqueIdToImageFront);
  console.log(uniqueIdToImageBack);
  
  return null;
  //writeToDb(); //tba comment to debug
}

function writeToDb(){
  console.log("writeToDb ...");

  firebase.database().ref('users/' + Submitter_Name + "_" + uniqueUserTime ).set({
    type: dbtype,
    Submitter_Name: Submitter_Name,
    Submitter_Email: Submitter_Email,
    Submitter_Date: Submitter_Date,
    Submitter_Type: Submitter_Type,
    Name: Name,
    CompanyName: CompanyName,
    ServiceField: ServiceField,
    Position: Position,
    Contact: Contact,
    Address: Address,
    WorkingHour: WorkingHour,
    CoverageArea: CoverageArea,
    AdditionalTags: AdditionalTags,
    IdToImageFront: uniqueIdToImageFront,
    IdToImageBack: uniqueIdToImageBack
  });
  UploadFrontFile();
}

function readFromDb(){
  console.log("readFromDb ...");

  var userId = firebase.auth().currentUser.uid;
  return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
  });
}