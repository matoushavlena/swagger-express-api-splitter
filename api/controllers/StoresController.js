'use strict';

var stores = [{
	id: 1,
	name: "Store 1",
	country_code: "USA",
	city: "New York City"
}, {
	id: 2,
	name: "Store 2",
	country_code: "CZE",
	city: "Prague"
}];

module.exports = {
		
	stores_get: function(req, res) {
		res.send(stores);
	},
	
	stores_post: function(req, res) {
		stores.push(req.swagger.params.store.value);
		res.send(stores[stores.length-1]);
	},
	
	stores_delete: function(req, res) {
		stores = stores.filter(function(obj) {
		    return obj.id !== req.swagger.params.id.value;
		});
		res.sendStatus(200);
	},
	
	stores_put: function(req, res) {
		var i;
		for (i=0; i<stores.length; i++) {
		    if (stores[i].id === req.swagger.params.id.value) {
		    	stores[i] = req.swagger.params.store.value;
		    	break;
		    }
		}
		res.send(stores[i]);
	}
	
}