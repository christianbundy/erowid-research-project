var erowid = require('./lib/erowid.js');

erowid(function (item) {
	if ('dose' in item) {
		for (var i = 0; i < item.dose.length; i++) {
			if ('form' in item.dose[i]) {
				if (item.dose[i].form === 'pill/tablet') {
					item.dose[i].form = 'tablet';
				}
			}
		};
	}
}, true);