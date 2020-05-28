let i=0;
let progress=33.33;
$("#allow").click(function(){
    $.ajax({
        type: "post",
        url: "steps.json",
        dataType: "json",
        success: function(data){
            $("#title").text(data.list[i].title);
            $("#allow").text(data.list[i].button);
            $("#content").text(data.list[i].content);
        }
    })
    
    // console.log(progress*(i+1)+"%");
    document.getElementById("progress").style.width = progress*(i+1)+"%";
    i++;
    if (i == 3){
        document.getElementById("allow").remove();
        document.getElementById("block").remove();
        $("#last").removeClass("d-none");
    }
})
  