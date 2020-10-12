//função para permitir apenas números no campo Phone
function onlynumber(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /^[0-9.]+$/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

//função para inserir máscara no campo Phone
function phonemask() {
  var phone = document.getElementById('phone');
  if (phone.value.length == 2) {
    phone.value = '(' + phone.value + ')';
  } else if (phone.value.length == 9) {
    phone.value += '-';
  }
}
//função para validar as senhas
function validatePassword() {
  var password = document.getElementById('password').value;
  var repeatpassword = document.getElementById('repeatpassword').value;
  if (password != repeatpassword) {
    alert('Passwords do not match!');
  }
}

//função para submeter o formulário
function register() {
  var firstname = document.getElementById('firstname').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  alert(
    `Your account was created successfully!

    First Name: ${firstname} 
    Phone: ${phone} 
    E-mail: ${email}`
  );
}
