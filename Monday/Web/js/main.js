$(document).ready(function(){
  $("#Counter").load("./templates/counter.html");    

    $(".nav-tabs a").click(function(){
      $(this).tab('show');
    });
    $('.nav-tabs a').on('shown.bs.tab', function(event){
      var x = $(event.target).text();         // active tab

      if(x == 'Counter')
      {
        $("#Products").html('');
       $("#Counter").load("./templates/counter.html");    
      }
      else if(x == 'Products')
      {
        $("#Counter").html('');
        $("#Products").load("./templates/products.html"); 
      }
    });
  });
