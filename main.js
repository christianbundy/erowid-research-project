var erowid = require('./lib/erowid.js');

erowid(function (item) {
	if ('dose' in item) {
		for (var i = 0; i < item.dose.length; i++) {
			if ('specific' in item.dose[i]) {
				if item.dose[i].specific === 'P. cubensis'
					item.dose[i].specific = 'Psilocybe cubensis';
			}
		};
	}
}, true);