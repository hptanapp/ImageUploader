function prepareUploadSubForm(){
  console.log("prepareUploadSubForm ...");

  frmUploadForm.style.visibility = "visible";
  frmUploadForm.style.height = "auto";
  frmSearchForm.style.height = 0;
  frmSearchForm.style.visibility = "hidden";
  btnUploadformbutton.disabled = true;
  btnSearchformbutton.disabled = false;

  var childcount = divSubmitterInfoPlaceholder.childElementCount;
  for (a=0; a<childcount; a++){
    divSubmitterInfoPlaceholder.removeChild(divSubmitterInfoPlaceholder.firstChild);
  }

  for (i = 0; i < list_subkey.length; i++) { 
    var mykey = list_subkey[i];
    var label = document.createElement("label");
    label.setAttribute('for', mykey);
    label.innerHTML = mykey + ":";
    var input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('id', mykey);
    var br = document.createElement("br");
    
    divSubmitterInfoPlaceholder.appendChild(label);
    divSubmitterInfoPlaceholder.appendChild(input);
    divSubmitterInfoPlaceholder.appendChild(br);
  }
}

function prepareUploadCardForm(){
  console.log("prepareUploadCardForm ...");

  var childcount = divCardInfoPlaceholder.childElementCount;
  for (a=0; a<childcount; a++){
    divCardInfoPlaceholder.removeChild(divCardInfoPlaceholder.firstChild);
  }

  for (i = 0; i < list_cardkey.length; i++) { 
    var mykey = list_cardkey[i];
    var label = document.createElement("label");
    label.setAttribute('for', mykey);
    label.innerHTML = mykey + ":";
    var input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('id', mykey);
    var br = document.createElement("br");
    
    divCardInfoPlaceholder.appendChild(label);
    divCardInfoPlaceholder.appendChild(input);
    divCardInfoPlaceholder.appendChild(br);
  }
}

function prepareSearchForm(){
  console.log("prepareSearchForm ...");


  frmUploadForm.style.visibility = "hidden";
  frmUploadForm.style.height = 0;
  frmSearchForm.style.height = "auto";
  frmSearchForm.style.visibility = "visible";
  btnUploadformbutton.disabled = false;
  btnSearchformbutton.disabled = true;
}

// UTC time
function ISODateString(d) {
  function pad(n) {return n<10 ? '0'+n : n}
  return d.getUTCFullYear()+'-'
       + pad(d.getUTCMonth()+1)+'-'
       + pad(d.getUTCDate())+'T'
       + pad(d.getUTCHours())+':'
       + pad(d.getUTCMinutes())+':'
       + pad(d.getUTCSeconds())+'Z'
}

//Get Form info
function writeUserData() {
  console.log("writeUserData ...");

  // validate inputs
  if (!chkbxTermsNCond.checked){
    alert(TermsNConditionWarning_Eng);
    return null;
  }

  // Submitter_Name
  var intextbox = document.getElementById("Submitter_Name");
  if (intextbox.value != ""){
    Submitter_Name = intextbox.value;
  } else {
    Submitter_Name = "guest";
  }

  // Submitter_Email
  var intextbox = document.getElementById("Submitter_Email");
  if (intextbox.value != ""){
    Submitter_Email = intextbox.value;
  } else {
    Submitter_Email = "-";
  }

  // Submitter_Date
  var d = new Date();
  Submitter_Date = ISODateString(d);

  // Submitter_Email
  var intextbox = document.getElementById("Submitter_Type");
  if (intextbox.value != ""){
    Submitter_Type = intextbox.value;
  } else {
    Submitter_Type = "public";
  }

  // Name
  var intextbox = document.getElementById("Name");
  if (intextbox.value != ""){
    Name = intextbox.value;
  } else {
    Name = "-";
  }

  // CompanyName
  var intextbox = document.getElementById("CompanyName");
  if (intextbox.value != ""){
    CompanyName = intextbox.value;
  } else {
    CompanyName = "-";
  }

  // ServiceField
  var intextbox = document.getElementById("ServiceField");
  if (intextbox.value != ""){
    ServiceField = intextbox.value;
  } else {
    ServiceField = "-";
  }

  // Position
  var intextbox = document.getElementById("Position");
  if (intextbox.value != ""){
    Position = intextbox.value;
  } else {
    Position = "-";
  }

  // Contact
  var intextbox = document.getElementById("Contact");
  if (intextbox.value != ""){
    Contact = intextbox.value;
  } else {
    Contact = "-";
  }

  // Address
  var intextbox = document.getElementById("Address");
  if (intextbox.value != ""){
    Address = intextbox.value;
  } else {
    Address = "-";
  }

  // WorkingHour
  var intextbox = document.getElementById("WorkingHour");
  if (intextbox.value != ""){
    WorkingHour = intextbox.value;
  } else {
    WorkingHour = "-";
  }

  // CoverageArea
  var intextbox = document.getElementById("CoverageArea");
  if (intextbox.value != ""){
    CoverageArea = intextbox.value;
  } else {
    CoverageArea = "-";
  }

  // AdditionalTags
  var intextbox = document.getElementById("AdditionalTags");
  if (intextbox.value != ""){
    AdditionalTags = intextbox.value;
  } else {
    AdditionalTags = "-";
  }

  Upload();
  // console.log(Submitter_Name);
  // console.log( Submitter_Email);
  // console.log( Submitter_Date);
  // console.log( Submitter_Type);

  // console.log( Name);
  // console.log( CompanyName);
  // console.log( ServiceField);
  // console.log( Position);
  // console.log( Contact);
  // console.log( Address);
  // console.log( WorkingHour);
  // console.log( CoverageArea);
  // console.log( AdditionalTags);

}