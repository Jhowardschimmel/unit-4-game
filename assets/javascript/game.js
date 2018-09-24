
window.onload = function () {
    $('#instructions').hide();
    $('#helpbutton').on('click', function() {
        $('#helpbutton').text('Hide');
        $('#instructions').show();
        $('#helpbutton').on('click', () => {
            $('#instructions').hide();
            $('#helpbutton').hide();
        });
    });
}