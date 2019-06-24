$(document).ready(function(){
    $("#productList").jqGrid({
        colModel:[
            {
                label: "Edit Actions",
                name: "actions",
                width: 100,
                formatter: "actions",
                formatoptions: {
                    keys: true,
                    editOptions: {},
                    addOptions: {},
                    delOptions: {}
                }       
            },

            {name:'ProductId',index:'ProductId',  sorttype:"int"},
            {name:'ProductName',index:'ProductName', editable: true, edittype:"text"},
            {name:'ProductPrice',index:'ProductPrice', sorttype:"float", formatter:"number", editable: true, edittype:"float"},
            {name:'ManufacturerName',index:'ManufacturerName',  align:"right", editable: true, edittype:"text"},
            {name:'ManufacturingDate',index:'ManufacturingDate', align:"right", sorttype:"date", formatter:"date"}		
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
    

    fetchGridData();

    function fetchGridData() {
        
        var gridArrayData = [];
        // show loading message
        $("#productList")[0].grid.beginReq();
        $.ajax({
            url: "http://localhost:3000/api/product",
            success: function (result) {
                for (var i = 0; i < result.data.length; i++) {
                    var item = result.data[i];
                    gridArrayData.push({
                        ProductId: item.ProductId,
                        ProductName: item.ProductName,
                        ProductPrice: item.ProductPrice,
                        ManufacturerName: item.ManufacturerName,
                        ManufacturingDate: item.ManufacturingDate
                    });                            
                }
                // set the new data
                $("#productList").jqGrid('setGridParam', { data: gridArrayData});
                // hide the show message
                $("#productList")[0].grid.endReq();
                // refresh the grid
                $("#productList").trigger('reloadGrid');
            }
        });
    }

    function formatTitle(cellValue, options, rowObject) {
        return cellValue.substring(0, 50) + "...";
    };

    function formatLink(cellValue, options, rowObject) {
        return "<a href='" + cellValue + "'>" + cellValue.substring(0, 25) + "..." + "</a>";
    };
});


    

