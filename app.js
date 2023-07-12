
let box = "<div class='counterButton'></div>"
for (let grid =0; grid < 4; grid++){
   let row = "<div>";

    for(let i=0; i <4; i++){
        row += box;
    };
    row += "</div>"
    $('#grid').append(row);
};

$('#grid').on('click', '.counterButton', function() {
  
    
    $(this).toggleClass("change");
  });