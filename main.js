var erowid = require('./lib/erowid.js');

erowid(function (item) {
	if ('dose' in item) {
		for (var i = 0; i < item.dose.length; i++) {
			if ('time' in item.dose[i]) {
				if (item.dose[i].time.indexOf(':') > 0) {
					arr = item.dose[i].time.split(':');
					item.dose[i].time = parseInt(arr[0] * 60, 10) + parseInt(arr[1], 10); 
				}
			}
		};
	}
}, true);