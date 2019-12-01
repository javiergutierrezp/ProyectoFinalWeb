
//Home tab:
$('#showAnswerButton').on('click', function(event){
  let $answer = $('.answer')
  $answer.toggle('hidden')
})

$('#searchUser').on('click', function(){
	let user = $("#searchUser").val()
	json_to_send = {
  	  "user" : user
  	};

  	json_to_send2 = JSON.stringify(json_to_send);

  	$.ajax({
  	  url: //herokuURL,
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

// function loadTodos() {
//   $.ajax({
//     // url: 'http://localhost:3000/todos',
//     url: 'https://finalexam3.herokuapp.com/todos',
//     headers: {
//         'Content-Type':'application/json',
//         'Authorization': 'Bearer ' + token
//     },
//     method: 'GET',
//     dataType: 'json',
//     success: function(data){
//       console.log(data)

//       for( let i = 0; i < data.length; i++) {
//         // aqui va su código para agregar los elementos de la lista
//         let newHTML = `<li><input type="checkbox" name="todo" value="1"><span>${data[i].description}</span></li>`

//         $('#todo-list').append(newHTML)
        
//         console.log(data[i].description)
//         // algo asi:
//         // addTodo(data[i]._id, data[i].description, data[i].completed)
//         // no tienen que usar la funcion de addTodo, es un ejemplo
//       }
//     },
//     error: function(error_msg) {
//       alert((error_msg['responseText']));
//     }
//   });
// }

// loadTodos()






//Dashboard tab:

//add post
//update post
//delete post





//Logout tab:

// $('#logoutButton').on('click', function(){
//   $.ajax({
//     url: //herokuURL
//     headers: {
//         'Content-Type':'application/json',
//         'Authorization': 'Bearer ' + token
//     },
//     method: 'POST',
//     dataType: 'json',
//     data: token,
//     success: function(data){
//       alert("Logout exitoso");
//       window.location = './index.html'
//     },
//     error: function(error_msg) {
//       window.location = './index.html'
//       //alert("Couldn't do it correctly :(");
//     }
//   });
// });