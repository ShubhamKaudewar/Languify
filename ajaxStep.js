$("#allow").click(function(){
    $.ajax({
        type: "GET",
        url: "./steps.json",
        data: {
            format: 'json'
        }
    }).done(function(data) {
        console.log(data);
        $("#results").append(
          `<div id='results-box' class='tile'>
            <p class=' subtitle'>Meal:  ${data.meals[0].strMeal} </p>
            <figure class='image is-128x128'>
            <img src='${data.meals[0].strMealThumb}' />
            </figure>
           </div>`
    );
    $("#results-box").fadeIn('slow');
    });
})
  