document.getElementById('Submit!').addEventListener('click', function(event){
    var gui = new XMLHttpRequest();
    var payload = {readMe:null};
    payload.readMe = document.getElementById('readMe').value;
    gui.open('POST', 'http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php', true);
    gui.setRequestHeader('Content-Type', 'application/json');
    gui.addEventListener('load',function(){
      if(gui.status >= 200 && gui.status < 400){
        var response = JSON.parse(gui.responseText);
        console.log(response);
      } else {
        console.log("Error in network request: " + gui.statusText);
      }});
    gui.send(JSON.stringify(payload));
    event.preventDefault();
  });