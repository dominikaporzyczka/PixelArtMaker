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

const drawing = (function () {
    let stillMouseDown = false;

    $(table)
        .on('click', 'td', draw)

        .on('mousedown', 'td', function () {
            $(table).on('mousemove', 'td', draw);
        })

        .on('mouseup', function () {
            $(table).off('mousemove', 'td', draw)
        });

    //Select color input
    function draw() {
        let pickedColor, tableField;
        pickedColor = $('#colorPicker').val();
        tableField = $(this);
        tableField.css('background', pickedColor);
    }
})();