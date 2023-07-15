function threeSum(arr, target) {
	arr.sort((a, b) => a - b);
	let diff = Number.MAX_VALUE;
	let ans = 0;
	
	for(let i=0; i<arr.length; i++) {
		let start = i+1;
		let end = arr.length-1;
		while(start <= end) {
			let sum = arr[i] + arr[start] + arr[end];
			if(diff > Math.abs(sum - target)) {
				diff = Math.abs(sum - target);
				ans = sum;
			}
			else if(sum < target) start++;
			else end--;
		}
	}
	return ans;
}

module.exports = threeSum;
