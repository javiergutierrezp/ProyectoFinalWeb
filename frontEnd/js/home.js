
//Home tab:
$('#showAnswerButton').on('click', function(event){
  let $answer = $('.answer')
  $answer.toggle('hidden')
})

$('#searchUser').on('click', function(){
	let user = $("#searchUser").val()
  //HAY QUE CONSEGUIR EL ID DEL USUARIO
	json_to_send = {
  	  "user" : user
  	};

  	json_to_send2 = JSON.stringify(json_to_send);

  	$.ajax({
  	  url: //herokuURL + id,
  	  headers: {
  	      'Content-Type':'application/json'
  	  },
  	  method: 'GET',
  	  dataType: 'json',
  	  data: json_to_send,
  	  success: function(data){
  	  	//show all posts from that user
  	  },
  	  error: function(error_msg) {
  	    alert((error_msg['responseText']));
  	  }
  	});
});

function loadPosts() {
  $.ajax({
    // url: 'http://localhost:3000/todos',
    url: 'https://finalexam3.herokuapp.com/posts',
    headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
    },
    method: 'GET',
    dataType: 'json',
    success: function(data){
      console.log(data)

      for( let i = 0; i < data.length; i++) {
        // aqui va su código para agregar los elementos de la lista
        let newHTML = `<div class="post"><p class="question">${data[i].question}</p>p class="answer hidden">${data[i].answer}</p><button id="showAnswerButton">Show Answer</button></div>`
        $('.posts').append(newHTML)
        
        console.log(data[i].question)
        // algo asi:
        addPost(data[i]._id, data[i].question, data[i].answer)
        // no tienen que usar la funcion de addTodo, es un ejemplo
      }
    },
    error: function(error_msg) {
      alert((error_msg['responseText']));
    }
  });
}

// loadPosts()






//Dashboard tab:

//add post
$('#addPostButton').on('click', function(event){
 
  json_to_send = {
      "question" : question.value,
      "answer" : answer.value
    };
    json_to_send = JSON.stringify(json_to_send);
    $.ajax({
      url: 'https://examenfinaljavi.herokuapp.com/posts',
      headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + token
      },
      method: 'POST',
      dataType: 'json',
      data: json_to_send,
      success: function(data){
        console.log(data)
        addTodo(data[i]._id, data[i].question, data[i].answer) 
      },
      error: function(error_msg) {
        alert((error_msg['responseText']));
      }
    });
    input.value = '';

})

function addPost(id, question, answer) {
$('#posts').append(`<input type="paragraph" class="question" value="'+id+'"><span>${question}</span>`)
$('#posts').append(`<input type="paragraph" class="answer hidden" value="'+id+'"><span>${answer}</span>`)
}


//update post
$('#modifyButton').on('click', function(event){
 //FALTA AGARRAR EL ID DEL POST QUE SE QUIERE MODIFICAR (created by?)
  json_to_send = {
      "question" : question.value,
      "answer" : answer.value
    };
    json_to_send = JSON.stringify(json_to_send);
    $.ajax({
      url: 'https://examenfinaljavi.herokuapp.com/posts/' + id,
      headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + token
      },
      method: 'PATCH',
      dataType: 'json',
      data: json_to_send,
      success: function(data){
        console.log(data)
        addTodo(data[i]._id, data[i].question, data[i].answer)
      },
      error: function(error_msg) {
        alert((error_msg['responseText']));
      }
    });
    question.value = '';
    answer.value = '';
})

//Se necesita funcion para modificar post? Not sure about that

//delete post

$('#deleteButton').on('click', function(event){
 //FALTA AGARRAR EL ID DEL POST QUE SE QUIERE BORRAR
    $.ajax({
      url: 'https://examenfinaljavi.herokuapp.com/posts/' + id,
      headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + token
      },
      method: 'DELETE',
      dataType: 'json',
      success: function(data){
        alert("Post borrado!");
      },
      error: function(error_msg) {
        alert((error_msg['responseText']));
      }
    });
    input.value = '';
})

//AQUI MAYBE TENDRIAMOS QUE BORRAR TODOS Y MANDAR LLAMAR LOADPOSTS()???





//Logout tab:

$('#logoutButton').on('click', function(){
  $.ajax({
    url: 'https://examenfinaljavi.herokuapp.com/logout'
    headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
    },
    method: 'POST',
    dataType: 'json',
    data: token,
    success: function(data){
      alert("Logout exitoso");
      window.location = './index.html'
    },
    error: function(error_msg) {
      window.location = './index.html'
      //alert("Couldn't do it correctly :(");
    }
  });
});