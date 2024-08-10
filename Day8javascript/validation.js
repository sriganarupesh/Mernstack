function formValidation()
{
var userid = document.registration.userid;
var passid = document.registration.passid;
var pin = document.registration.pin;
var age=document.registration.age
var panid=document.registration.panid;
var phone=document.registration.phone;
if(userid_validation(userid,5,12))
{
if(passid_validation(passid,7,12))
{
if(allnumeric(pin))
{
if()

}
}
}
return false;
}

function userid_validation(userid,mx,my)
{
var userid_len = userid.value.length;
if (userid_len == 0 || uid_len >= my || userid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
userid.focus();
return false;
}
return true;
}


function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}


function allnumeric(pin)
{
var numbers = /^[0-9]{6}$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
}
function allnumeric(age)
{
var numbers=age.vale.length;
if(allnumaric(age))
{

}
}

function panid_validation(panid,mx,my)
{
var panid =(!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
if(panid.value.match(pan))
{
alert("Panid should not be empty / length be between "+mx+" to "+my);
panid.focus();
return false;
}
return true;
}

function allnumeric(phone)
{
var number = /^[8-9][0-9]{9}$/;;
if(uph.value.match(numbers))
{
return true;
}
else
{
alert('Phone no must have numeric characters only');
phone.focus();
return false;
}
window.location.reload()
}
