$(document).ready(function() {
    $('#b').click(function(){ 
        var valid=1;

        
                
                if ($("#password1").val() != $("#password2").val()) {
                    alert("Passwords do not match.");
                    valid=0;

                    
                }
                
            
        
            if(valid==1){
                /*alert(document.getElementById("email_id").value+" "+document.getElementById("name").value+" "+document.getElementById("contact").value+" "+document.getElementById("dob").value+" "+document.getElementById("password1").value);*/
            var msg="";
        
            
            var pobj={
                "email":$('#email_id').val(),
                "password":$('#password1').val(),
                "country":$('#country').val(),
                "name":$('#name').val(),                
                "contact":$('#contact').val(),
                "dob":$('#dob').val(),                
                
            };
            
           
            $.ajax({
                url:'http://localhost:8080/register',
                dataType:'json',
                data:JSON.stringify(pobj),
                type:'post',
                contentType:'application/json',
                success:function(Record)
                {
                    msg=Record.responseText;
                    
                    $('#div5').text(msg);
                },
                error:function(err)
                {
                    msg=err.responseText;
                    $('#div5').text(msg);
                }
            })  
        } 
});
});

