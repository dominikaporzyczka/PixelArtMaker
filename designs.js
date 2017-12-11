// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var table = $('#pixel_canvas');

function makeGrid() {
    $('#pixel_canvas').html('');
    var rowInput= $('#input_height').val();
    var colInput= $('#input_width').val();

    for(var i=1; i<=rowInput; i++) {
        table.append('<tr>');
        for(var j=1; j<=colInput; j++) {
            table.append('<td></td>');
        }
        table.append('</tr>');
    }
    
}


$('#sizePicker').on('submit', function(){
    makeGrid();
    return false;
});
