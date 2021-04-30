// Generated by CoffeeScript 1.4.0
var PostImageToFacebook, findOrCreateAlbum;

jQuery(function() {
  return $("#fb-upload").click(function() {
    return window.authorize();
  });
});

findOrCreateAlbum = function() {
  return FB.api("/me/albums", function(response) {
    var album_id, album_index, album_names, c, decodedPng, encodedPng;
    album_names = $.map(response.data, function(val, index) {
      return val.name;
    });
    if ((album_index = album_names.indexOf("UPUP")) >= 0) {
      console.log("YES ALBUM CALLED UPUP");
      album_id = response.data[album_index].id;
    } else {
      console.log("NO ALBUM CALLED UPUP, CREATING");
      FB.api("/" + fbuser + "/albums", "post", {
        name: "UPUP",
        message: "製作屬於你的加油小人 ♥ UPUP http://upuptoyou.com"
      }, function(response) {
        return album_id = response.id;
      });
    }
    c = $("img#output").attr("src");
    encodedPng = c.substring(c.indexOf(',') + 1, c.length);
    decodedPng = Base64Binary.decode(encodedPng);
    return PostImageToFacebook(album_id, decodedPng, "");
  });
};

window.authorize = function() {
  return FB.login(function(response) {
    if (response.authResponse) {
      _gaq.push(["_trackEvent", "Facebook", "authentication succeeded"]);
      window.fbuser = response.authResponse.userID;
      window.fbusertoken = response.authResponse.accessToken;
      findOrCreateAlbum();
      //$("#fb-upload").text("UPLOADING...");
      return $("#fb-view").text("");
    } else {
      alert("為了要上傳臉書，UPUP 需要兩個臉書權限。請放心，UPUP 並不會儲存任何你的個人資訊！\r\r♥ UPUP X Haniboi 關心你 ♥");
      return _gaq.push(["_trackEvent", "Facebook", "authentication failed"]);
    }
  }, {
    scope: "publish_actions, user_photos"
  });
};

if (XMLHttpRequest.prototype.sendAsBinary === undefined) {
  XMLHttpRequest.prototype.sendAsBinary = function(string) {
    var bytes;
    bytes = Array.prototype.map.call(string, function(c) {
      return c.charCodeAt(0) & 0xff;
    });
    return this.send(new Uint8Array(bytes).buffer);
  };
}

PostImageToFacebook = function(album_id, imageData, message) {
  var boundary, formData, i, xhr;
  boundary = "----ThisIsTheBoundary1234567890";
  formData = "--" + boundary + "\r\n";
  formData += "Content-Disposition: form-data; name=\"source\"; filename=\"upup.jpg\"\r\n";
  formData += "Content-Type: image/png\r\n\r\n";
  i = 0;
  while (i < imageData.length) {
    formData += String.fromCharCode(imageData[i] & 0xff);
    ++i;
  }
  formData += "\r\n";
  formData += "--" + boundary + "\r\n";
  formData += "Content-Disposition: form-data; name=\"message\"\r\n\r\n";
  formData += unescape(encodeURIComponent(message)) + "\r\n";
  formData += "--" + boundary + "--\r\n";
  xhr = new XMLHttpRequest();
  xhr.open("POST", "https://graph.facebook.com/" + album_id + "/photos?access_token=" + fbusertoken, true);
  xhr.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + boundary);
  xhr.sendAsBinary(formData);
  xhr.onload = function() {
    _gaq.push(["_trackEvent", "Upload to facebook", "Succeeded"]);
    //$("#fb-upload").text("UPLOAD FINISHED");
    return $.ajax('https://graph.facebook.com/' + JSON.parse(xhr.responseText).id + "?access_token=" + fbusertoken).done(function(call, status, response) {
      //$("#fb-upload").text("UPLOAD TO FACEBOOK");
      $("#fb-view").attr("href", JSON.parse(response.responseText).link);
      return $("#fb-view").text("SEE YOUR PHOTO");
    });
  };
  return xhr.onerror = function() {
    _gaq.push(["_trackEvent", "Upload to facebook", "Failed by user " + fbuser]);
    return alert("Upload failed!");
  };
};