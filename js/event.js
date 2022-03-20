$(document).ready(function () {

    $("#sname,#sclass,#scon").focus(function () {
        $(this).css('background-color', 'lime');
        $(this).css('color', '#f0f');
    })
    $("#sname,#sclass,#scon").blur(function () {
        $(this).css('background-color', 'red');
        $(this).css('color', '#fff');
    });
     $("#scon").change(function () {
         var a = $(this).val();
         $('.box').html(a);
    });
    
 $("#sform").submit(function () {
     alert("Form Submit Successfully");
    });
    

});