var fs = require('fs');
var path = require('path');
var qjscl = this;

exports.load = function(files) {
	jsobj = {};
	 if (typeof files != "undefined")
	 {
	 	try {
			// Make it so our it
			if (typeof files == "string") { files = [files]; }
			files.forEach(function(x) {
				if (path.existsSync(x)) {
                        try {
    						tfile = fs.readFileSync(x);
                            if (tfile.length == 0) throw new Error('Config file' + x + 'is a zero-length file');
                        } catch(e) {
                            console.error(e.message);
                        }
					}
					if ((tfile) && (tjsobj = JSON.parse(tfile))) {
    					for (attrname in tjsobj) { 
    						// store our attributes
    						if (typeof jsobj[attrname] == "undefined") {
    							jsobj[attrname] = tjsobj[attrname];
    						} else {
    							// Let's keep from stepping on ourselves; if two attributes are the same,
    							// We'll make them an array
    							if (jsobj[attrname].constructor != Array) {
    								jsobj[attrname] = [jsobj[attrname]];
    							}
    							jsobj[attrname].push(tjsobj[attrname]);
    						}
    					}
                    }
				});
			return jsobj;
		} finally {
		}
	 }
	return jsobj;
	};
