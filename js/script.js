var modalConfirm = function(callback){
    $("#btn-callback-carousel").on("click", function(){
        $("#callback-modal").modal('show');
      });
    $("#btn-callback-carousel2").on("click", function(){
      $("#callback-modal").modal('show');
    });

    $("#btn-callback-carousel-ok").on("click", function(){
      callback(true);
      $("#callback-modal").modal('hide');
      sendEmailCallBack('inputName', 'inputNumber', false);
    });

    $("#success-modal-ok2").on("click", function(){
      callback(false);
      $("#success-modal2").modal('hide');
    });
  };
  
  modalConfirm(function(confirm){
    if(confirm){
      
    }else{
      
    }
  });

  function sendEmailCallBack(nameId, phoneId, flag) {
    var name = document.getElementById(nameId).value;
    var phone = document.getElementById(phoneId).value;
    var currentDate = new Date(); 
    var date = currentDate.getDate() + "." + (currentDate.getMonth()+1) + "." + currentDate.getFullYear()
    + " время заказа " + currentDate.getHours() + ":"+ (currentDate.getMinutes()<10?'0':'') + currentDate.getMinutes()

    if((typeof name !== 'undefined') && (typeof phone !== 'undefined') && (name !== '') && (phone !== '')) {
      emailjs.send("default_service","15",{name: name, phone: phone, date: date});
      if(flag){
        $("#success-modal").modal('show');
      }
      $("#success-modal-ok").on("click", function(){
        $("#success-modal").modal('hide');
      });
    } else {
      $("#errFields-modal").modal('show');
      $("#errFields-modal-ok").on("click", function(){
        $("#errFields-modal").modal('hide');
      });
    }
  }

  function sendEmailQuestions() {
    var name = document.getElementById('nameUser').value;
    var email = document.getElementById('emailUser').value;
    var message = document.getElementById('messageUser').value;
    var currentDate = new Date(); 
    var date = currentDate.getDate() + "." + (currentDate.getMonth()+1) + "." + currentDate.getFullYear()
    + " " + currentDate.getHours() + ":"+ (currentDate.getMinutes()<10?'0':'') + currentDate.getMinutes();

    if((typeof name !== 'undefined') && (typeof email !== 'undefined') && (typeof message !== 'undefined') && (name !== '') && (email !== '') && (message !== '')) {
      emailjs.send("default_service","16",{name: name, email: email, message: message, date: date});
      $("#success-modal").modal('show');
      $("#success-modal-ok").on("click", function(){
        $("#success-modal").modal('hide');
      });
    } else {
      $("#errFields-modal").modal('show');
      $("#errFields-modal-ok").on("click", function(){
        $("#errFields-modal").modal('hide');
      });
    }
  }
 