//will assign css class .selection to the odd numbered table rows
$(document).ready(function() {
    // $(".selection").css("background-color", "#ee7d57");
    // $("tr:odd").addClass("selection");
    $(".selection").css("background-color", "#E84610");
    $("tr:even").addClass("selection");
    $(".selection").css("background-color", "#ee7d57");
    $("tr:odd").addClass("selection");
});

// Why does the order in which I add the color means that I will get two different coloured rows or they all will look the same?