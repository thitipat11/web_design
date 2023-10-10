window.onload = loginLoad;
function loginLoad(){
	var click = document.getElementById("myLogin");
    click.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString = window.location.search;
	
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username');
	const password = urlParams.get('password');

	let reusername = document.forms["myLogin"]["typeusername"].value;
	let repassword = document.forms["myLogin"]["typepassword"].value;

	if(username == reusername && password == repassword){
		alert("welcome");

	}
	else{
		alert("fail login");
		return false;
	}
}

			