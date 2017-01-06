// var list=require('./list.json');
// var listMore=require('./list-more.json');

// module.exports = function(){
// 	return {
// 		"list":list,
// 	    "more":listMore
// 	}
// }

var list = require('./list.json');
var listMore = require('./list-more.json');

module.exports = function() {
    return {
        "list": list,
        "more": listMore
    }
}