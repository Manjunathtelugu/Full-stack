function validateForm() {
let phone = document.getElementById("phone").value;
if(phone.length != 10) {
alert("Phone must be 10 digits");
return false;
}
alert("Registration Successful!");
return true;
}