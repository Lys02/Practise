$(document).ready(function(){

$('form').on('submit',function(){

  var string1 = $('form input');
  var sample={words:string1.val()};

$.ajax({
  type:'POST',
  url:'/sample',
  data:sample,
  success:function(data){
    location.reload();
  }
});
return false;
});

});
