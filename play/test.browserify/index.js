var unique = require("uniq");
var $ = require("jquery");

var data = [3, 2, 5, 5, 5, 3, 2, 8];

$(document).ready(function(){
 alert(unique(data));
})

