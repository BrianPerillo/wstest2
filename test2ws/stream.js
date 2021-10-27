var serv = new EventSource("server.php");

  serv.onmessage = function(e) {
      var jdata = JSON.parse(e.data);
      console.log(jdata.message);
  };

  serv.onopen = function(e) {
        console.log('Connection opened');
  }

  $(document).ready(function(){
    $('a').click(function(){
      receive_msg();
    });
  });

  function receive_msg(){
    $.ajax({
     type: "POST",
     url: 'controller.php',
     data: {action: 'send'}
   });
  }