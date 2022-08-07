arr = [2, 10, 6, 8];
temp = arr[1]; // arr == [2,10,6,8], temp == 10
arr[1] = arr[3]; // arr == [2,8,6,8], temp == 10
arr[3] = temp; // arr == [2,8,6,10], temp == 10
console.log(arr); // displays [2,8,6,10]
    