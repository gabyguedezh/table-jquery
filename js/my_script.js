// //will assign css class .selection to the odd numbered table rows
// $(document).ready(function() {
//     $("tr:odd").addClass("selection");
//     $("tr:even").addClass("selectionEven");
// });


// // light red: #ee7d57
// //  red: #E84610

// Code below is the challenge solution

//will wait uuntil page ready
 $(document).ready(function(){

    /*when table header is clicked , removes selection class from all other table rows and
      adds the selection class to this table headers row only*/
     $("th").click(function(){
     	$("tr").children().removeClass("selection")
    	$(this).siblings().addClass("selection");

  });
 });



// Code Below was the Draft of my Attempt to Solve the Challenge

// $(document).ready(function() {

//     // var firstRow = $("tr").first();

//     // $(firstRow).on("click", function() {

//     //     var highlightCells = $("tr:first").children();

//     //     $(highlightCells).addClass("selection");
//     // });

//     $("th").on("click", function() {
//         if ($(this).parent().css("background-color") == "#c65353") {
//             $(this).parent().removeClass("selection");
//         } else {
//             $(this).parent().addClass("selection");
//         }
//     });

// });


// var colHead = ("table").find("th");

// $(colHead).on("click", function() {
//     $(this).addClass("selection");
// });

//     $().on("click", function() {
//     $("th").addClass("selection");
// });

// $("th").on("click", function(){

//     // var should be the corresponding column
//     var highlightCol = $(this).parent();

//     $(highlightCol).addClass("selection");
// });
