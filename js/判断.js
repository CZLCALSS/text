				function validate() {
					var pw1 = document.getElementById("pw1").value;
					var pw2 = document.getElementById("pw2").value;
					if(pw1 == pw2) {
						document.getElementById("tishi").innerHTML="<font color='green'>✔</font>";
						document.getElementById("submit").disabled = false;
					}else if(pw2 == ""){
						document.getElementById("tishi").innerHTML="<font color='red'>请再次输入密码</font>";
						document.getElementById("submit").disabled = true;
					}
					else {
						document.getElementById("tishi").innerHTML="<font color='red'>两次密码不相同</font>";
						document.getElementById("submit").disabled = true;
					}
				}