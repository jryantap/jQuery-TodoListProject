//check off Specific Todos by clicking
/** LONG WAY
 * $("li").click(function(){
    //color property and text decoration property
    //of specific li that is clicked
    // $(this).css("color", "gray");
    // $(this).css("text-decoration", "line-through");
    //-or- set it an object
    if($(this).css("color") === "rgb(128,128,128)"){
        $(this).css({
        color: "black",
        textDecoration: "none"
        });
    }
    else{
        $(this).css({
        color: "gray",
        textDecoration: "line-through"
        });
    }
});*/

//SHORT WAY
$("ul").on("click", "li", function(){  //add a listen to ul parent so new added li can have same property
    $(this).toggleClass("completed");
});

//click on X to delete item
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function(){
        $(this).remove(); //$(this) here points to parent now

    });
    event.stopPropagation();  //stops from bubbling up to other elements
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13 ){  //check for enter key
        var todoText = $(this).val();
        $(this).val(""); //empty box
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>") //add new item
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});