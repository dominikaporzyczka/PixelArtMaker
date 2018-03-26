var table = $('#pixel_canvas');

// Select size input
function makeGrid() {
    $('#pixel_canvas').html('');
    var rowInput = $('#input_height').val();
    var colInput = $('#input_width').val();

    for (var i = 1; i <= rowInput; i++) {
        var row = "";
        row += "<tr>";
        for (var j = 1; j <= colInput; j++) {
            row += "<td></td>";
        }
        row += "</tr>";
        table.append(row);
    }

}

// When size is submitted by the user, call makeGrid()
$('#sizePicker').on('submit', function () {
    makeGrid();
    return false;
});

// Select color input
$(table).on('click', 'td', function () {
    var pickedColor, tableField;
    pickedColor = $('#colorPicker').val();
    tableField = $(this);
    tableField.css('background', pickedColor);
});