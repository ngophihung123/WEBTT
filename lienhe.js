
function validate(){
    let validateEmail = document.forms["search"]["email"].value;
    let validateMess = document.forms["search"]["message"].value;
    let validatePass = document.forms["search"]["password"].value;
    let l = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(validateEmail ==""|| l.test(validateEmail)==false ){
        alert("Vui lòng nhập đúng email");
        return false;
    } 
    if(validateMess == "" || validateMess.length < 30 ){
        alert("Bạn phải nhập vào Message ít hơn 30 ký tự");
        return false;
    }
    if(validatePass == "" || isNaN(validatePass) ){
        alert("Bạn phải nhập vào Rate 1 số ");
        return false;
    }
}