// <script language="javascript">
		function check(form)
		{
			if(form.userid.value=="karthi" && form.password.value=="karthi")
			{
				alert("login success")
				window.open("photo.html")

			}
			else{
				window.alert("the username or password is incorrect")
			}
		}
	// </script>