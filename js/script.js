// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
let api_url =
  "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";
//  let userSearch= $("input").val();
// let new_url="https://api.giphy.com/v1/gifs/search?q="+userSearch+"=pq&api_key=dc6zaTOxFJmzC";
$(".search-button").click(function() {
  let userInput = $("input").val();
  let new_url ="https://api.giphy.com/v1/gifs/search?q="+userInput+"&rating=pg&api_key=dc6zaTOxFJmzC";
    // "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&rating=pq&api_key=dc6zaTOxFJmzC";
  // fetch(api_url)
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(data) {
  //     console.log(data);
  //     $(".introText").append(`<img src=` + data.url + `>`);
  //     alert(JSON.stringify(data));
  //   });

  fetch(new_url).then(function(response)
                     {
    return response.json();
   })
    .then(function(data){
    console.log(data.title);
    $(".introText").append(`<img src`+data+`>`);
     alert(JSON.stringify(data));
    })

 
});

// this looks great!!!!
// Can you see the data in your console?? :(
//i cant see the console value because of the chromebook. I'n not really sure why
// ok that's fine I see it :)
// but how about you try.. alert(JSON.stringify(data))?
//ok i'm going ti try it
// you are missing an "i" :)
