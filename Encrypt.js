//https://www.codewars.com/kata/57aa3927e298a757820000a8

function cypher(string) {

	var uc = ['O', 'I', 'R', 'E', 'A', 'S', 'G', 'T', 'B', ''];
	var lc = ['o', 'l', 'z', 'e', 'a', 's', 'b', 't', '', 'g'];
	var fi = '';

	var s = string,tmp;
	var arr = s.split('');
	for (var i = 0; i < arr.length; i++) {
		tmp = arr[i];
		if (tmp == " ") {
			fi += " ";
		} else if (tmp == tmp.toLowerCase()) {
			if (lc.indexOf(tmp) >= 0) {
				fi += lc.indexOf(tmp);
			} else {
				fi += tmp;
			}
		} else if (tmp == tmp.toUpperCase()) {
			if (uc.indexOf(tmp) >= 0) {
				fi += uc.indexOf(tmp);
			} else {
				fi += tmp;
			}
		} else {
			fi += tmp;
		}

	}
	return fi;

}