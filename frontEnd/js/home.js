
//Home tab:
$('#showPostButton').on('click', function(event){
  let $addPost = $('#areaForPost')
  $addPost.toggle('hidden')
})

$('.modifyButton').on('click', function(event){
  let $newQuestion = $('.newQuestion')
  let $newAnswer = $('#newAnswer')
  $newQuestion.toogle('hidden')
  $newAnswer.toogle('hidden')
})

$('#menu > li').on('click', function(event){
  $('.selected').removeClass('selected');
  let $currentElement = $(this);
  let sectionName = $currentElement.attr('class');
  $currentElement.addClass('selected');
  $('section').addClass('hidden');
  $('#' + sectionName + 'Section').removeClass('hidden');
  $(`#${sectionName}Section`)
});

$('#searchUser').on('click', function(){
	let user = $("#searchUser").val()
  //HAY QUE CONSEGUIR EL ID DEL USUARIO
	json_to_send = {
  	  "user" : user
  	};

  	json_to_send2 = JSON.stringify(json_to_send);

  	$.ajax({
  	  url: 'http://proyectofinalmj.herokuapp.com' + id,
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
    url: 'http://proyectofinalmj.herokuapp.com/posts',
    headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
    },
    method: 'GET',
    dataType: 'json',
    success: function(data){
      console.log(data)

      for( let i = 0; i < data.length; i++) {
        console.log(data[i].question)
        addPost(data[i]._id, data[i].question, data[i].answer)
      }
    },
    error: function(error_msg) {
      alert((error_msg['responseText']));
    }
  });
}

loadPosts()






//Dashboard tab:

//load posts personales
function loadPostsPersonales() {
  id = 0
  $.ajax({
    // url: 'http://localhost:3000/todos',
    url: 'http://proyectofinalmj.herokuapp.com/posts/' +id,
    headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
    },
    method: 'GET',
    dataType: 'json',
    success: function(data){
      console.log(data)

      for( let i = 0; i < data.length; i++) {

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



//add post

$('#addPostButtonToggle').on('click', function(event){
  let $add = $('.add')
  $add.toggle('hidden')
}

$('#addPostButton').on('click', function(event){
  json_to_send = {
      "question" : question.value,
      "answer" : answer.value
    };
    json_to_send = JSON.stringify(json_to_send);
    $.ajax({
      url: 'https://proyectofinalmj.herokuapp.com/posts',
      headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + token
      },
      method: 'POST',
      dataType: 'json',
      data: json_to_send,
      success: function(data){
        console.log(data)
        addPost(data[i]._id, data[i].question, data[i].answer) 
      },
      error: function(error_msg) {
        alert((error_msg['responseText']));
      }
    });
    input.value = '';
})


function addPost(id, question, answer) {
$('.posts').append('<div class="post" value="'+id+'"><p class="question">'+question+'</p><p class="answer hidden">'+answer+'</p><button id="showAnswerButton">Show Answer</button></div>')
}


//update post
$('#modifyPostButtonToggle').on('click', function(event){
  let $modify = $('.modify')
  $modify.toggle('hidden')
}

$('#modifyButton').on('click', function(event){
 //FALTA AGARRAR EL ID DEL POST QUE SE QUIERE MODIFICAR (created by?)
 _id = $("input[name='radios']:checked").val()
  json_to_send = {
      "question" : question.value,
      "answer" : answer.value
    };
    json_to_send = JSON.stringify(json_to_send);
    $.ajax({
      url: 'https://proyectofinalmj.herokuapp.com/posts/' + _id,
      headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + token
      },
      method: 'PATCH',
      dataType: 'json',
      data: json_to_send,
      success: function(data){
        console.log(data)
        addTodo(data._id, data.question, data.answer)
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
  _id = $("input[name='radios']:checked").val()
    $.ajax({
      url: 'https://proyectofinalmj.herokuapp.com/posts' + _id,
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
