$(document).ready(function(){
    $("#signupForm").validate({
        rules:{
            fname:{
                required:true,
                minlenght:4
            },
            sname:{
                required:true,
                minlenght:4
            },
            mail:{
                required:true,
                email:true
            },
            gend:{
                required:true
            },
            password:{
                minlenght:5
                
            }

        },
        messages:{
            fname:{
                required:"enter this field",
                minlength:"enter min 4"
            }
        }
    })
})