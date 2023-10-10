window.onload = pageLoad;
function pageLoad(){
	var click = document.getElementById("myForm");
    click.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var x = document.forms["myForm"]["password"].value;
    var y = document.forms["myForm"]["repassword"].value;
    if(x != y){
        alert("error");
        var z = document.getElementById("errormsg");
        z.innerHTML ="password dont match"
        return false;
        
    }
    else{
        alert("success");
    }
    
}