'use strict';

var users = [{
	id: 153,
	first_name: "John",
	last_name: "Doe",
	email: "john@doe.com"
}, {
	id: 154,
	first_name: "Frank",
	last_name: "Sinatra",
	email: "frank@sinatra.com"
}];

module.exports = {
		
	users_get: function(req, res) {
		res.send(users);
	},
	
	users_post: function(req, res) {
		users.push(req.swagger.params.user.value);
		res.send(users[users.length-1]);
	},
	
	users_delete: function(req, res) {
		users = users.filter(function(obj) {
		    return obj.id !== req.swagger.params.id.value;
		});
		res.sendStatus(200);
	},
	
	users_put: function(req, res) {
		var i;
		for (i=0; i<users.length; i++) {
		    if (users[i].id === req.swagger.params.id.value) {
		    	users[i] = req.swagger.params.user.value;
		    	break;
		    }
		}
		res.send(users[i]);
	}
	
}