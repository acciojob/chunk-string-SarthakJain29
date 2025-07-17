function stringChop(str, size) {
	let res = [];
	let curr = 0;
	let temp = "";
	if (!str || typeof size !== 'number' || size <= 0) return [];
	for(let i=0;i<str.length;i++){
		if(curr === size){
			res.push(temp);
			curr = 0;
			temp = "";
		}
		temp += str[i];
		curr++;
	}
	res.push(temp);
	return res;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
