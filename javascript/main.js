$(document).ready(function(){
    $(".notcompleted").sortable();
    $(".completed").sortable();
    
 
      $(".txt-input").on("keyup",function(e){
        if(e.keyCode == 13 && $(".txt-input").val() != "")
        {
          var task = $("<div class='task'></div>").text($(".txt-input").val());

          var del = $("<i class='fas trash fa-trash-alt fa-xs'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
              p.remove();
            });
          });
          
          var pin = $("<i class='fas pin fa-thumbtack fa-sm'></i>");
          var check = $("<i class='fas check fa-check fa-xs'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
              $(".completed").append(p);
              p.fadeIn();
            });
            $(this).remove();
          });

          task.append(del,check,pin);
          $(".notcompleted").append(task);
            //to clear the input
          $(".txt-input").val("");
        }
      });
    });