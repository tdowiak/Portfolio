function inputCheck(){
  name = document.getElementById('name').value;
  email = document.getElementById('email').value;
  message = document.getElementById('message').value;
  if (name.length<5 || message.length<5){
    $('.badInput').show();
  }else {
    $('.badInput').hide();
    doClick();
  };
};

function doClick(){

}
