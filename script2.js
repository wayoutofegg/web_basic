$(document).ready(function(){
    
    if($.localStorage.isSet('memo')){
        $('.tarea').val($.localStorage.get('memo'));
    }
    $('.btn_area').click(function(){
        $.localStorage.set('memo',$('.tarea').val());
    });
});