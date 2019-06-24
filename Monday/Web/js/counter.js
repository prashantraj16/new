$(document).ready(function(){

    $("#newRow").click(function(){
        $("#myModal").modal();
      });

      loadGrid();  
});


function loadGrid()
{
    $("#counterList").jqGrid({
        colModel:[
        //     {
        //         label: "Edit Actions",
        //         name: "actions",
        //         width: 100,
        //         formatter: "actions",
        //         formatoptions: {
        //             keys: true,
        //             editOptions: {},
        //             addOptions: {},
        //             delOptions: {}
        //         }       
        //     },

            {name:'ProductName',index:'ProductName', editable: true, edittype:"text"},
            {name:'Quantity',index:'Quantity', editable: true, edittype:"number"},
            {name:'Price',index:'Price', sorttype:"float", formatter:"number", editable: false, edittype:"float"},
            {name:'Tax',index:'Tax', editable: false, edittype:"number"},
            {name:'TotalPrice',index:'TotalPrice', editable: false, edittype:"number"}
        ],

        viewrecords: true, // show the current page, data rang and total records on the toolbar
       // width: 780,
        height: 400,
        shrinkToFit: true,
        //autowidth : true,
        rowNum: 10,
        datatype: 'local',
        pager: "#productPager"
       
    });
}