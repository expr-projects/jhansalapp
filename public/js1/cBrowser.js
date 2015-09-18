var ua = navigator.userAgent,
	ie = /(msie|trident)/i.test(ua),
	chrome = /chrome/i.test(ua),
	safari = /safari/i.test(ua) && !chrome,
	iphone = /iphone/i.test(ua),
	ipad = /ipad/i.test(ua),
	android = /android/i.test(ua),
	opera = /opera/i.test(ua) || /opr/i.test(ua),
	firefox = /firefox/i.test(ua),
	gecko = /gecko\//i.test(ua),
	webkitV = /version\/(\d+(\.\d+)?)/i,
	firefoxV = /firefox\/(\d+(\.\d+)?)/i,
	mac = /(mac|darwin)/i.test(ua),
	win = /win/i.test(ua),
	linux = /linux/i.test(ua);

var bo, bc;

function sniffBrowser() {
	// Default to non-mobile.
	bo = {};
	bo.mobile = false;
	
	// Get platform.
	if (mac) {
		bo.mac = true;
		bc = "mac";
	} else if (linux) {
		bo.linux = true;
		bc = "linux";
	} else if (win) {
		bo.win = true;
		bc = "win";
	}
	
	// Get browser + clipped (full dot) version. That should be all we need for any targeting.
	if (ie) {
		bo.msie = true,
		bo.version = ua.match(/(msie |rv:)(\d+(\.\d+)?)/i)[2]
	
		bc += " ie ie" + bo.version.split(".")[0];
	} else if (opera) {
		bo.opera = true,
		bo.version = ua.match(webkitV) ? ua.match(webkitV)[1] : ua.match(/opr\/(\d+(\.\d+)?)/i)
		
		bc += " opera opera" + bo.version.split(".")[0];
	} else if (chrome) {
		bo.webkit = true,
		bo.chrome = true,
		bo.version = ua.match(/chrome\/(\d+(\.\d+)?)/i)[1]
		
		bc += " chrome chrome" + bo.version.split(".")[0];
	} else if (iphone || ipad) {
		bo.webkit = true,
		bo.mobile = true,
		bo.ios = true,
		bo.iphone = iphone,
		bo.ipad = ipad
		
		bc += " ios";
		bc += (bo.iphone) ? " iphone" : "";
		bc += (bo.ipad) ? " ipad" : "";
	} else if (android) {
		bo.webkit = true,
		bo.android = true,
		bo.mobile = true,
		bo.version = (ua.match(webkitV) || ua.match(firefoxV))[1]
		
		bc += " android";
	} else if (safari) {
		bo.webkit = true,
		bo.safari = true,
		bo.version = ua.match(webkitV)[1]
		
		bc += " safari safari" + bo.version.split(".")[0];
	} else if (gecko) {
		bo.firefox = (firefox) ? true : false,
		bo.gecko = true,
		bo.mozilla = true,
		bo.version = ua.match(firefoxV)[1]
		
		bc += " gecko";
		bc += (bo.mozilla) ? " mozilla" : "";
		bc += (bo.firefox) ? (" firefox ff" + bo.version.split(".")[0]) : "";
	}
	
	bc += (bo.webkit) ? " webkit" : "" + (bo.mobile == false) ? "" : " mobile";
	document.documentElement.className += " " + bc;
	return bo;
}

var cBrowser = sniffBrowser();
