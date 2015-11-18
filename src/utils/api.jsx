var Fetch = require('whatwg-fetch');

module.exports = {
	get: function(url){
		return fetch(rootUrl + url, {

		})
		.then(function(response){
			return response.json();
		});
	}
};
