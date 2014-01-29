var erowid = require('./lib/erowid.js');

erowid(function (item) {
	if ('author' in item && 'name' in item.author) {
		if (item.author.name.toLowerCase() === 'anonymous') {
			delete item.author.name;
		}
	}

	return item;
}, true);