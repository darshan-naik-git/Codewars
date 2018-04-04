//https://www.codewars.com/kata/55b3425df71c1201a800009c

function stat(strg) {

	if (strg.length === 0) {
		return "";
	}
	var timeStr = strg.split(', ');
	var timeArr = [],
		tf = [];
	var str, time, dar = [];
	var i = 0,
		sec = 0,
		secRF = 0;
	for (i = 0; i < timeStr.length; i++) {
		timeArr.push(timeStr[i].split('|').map(Number));
	}
	for (var i = 0; i < timeArr.length; i++) {
		str = timeArr[i][0] + ":" + timeArr[i][1] + ":" + timeArr[i][2];
		time = new Date("01/01/1970 " + str);
		dar.push(time);
	};
	dar.sort(function(a, b) {
		return new Date(a) - new Date(b);
	});
	var diff = dar[dar.length - 1].getTime() - dar[0].getTime();
	var seconds = parseInt((diff / 1000) % 60);
	var minutes = parseInt((diff / (1000 * 60)) % 60);
	var hours = parseInt((diff / (1000 * 60 * 60)) % 24);
	var fi = "Range: " + convert(hours) + "|" + convert(minutes) + "|" + convert(seconds);
	var ah = 0,
		am = 0,
		as = 0;
	for (i = 0; i < dar.length; i++) {
		ah += dar[i].getHours();
		am += dar[i].getMinutes();
		as += dar[i].getSeconds();
	}
	var avg = (ah * 3600 + am * 60 + as) / dar.length;
	var ss = parseInt(avg % 60);
	var ms = parseInt((avg / 60) % 60);
	var hs = parseInt((avg / (60 * 60)) % 24);
	fi += " Average: " + convert(hs) + "|" + convert(ms) + "|" + convert(ss);
	if (dar.length % 2 == 1) {
		var me = dar[parseInt(dar.length / 2)];
		fi += " Median: " + convert(me.getHours()) + "|" + convert(me.getMinutes()) + "|" + convert(me.getSeconds());
	} else {
		var el = parseInt(dar.length / 2);
		var e2 = (dar[el].getHours() + dar[el - 1].getHours()) * 3600 + (dar[el].getMinutes() + dar[el - 1].getMinutes()) * 60 + dar[el].getSeconds() + dar[el - 1].getSeconds();
		var e3 = (e2 / 2);
		var ss = parseInt(e3 % 60);
		var ms = parseInt((e3 / 60) % 60);
		var hs = parseInt((e3 / (60 * 60)) % 24);
		fi += " Median: " + convert(hs) + "|" + convert(ms) + "|" + convert(ss);

	}


	return fi;

}

function convert(t) {
	if (t.toString().length < 2) {
		t = "0" + t;
	}
	return t;
}