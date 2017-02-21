function partition(arr) {
    var p = arr[0]
    var index = 1
    var next = 1
    while (index < arr.length) {
        if (arr[index] < p){
            var temp = arr[index]
            arr[index] = arr[next]
            arr[next] = temp
            next ++
        }
        index++
    }
    arr[0] = arr[next-1]
    arr[next-1]= p
    return arr;
}
console.log(partition([5,1,6,7,2,8,9,3]));

function quickSort(arr, startIndex, endIndex) {
    var arrLength= endIndex - startIndex +1
    if ()
}



///////////////////////////////////////////////
/////////////////the other way/////////////////
///////////////////////////////////////////////

function partitionSort(arr) {
    var wall = 0

    for(var i = 1; i <arr.length; i++){
        if(arr[i] < arr[0]){
            var temp = arr[wall+1]
            arr[wall+1] = arr[i]
            arr[i] = temp
            wall++
        }
    }
    var temp = arr[wall]
    arr[wall] = arr[0]
    arr[0] = temp
    return(arr)
}
console.log(partitionSort([5,1,6,7,2,8,9,3]));
