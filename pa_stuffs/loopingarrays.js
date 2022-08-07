//In programming, it’s very common to loop through each array value. We can do this as follows:
//This prints each value in the array, using a FOR loop that iterates once for each array value.
var nums = [1,3,5,7]; // set up our loop
for (var idx = 0;idx < nums.length;idx++) // for each index in arr...
{
    console.log(nums[idx]); // ...print the value
}

//What if we wanted an array with multiples of 3 up to 99,999? We accomplish this with the code below:
var arr = []; // create empty array
for (var val = 3;val <= 99999;val += 3) // val will be 3,6,...99999
{
    arr.push(val); // add each val to arr
}
console.log(arr); // [3,6,9,12,..., 99999]