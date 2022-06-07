$(document).ready(function() {
    $('#b2').click(function(){ 
            var msg="";
            
            var pobj={
                "email_id":$('#email_id').val(),
                "password":$('#password').val()
            };
           
            $.ajax({
                url:'http://localhost:8080/login',
                dataType:'json',
                data:JSON.stringify(pobj),
                type:'post',
                contentType:'application/json',
                success:function(Record)
                {
                    msg=Record.responseText;
                },
                error:function(err)
                {
                    msg=err.responseText;
                }
            })   
});
});

function check(){
    console.log(document.getElementById("email_id").value+" "+document.getElementById("password").value);
}