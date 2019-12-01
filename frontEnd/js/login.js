$('#registerButton').on('click', function(event){
  let $registerSection = $('#registerContainer')
  $registerSection.toggle('hidden')
})

//falta conectarlo con heroku:
$('#loginbutton').on('click', function(){
  let name = $("#name").val()
  let email2 = $("#email2").val()
  let password2 = $("#password2").val()
  let email = $("#email").val()
  let password = $("#password").val()

  if(name != "" && email2 != "" && password2 != ""){
  	json_to_send2 = {
  	  "name" : name,
  	  "email": email2,
  	  "password": password2
  	};

  	json_to_send2 = JSON.stringify(json_to_send);

  	$.ajax({
  	  url: //herokuURL,
  	  headers: {
  	      'Content-Type':'application/json'
  	  },
  	  method: 'POST',
  	  dataType: 'json',
  	  data: json_to_send2,
  	  success: function(data){
  	    alert("Created user successfully");
  	    window.location = './home.html'
  	  },
  	  error: function(error_msg) {
  	    alert((error_msg['responseText']));
  	  }
  	});
  }else{
  	json_to_send = {
  	  "password" : password,
  	  "email": email
  	};

  	json_to_send = JSON.stringify(json_to_send);

  	$.ajax({
  	  url: //herokuURL,
  	  headers: {
  	      'Content-Type':'application/json'
  	  },
  	  method: 'POST',
  	  dataType: 'json',
  	  data: json_to_send,
  	  success: function(data){
  	    alert("Successful login!");
  	    window.location = './home.html'
  	  },
  	  error: function(error_msg) {
  	    alert((error_msg['responseText']));
  	  }
  	});
  }
});