var fs = require('fs');
var path = require('path');
var qjscl = this;

exports.load = function(files) {
	jsobj = {};
	 if (typeof files != "undefined")
	 {
	 	try {
			if (typeof files == "string") { files = [files]; }
			files.forEach(function(x) {
				if (path.existsSync(x)) {
						tfile = fs.readFileSync(x);
					}
					tjsobj = JSON.parse(tfile);
					// This is only a shallow merge, it will clobber multiply-set keys
					for (attrname in tjsobj) { jsobj[attrname] = tjsobj[attrname]; }
				});
			return jsobj;
		} finally {
		}
	 }
	return jsobj;
	};
