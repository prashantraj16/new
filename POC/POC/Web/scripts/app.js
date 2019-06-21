
$(document).ready(function() {	
    
         

      $.ajax(
        {
          method: "GET",
          url: "http://localhost:3000/user/user",
          data: {UserName : "user6", Password : "password2" },
          dataType: "json",           
          contentType : 'application/json',
          crossDomain : true
        } )
    .done(function(data) {
      $('#getData').html(JSON.stringify(data));
      
    })
    .fail(function(error) {
       
      alert( "error" );
    });

  //   $.ajax(
  //     {
  //       method: "POST",
  //       url: "http://localhost:3000/createUser/user",
  //       data: JSON.stringify({UserName : "user6", Password : "password2" }),
  //       dataType: "json",
         
  //       contentType : 'application/json',
  //       crossDomain : true
  //     } )
  // .done(function(data) {
  //   $('#postData').html(JSON.stringify(data));
    
  // })
  // .fail(function(error) {
     
  //   alert( "error" );
  // });
});