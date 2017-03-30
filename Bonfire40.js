function updateInventory(arr1, arr2) {
    var curInvNames = [], newInvNames = [];
    createOneDiminisonalArray(arr1, curInvNames);
    createOneDiminisonalArray(arr2, newInvNames);
    findAndUpdateExistingInventories(arr2, curInvNames, newInvNames, arr1);
    return arr1.sort(alphabetizeTwoDArray);
}
function createOneDiminisonalArray(TwoDArray, newArrayName) {
    for (var i = 0; i < TwoDArray.length; i++) {
        newArrayName[i] = TwoDArray[i][1];
    }
}
function findAndUpdateExistingInventories(arr2, curInvNames, newInvNames, arr1) {
    for (var j in arr2) {

        if (curInvNames.indexOf(newInvNames[j]) < 0) {
            arr1.push([0, newInvNames[j]]);
            curInvNames.push(newInvNames[j]);
        }
        if (curInvNames.indexOf(newInvNames[j]) >= 0) {
            var indexOfInventory = curInvNames.indexOf(newInvNames[j]);
            console.log(indexOfInventory);
            arr1[indexOfInventory][0] += arr2[j][0];
        }
    }
    return arr1;
}
function alphabetizeTwoDArray(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}