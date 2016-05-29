'use strict';

function collect_all_even(collection) {
  var arr=new Array();
		var Len=collection.length;
		for(var i=0;i<Len;i++){
			if(collection[i]%2==0)
				arr.push(collection[i]);
		}
	
	return arr;
}

module.exports = collect_all_even;
