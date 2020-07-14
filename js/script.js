document.getElementById('_form_submit').onclick = function(e){
  var formValid = document.forms["register-form"].checkValidity();
  if (!formValid) {
    return;
  }
  e.preventDefault();
  document.getElementById("register-form").classList.add("remove");
  document.getElementById("text-box").innerHTML = "Thank you! We'll be contacting you soon!";
  document.getElementById("message-box").style = "d-flex; justify-content-center; align-items-center;";
};

$('#year').text(new Date().getFullYear());
