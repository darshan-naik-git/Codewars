//https://www.codewars.com/kata/57ad85bb7cb1f3ae7c000039

function numbersWithDigitInside(x, d) {

	var fi = [],
		re = [],
		bool = true;
	for (var i = 0; i <= x; i++) {
		if ((i.toString().search(d.toString()) >= 0) && i > 0) {
			fi.push(i);
		}
	}
	var sum = 0;
	var mul = 0;
	for (var i = 0; i < fi.length; i++) {
		sum += fi[i];
		if (fi[i]) {
			if (bool) {
				mul = 1;
				bool = false;
			}
			mul *= fi[i];
		}
	};
	re.push(fi.length);
	re.push(sum);
	re.push(mul);
	return re;
}