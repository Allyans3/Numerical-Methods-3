$(document).on('change', '#b', function() {
    $('#table1').bootstrapTable({});
    $('#table2').bootstrapTable({});
    $('#table3').bootstrapTable({});
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    if(!isNaN(a)){
        data.splice(0,data.length);
        load1(triangle_method(a,b,10), triangle_error(a,b));
        data.splice(0,data.length);
        load2(trapezdoidal_rule(a, b, 10), trapezdoidal_error(a,b));
        data.splice(0,data.length);
        load3(simpson_method(a, b, 10), simpson_error(a,b));
    }
});

var data = [];

function load1(S, Error){
    data.push({
           S: S.toFixed(5),
           Error: Error.toFixed(7)
    });
    $('#table1').bootstrapTable("load", data);
}

function load2(S, Error){
    data.push({
        S: S.toFixed(5),
        Error: Error.toFixed(7)
    });
    $('#table2').bootstrapTable("load", data);
}

function load3(S, Error){
    data.push({
        S: S.toFixed(5),
        Error: Error.toFixed(7)
    });
     $('#table3').bootstrapTable("load", data);
}
