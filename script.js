let output=document.getElementById("output");

function display(num){
    output.value += num;
}
 function Calculate(){
     try{
         output.value=eval(output.value)
     }
     catch(err){
         alert("Invalid" );
     }
 }

 function Clear(){
     output.value="";
 }

 function del(){
     output.value=output.value.slice(0,-1);
 }

 function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31
    && (charCode < 48 || charCode > 57))
        return false;

    return true;
}