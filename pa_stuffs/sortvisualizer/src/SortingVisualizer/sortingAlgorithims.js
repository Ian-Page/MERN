export function getmergeSortAnimations(array){

const animations =[];
if (array.length <= 1) return array;
const auxArray = array.slice();
mergeSortHelper(array, 0, array.length -1, auxArray, animations);
return animations;
}
function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxArray,
    animations,
)
{
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxArray, animations);
}
function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxArray,
    animations,
){
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while(i <= middleIdx && j <= endIdx){
    //the values that we're comparing; we push them once
    // to change their color.
    animations.push([i,j]);
    //the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxArray[i] <= auxArray[j]){
    //overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k ,auxArray[i]]);
    mainArray[k++] = auxArray[i++];

    }else{
    //overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k,auxArray[j]]);
    mainArray[k++] = auxArray[j++];
        }
    }
    while (i <= middleIdx){
    //the values that we're comparing; we push them once
    // to change their color.    
    animations.push ([i,i]);
    //the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push ([i,i]);
    // overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push ([k ,auxArray[i]]);
    mainArray[k++]= auxArray[i++];
    }
    while ( j <= endIdx){
    //the values that we're comparing; we push them once
    // to change their color. 
    animations.push([j,j]);
    // the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j,j]);
    // overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k,auxArray[j]]);
    mainArray[k++]= auxArray[j++];
    }
}