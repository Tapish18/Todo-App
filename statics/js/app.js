(function(){
    var form2 = $("#form2");
    $('#delete-btn').attr('form', '#form2');
    $("#delete-btn").on("click",function(){
        form2.submit();
    })

    var categoryOptions = $("ul").find("li a").splice(1);
    var categoryInput = $("#cat-input");
    for( let a of categoryOptions){
        a.addEventListener("click",function(event){
            event.preventDefault();
            categoryInput.val(a.text);
        });
    };
})();