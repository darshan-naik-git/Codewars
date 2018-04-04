//https://www.codewars.com/kata/5a941f3a4a6b34edf900006f

function solve(arr) {
   let inpSort = arr.sort((x, y) => x - y);
    let minNo = inpSort[0];

    if(inpSort[0] !== 1){
        return 1;
    }

    for (let i = 0; i < inpSort.length && inpSort[i] <= minNo; i++) {
        minNo += inpSort[i];
    }
    return minNo;
}