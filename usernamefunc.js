function showUsername() {
	var username = getCookie("username");
	if (username != "") {
		document.getElementById("signup").style.display = "none";
		document.getElementById("welcomeusername").innerHTML="<a href='https://greetez.com:4343/user_api/" + username + "'>Welcome " + username + " </a><a href='./submitpost.html'>Submit</a><a href='javascript:void(0)' onclick='logout();return false;'>Logout</a>";
        
        
        document.getElementById("welcomeusername").style.display = "initial";
	} else {
		document.getElementById("signup").style.display = "initial";
		document.getElementById("welcomeusername").style.display = "none";
	}
}

 function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


 function setCookie(cname, cvalue) {
  var d = new Date();
  d.setTime(d.getTime() + (365*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + ";path=/;SameSite=strict;secure";
}

 function clearCookie(cname) {
    var d = new Date();
    d.setTime(d.getTime() - (365*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=;path=/;SameSite=strict;secure";
  }		
