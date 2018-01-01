function prepareUploadSubForm(){
    for (i = 0; i < list_subkey.length; i++) { 
      var mykey = list_subkey[i];
      var label = document.createElement("label");
      label.setAttribute('for', mykey);
      label.innerHTML = mykey + ":";
      var input = document.createElement("input");
      input.setAttribute('type', 'text');
      input.setAttribute('id', mykey);
      var br = document.createElement("br");
      
      var parent = document.getElementById("SubmitterInfoPlaceholder");
      parent.appendChild(label);
      parent.appendChild(input);
      parent.appendChild(br);
    }
    var thisformbutton = document.getElementById("btn_prepareUploadSubForm");
    thisformbutton.style.visibility = "hidden";
  }

  function prepareUploadCardForm(){
    for (i = 0; i < list_cardkey.length; i++) { 
      var mykey = list_cardkey[i];
      var label = document.createElement("label");
      label.setAttribute('for', mykey);
      label.innerHTML = mykey + ":";
      var input = document.createElement("input");
      input.setAttribute('type', 'text');
      input.setAttribute('id', mykey);
      var br = document.createElement("br");
      
      var parent = document.getElementById("CardInfoPlaceholder");
      parent.appendChild(label);
      parent.appendChild(input);
      parent.appendChild(br);
    }
    var thisformbutton = document.getElementById("btn_prepareUploadCardForm");
    thisformbutton.style.visibility = "hidden";
  }